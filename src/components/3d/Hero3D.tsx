"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Shape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 0]} />
        <meshStandardMaterial 
          color="rgb(45, 160, 255)" 
          wireframe 
          transparent
          opacity={0.50}
        />
      </mesh>
      
      <mesh>
        <icosahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial 
          color="#0a0b10" 
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.25]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Shape />
      </Canvas>
    </div>
  );
}
