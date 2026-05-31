"use client";

import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function HeadsetModel() {
  const group = useRef<THREE.Group>(null);
  const obj = useLoader(OBJLoader, "/models/PolyHeadset.obj");

  // Applica materiale cyan/dark a tutte le mesh del modello
  obj.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.material = new THREE.MeshStandardMaterial({
        color: "#0000ff",
        metalness: 0.7,
        roughness: 0.25,
        emissive: "#00d9ff",
        emissiveIntensity: 0.15,
      });
    }
  });

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={group}>
      <primitive object={obj} scale={0.01} position={[0, 0, 0]} />
    </group>
  );
}

export default function VRHeadsetAssembly() {
  return (
    <Suspense fallback={null}>
      <HeadsetModel />
      <pointLight position={[3, 3, 3]} intensity={2} color="#ffffff" />
      <pointLight position={[-3, -2, 2]} intensity={1.5} color="#00d9ff" />
      <pointLight position={[0, -3, 1]} intensity={0.8} color="#0066ff" />
      <ambientLight intensity={0.4} />
    </Suspense>
  );
}