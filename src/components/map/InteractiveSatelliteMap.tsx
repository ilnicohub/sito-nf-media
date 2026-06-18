"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Crosshair, RotateCcw, Compass, Radio, Plus, Minus } from "lucide-react";
import styles from "./InteractiveSatelliteMap.module.css";

// Formattatore di coordinate GPS per un look high-tech
const formatCoord = (val: number, type: "lat" | "lon") => {
  const dir = type === "lat" ? (val >= 0 ? "N" : "S") : (val >= 0 ? "E" : "W");
  const absVal = Math.abs(val);
  const degrees = Math.floor(absVal);
  const minutesDec = (absVal - degrees) * 60;
  const minutes = Math.floor(minutesDec);
  const seconds = ((minutesDec - minutes) * 60).toFixed(1);
  return `${degrees}°${minutes}'${seconds}" ${dir}`;
};

export default function InteractiveSatelliteMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  
  // Motion values per drag liscio gestito da Framer Motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Livello di scala/zoom (0.6x = zoom-out, 1.0x = default, 2.5x = zoom-in)
  const [scale, setScale] = useState(1.0);
  
  // Coordinate correnti in tempo reale basate sulla posizione di drag e zoom
  const [coords, setCoords] = useState({ lat: 45.6669, lon: 12.2431 });

  // 1. Gestione dello zoom tramite mouse wheel attivo (per evitare passive warning e bloccare lo scroll pagina)
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handleWheelZoom = (e: WheelEvent) => {
      e.preventDefault(); // blocca lo scroll della pagina
      const zoomIntensity = 0.08;
      setScale((prevScale) => {
        const newScale = prevScale - e.deltaY * zoomIntensity * 0.01;
        return Math.min(Math.max(0.6, newScale), 2.5);
      });
    };

    viewport.addEventListener("wheel", handleWheelZoom, { passive: false });
    return () => {
      viewport.removeEventListener("wheel", handleWheelZoom);
    };
  }, []);

  // 2. Aggiornamento in tempo reale delle coordinate GPS in base al drag e al livello di zoom
  useEffect(() => {
    // 1px a zoom 14 è circa 0.0000858 gradi di longitudine e 0.000065 di latitudine.
    // Dividiamo per 'scale' perché a zoom elevato lo spostamento fisico corrisponde a meno gradi reali.
    const unsubscribeX = x.on("change", (latestX) => {
      setCoords((prev) => ({
        ...prev,
        lon: 12.2431 - (latestX / scale) * 0.0000858,
      }));
    });
    
    const unsubscribeY = y.on("change", (latestY) => {
      setCoords((prev) => ({
        ...prev,
        lat: 45.6669 + (latestY / scale) * 0.000065,
      }));
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [x, y, scale]);

  // Generiamo una griglia 5x5 di tile satellitari Esri centrate su Treviso (Z=14, X=8748, Y=5850)
  const tiles: { url: string; xOffset: number; yOffset: number }[] = [];
  const centralX = 8748;
  const centralY = 5850;
  const tileSize = 256;

  for (let dy = -2; dy <= 2; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      const tileX = centralX + dx;
      const tileY = centralY + dy;
      tiles.push({
        url: `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/14/${tileY}/${tileX}`,
        xOffset: dx * tileSize,
        yOffset: dy * tileSize,
      });
    }
  }

  // Funzioni per bottoni zoom e reset
  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2.5));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.6));
  const handleReset = () => {
    x.set(0);
    y.set(0);
    setScale(1.0);
  };

  return (
    <div className={styles.mapWrapper} ref={containerRef}>
      {/* 1. Mappa Satellitare Interattiva con drag e scale */}
      <div className={styles.mapViewport} ref={viewportRef}>
        <motion.div
          className={styles.dragContainer}
          drag
          dragElastic={0.1}
          dragMomentum={true}
          dragConstraints={{ left: -350, right: 350, top: -350, bottom: 350 }}
          style={{ x, y, scale }}
        >
          {/* Griglia di Tiles Satellitari */}
          <div className={styles.tileGrid}>
            {tiles.map((tile, i) => (
              <img
                key={i}
                src={tile.url}
                alt=""
                className={styles.mapTile}
                style={{
                  width: `${tileSize}px`,
                  height: `${tileSize}px`,
                  transform: `translate(${tile.xOffset}px, ${tile.yOffset}px)`,
                }}
                draggable={false}
                loading="lazy"
              />
            ))}
          </div>

          {/* 2. Beacon della sede principale a Treviso (glowing) */}
          <div className={styles.hqBeacon} style={{ transform: "translate(-50%, -50%)" }}>
            <div className={styles.pulseRing} />
            <div className={styles.pulseRing2} />
            <div className={styles.beaconDot} />
            <div className={styles.beaconLabel}>
              <span className={styles.beaconName}>HQ: NF MEDIA LAB</span>
              <span className={styles.beaconCity}>Treviso</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Futuristic HUD & Grid overlay */}
      <div className={styles.hudOverlay}>
        {/* Reticolo di coordinate centrali */}
        <div className={styles.centerReticle}>
          <Crosshair size={24} strokeWidth={1} className={styles.crosshairIcon} />
        </div>

        {/* Linee di scansione radar (scanline) */}
        <div className={styles.scanline} />

        {/* Griglia tech di fondo */}
        <div className={styles.techGrid} />

        {/* Panel GPS in tempo reale (Top Right) */}
        <div className={styles.gpsPanel}>
          <div className={styles.panelTitle}>SATELLITE BEACON</div>
          <div className={styles.coordinateRow}>
            <span className={styles.coordLabel}>LAT</span>
            <span className={styles.coordValue}>{formatCoord(coords.lat, "lat")}</span>
          </div>
          <div className={styles.coordinateRow}>
            <span className={styles.coordLabel}>LON</span>
            <span className={styles.coordValue}>{formatCoord(coords.lon, "lon")}</span>
          </div>
        </div>

        {/* Panel Stato (Top Left) */}
        <div className={styles.statusPanel}>
          <div className={styles.statusRow}>
            <Radio size={14} className={styles.statusIconPulse} />
            <span>FEED: ON-AIR</span>
          </div>
          <div className={styles.specRow}>ZOOM: {(scale * 14).toFixed(1)}X</div>
          <div className={styles.specRow}>RES: {(1.2 / scale).toFixed(2)}m/PX</div>
        </div>

        {/* Angoli di calibrazione futuristici */}
        <div className={`${styles.cornerMarker} ${styles.topLeft}`} />
        <div className={`${styles.cornerMarker} ${styles.topRight}`} />
        <div className={`${styles.cornerMarker} ${styles.bottomLeft}`} />
        <div className={`${styles.cornerMarker} ${styles.bottomRight}`} />

        {/* Scala e bussola (Bottom Left) */}
        <div className={styles.compassScalePanel}>
          <div className={styles.compassContainer}>
            <Compass size={16} className={styles.compassIcon} />
            <span>HEADING: 000°</span>
          </div>
          <div className={styles.scaleBar}>
            <div className={styles.scaleTicks} />
            <div className={styles.scaleText}>{(500 / scale).toFixed(0)} m</div>
          </div>
        </div>
      </div>

      {/* 4. Pannello dei Controlli (Zoom & Re-center) (Bottom Right) */}
      <div className={styles.controlsBox}>
        <button 
          className={styles.controlButton} 
          onClick={handleZoomIn} 
          title="Ingrandisci"
        >
          <Plus size={16} />
        </button>
        <button 
          className={styles.controlButton} 
          onClick={handleZoomOut} 
          title="Rimpicciolisci"
        >
          <Minus size={16} />
        </button>
        <button 
          className={styles.controlButton} 
          onClick={handleReset} 
          title="Centra su Treviso HQ e ripristina zoom"
        >
          <RotateCcw size={14} />
          <span className={styles.controlBtnText}>RESET</span>
        </button>
      </div>
    </div>
  );
}
