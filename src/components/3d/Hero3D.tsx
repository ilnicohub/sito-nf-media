"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Environment, Float } from "@react-three/drei";
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
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[2.2, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#3b82f6" 
          wireframe 
          transparent
          opacity={0.50}
        />
      </Icosahedron>
      
      {/* Core solid inside */}
      <Icosahedron args={[1.1, 0]}>
        <meshStandardMaterial 
          color="#0a0b10" 
          roughness={0.1}
          metalness={0.9}
        />
      </Icosahedron>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Shape />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
