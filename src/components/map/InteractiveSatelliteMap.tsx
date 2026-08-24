"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl, { type Map as MapLibreMap, type StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Compass, Crosshair, Minus, Plus, Radio, RotateCcw } from "lucide-react";
import styles from "./InteractiveSatelliteMap.module.css";

const MAP_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    openmaptiles: {
      type: "vector",
      url: "https://tiles.openfreemap.org/planet",
      attribution:
        '<a href="https://openfreemap.org/" target="_blank">OpenFreeMap</a> · © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>',
    },
  },
  glyphs: "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
  layers: [
    { id: "background", type: "background", paint: { "background-color": "#24292d" } },
    {
      id: "landcover",
      type: "fill",
      source: "openmaptiles",
      "source-layer": "landcover",
      paint: {
        "fill-color": [
          "match",
          ["get", "class"],
          "wood", "#34483f",
          "grass", "#3a4840",
          "farmland", "#3e453d",
          "wetland", "#31484a",
          "sand", "#595344",
          "#30363a",
        ],
        "fill-opacity": 0.72,
      },
    },
    {
      id: "landuse",
      type: "fill",
      source: "openmaptiles",
      "source-layer": "landuse",
      paint: {
        "fill-color": [
          "match",
          ["get", "class"],
          "residential", "#343a3f",
          "commercial", "#3c3a40",
          "industrial", "#3d3c3a",
          "park", "#354a40",
          "cemetery", "#3a4540",
          "hospital", "#463b3f",
          "school", "#414139",
          "#343a3e",
        ],
        "fill-opacity": 0.8,
      },
    },
    {
      id: "water",
      type: "fill",
      source: "openmaptiles",
      "source-layer": "water",
      paint: { "fill-color": "#173a49" },
    },
    {
      id: "waterway",
      type: "line",
      source: "openmaptiles",
      "source-layer": "waterway",
      paint: { "line-color": "#296176", "line-opacity": 0.85, "line-width": 1 },
    },
    {
      id: "buildings",
      type: "fill",
      source: "openmaptiles",
      "source-layer": "building",
      minzoom: 13,
      paint: {
        "fill-color": "#596066",
        "fill-opacity": ["interpolate", ["linear"], ["zoom"], 13, 0.32, 16, 0.72],
        "fill-outline-color": "#697278",
      },
    },
    {
      id: "roads-casing",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: ["match", ["get", "class"], ["motorway", "trunk", "primary", "secondary", "tertiary", "minor", "service", "path"], true, false],
      layout: { "line-cap": "round", "line-join": "round" },
      paint: {
        "line-color": "#252a2e",
        "line-width": ["interpolate", ["exponential", 1.35], ["zoom"], 8, 1.2, 13, 2.8, 18, 14],
      },
    },
    {
      id: "roads",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: ["match", ["get", "class"], ["motorway", "trunk", "primary", "secondary", "tertiary", "minor", "service", "path"], true, false],
      layout: { "line-cap": "round", "line-join": "round" },
      paint: {
        "line-color": [
          "match",
          ["get", "class"],
          ["motorway", "trunk"], "#87939a",
          ["primary", "secondary"], "#727d83",
          "#5d676d",
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 8, 0.65, 14, 0.92],
        "line-width": ["interpolate", ["exponential", 1.35], ["zoom"], 8, 0.55, 13, 1.45, 18, 9],
      },
    },
    {
      id: "boundaries",
      type: "line",
      source: "openmaptiles",
      "source-layer": "boundary",
      paint: { "line-color": "#839097", "line-dasharray": [3, 3], "line-opacity": 0.35 },
    },
    {
      id: "place-labels",
      type: "symbol",
      source: "openmaptiles",
      "source-layer": "place",
      layout: {
        "text-field": ["coalesce", ["get", "name:it"], ["get", "name"]],
        "text-font": ["Noto Sans Regular"],
        "text-size": ["interpolate", ["linear"], ["zoom"], 8, 11, 13, 15, 17, 18],
        "text-max-width": 9,
      },
      paint: {
        "text-color": "#e8ecee",
        "text-halo-color": "#24292d",
        "text-halo-width": 1.4,
        "text-halo-blur": 0.5,
      },
    },
    {
      id: "road-labels",
      type: "symbol",
      source: "openmaptiles",
      "source-layer": "transportation_name",
      minzoom: 13,
      layout: {
        "symbol-placement": "line",
        "text-field": ["coalesce", ["get", "name:it"], ["get", "name"]],
        "text-font": ["Noto Sans Regular"],
        "text-size": 10,
      },
      paint: {
        "text-color": "#bdc6ca",
        "text-halo-color": "#2b3034",
        "text-halo-width": 1.2,
      },
    },
  ],
};

const formatCoord = (value: number, type: "lat" | "lon") => {
  const direction = type === "lat" ? (value >= 0 ? "N" : "S") : (value >= 0 ? "E" : "W");
  const absolute = Math.abs(value);
  const degrees = Math.floor(absolute);
  const minutesDecimal = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesDecimal);
  const seconds = ((minutesDecimal - minutes) * 60).toFixed(1);
  return `${degrees}°${minutes}'${seconds}" ${direction}`;
};

type InteractiveSatelliteMapProps = {
  latitude?: number;
  longitude?: number;
  beaconName?: string;
  beaconCity?: string;
  zoom?: number;
};

export default function InteractiveSatelliteMap({
  latitude = 45.6714566,
  longitude = 12.0071169,
  beaconName = "HQ: NF MEDIA LAB",
  beaconCity = "Vedelago (TV)",
  zoom = 12.8,
}: InteractiveSatelliteMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const [coords, setCoords] = useState({ lat: latitude, lon: longitude });
  const [currentZoom, setCurrentZoom] = useState(zoom);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: MAP_STYLE,
      center: [longitude, latitude],
      zoom,
      minZoom: 8,
      maxZoom: 19,
      attributionControl: false,
      cooperativeGestures: true,
    });

    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();
    map.scrollZoom.disable();

    const markerElement = document.createElement("div");
    markerElement.className = styles.mapBeacon;
    markerElement.setAttribute("aria-hidden", "true");

    const pulseRing = document.createElement("div");
    pulseRing.className = styles.pulseRing;
    const pulseRing2 = document.createElement("div");
    pulseRing2.className = styles.pulseRing2;
    const beaconDot = document.createElement("div");
    beaconDot.className = styles.beaconDot;

    const beaconLabel = document.createElement("div");
    beaconLabel.className = styles.beaconLabel;
    const beaconNameElement = document.createElement("span");
    beaconNameElement.className = styles.beaconName;
    beaconNameElement.textContent = beaconName;
    const beaconCityElement = document.createElement("span");
    beaconCityElement.className = styles.beaconCity;
    beaconCityElement.textContent = beaconCity;
    beaconLabel.append(beaconNameElement, beaconCityElement);
    markerElement.append(pulseRing, pulseRing2, beaconDot, beaconLabel);

    const beaconMarker = new maplibregl.Marker({ element: markerElement, anchor: "center" })
      .setLngLat([longitude, latitude])
      .addTo(map);

    const updateReadout = () => {
      const center = map.getCenter();
      setCoords({ lat: center.lat, lon: center.lng });
      setCurrentZoom(map.getZoom());
    };

    map.on("move", updateReadout);
    mapRef.current = map;

    return () => {
      map.off("move", updateReadout);
      beaconMarker.remove();
      map.remove();
      mapRef.current = null;
    };
  }, [beaconCity, beaconName, latitude, longitude, zoom]);

  const resetMap = () => {
    mapRef.current?.easeTo({ center: [longitude, latitude], zoom, duration: 700 });
  };

  return (
    <div className={styles.mapWrapper}>
      <div ref={mapContainerRef} className={styles.mapCanvas} aria-label={`Mappa interattiva di ${beaconCity}`} />

      <div className={styles.hudOverlay} aria-hidden="true">
        <div className={styles.centerReticle}><Crosshair size={24} strokeWidth={1} className={styles.crosshairIcon} /></div>
        <div className={styles.scanline} />
        <div className={styles.techGrid} />

        <div className={styles.gpsPanel}>
          <div className={styles.panelTitle}>TERRITORY BEACON</div>
          <div className={styles.coordinateRow}><span className={styles.coordLabel}>LAT</span><span className={styles.coordValue}>{formatCoord(coords.lat, "lat")}</span></div>
          <div className={styles.coordinateRow}><span className={styles.coordLabel}>LON</span><span className={styles.coordValue}>{formatCoord(coords.lon, "lon")}</span></div>
        </div>

        <div className={styles.statusPanel}>
          <div className={styles.statusRow}><Radio size={14} className={styles.statusIconPulse} /><span>FEED: ONLINE</span></div>
          <div className={styles.specRow}>ZOOM: {currentZoom.toFixed(1)}X</div>
          <div className={styles.specRow}>VECTOR MAP</div>
        </div>

        <div className={`${styles.cornerMarker} ${styles.topLeft}`} />
        <div className={`${styles.cornerMarker} ${styles.topRight}`} />
        <div className={`${styles.cornerMarker} ${styles.bottomLeft}`} />
        <div className={`${styles.cornerMarker} ${styles.bottomRight}`} />

        <div className={styles.compassScalePanel}>
          <div className={styles.compassContainer}><Compass size={16} className={styles.compassIcon} /><span>HEADING: 000°</span></div>
          <div className={styles.scaleBar}><div className={styles.scaleTicks} /><div className={styles.scaleText}>LOCAL AREA</div></div>
        </div>
      </div>

      <div className={styles.controlsBox}>
        <button className={styles.controlButton} onClick={() => mapRef.current?.zoomIn({ duration: 350 })} title="Ingrandisci" aria-label="Ingrandisci la mappa"><Plus size={16} /></button>
        <button className={styles.controlButton} onClick={() => mapRef.current?.zoomOut({ duration: 350 })} title="Rimpicciolisci" aria-label="Rimpicciolisci la mappa"><Minus size={16} /></button>
        <button className={styles.controlButton} onClick={resetMap} title={`Centra la mappa su ${beaconCity}`} aria-label={`Centra la mappa su ${beaconCity}`}><RotateCcw size={14} /><span className={styles.controlBtnText}>RESET</span></button>
      </div>

      <div className={styles.attribution}>
        <a href="https://openfreemap.org/" target="_blank" rel="noreferrer">OpenFreeMap</a><span> · © </span>
        <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap contributors</a>
      </div>
    </div>
  );
}
