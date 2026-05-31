"use client";

import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from "three";

// Materiali basati sui nomi del file MTL
const MATERIALS: Record<string, THREE.MeshStandardMaterial> = {
  Foam: new THREE.MeshStandardMaterial({
    color: "#000000",
    roughness: 0.95,
    metalness: 0.0,
  }),
  Gray_Plastic: new THREE.MeshStandardMaterial({
    color: "#000000",
    roughness: 0.4,
    metalness: 0.3,
  }),
  Headset_M: new THREE.MeshStandardMaterial({
    color: "#ffffff",
    roughness: 0.3,
    metalness: 0.6,
  }),
  L: new THREE.MeshStandardMaterial({
    color: "#000000",
    roughness: 0.35,
    metalness: 0.5,
  }),
  Lens: new THREE.MeshStandardMaterial({
    color: "#000000",
    roughness: 0.05,
    metalness: 0.9,
    envMapIntensity: 1.5,
  }),
  Strap: new THREE.MeshStandardMaterial({
    color: "#0051ff",
    roughness: 0.8,
    metalness: 0.1,
  }),
};

function HeadsetModel({ isUserInteracting }: { isUserInteracting: boolean }) {
  const group = useRef<THREE.Group>(null);
  const materials = useLoader(MTLLoader, "/models/PolyHeadset.mtl");
  const obj = useLoader(OBJLoader, "/models/PolyHeadset.obj", (loader) => {
    materials.preload();
    (loader as OBJLoader).setMaterials(materials);
  });

  useEffect(() => {
    if (!group.current) return;

    // Applica materiali per nome
    group.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const matName = Array.isArray(mesh.material)
          ? (mesh.material[0] as THREE.Material).name
          : (mesh.material as THREE.Material).name;

        if (matName && MATERIALS[matName]) {
          mesh.material = MATERIALS[matName];
        }

        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });

    // Centra e scala
    const box = new THREE.Box3().setFromObject(group.current);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim === 0) return;

    const scale = 2.5 / maxDim;
    group.current.scale.setScalar(scale);
    group.current.position.set(
      -center.x * scale,
      -center.y * scale,
      -center.z * scale
    );
  }, [obj]);

  useFrame((state) => {
    if (!group.current) return;
    if (!isUserInteracting) {
      group.current.rotation.y += 0.005;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    }
  });

  return (
    <group ref={group}>
      <primitive object={obj} />
    </group>
  );
}

function FallbackBox() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00d9ff" />
    </mesh>
  );
}

export default function HeadsetVRScene() {
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: "100%", height: "500px", background: "rgba(3,3,3,0)" }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Luce principale frontale */}
      <directionalLight
        position={[3, 4, 5]}
        intensity={3}
        castShadow
      />
      {/* Luce di riempimento laterale */}
      <directionalLight
        position={[-4, 2, -3]}
        intensity={1.5}
        color="#8899ff"
      />
      {/* Luce dal basso per dettagli */}
      <pointLight position={[0, -3, 2]} intensity={1} color="#ffffff" />
      {/* Luce ambiente leggera */}
      <ambientLight intensity={0.5} />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={2}
        maxDistance={10}
        onStart={() => setIsUserInteracting(true)}
        onEnd={() => setIsUserInteracting(false)}
      />

      <Suspense fallback={<FallbackBox />}>
        <HeadsetModel isUserInteracting={isUserInteracting} />
      </Suspense>
    </Canvas>
  );
}