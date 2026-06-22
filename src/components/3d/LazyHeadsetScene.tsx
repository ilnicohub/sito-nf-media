"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import styles from "./LazyScenes.module.css";

const HeadsetVRScene = dynamic(() => import("./HeadsetVRScene"), {
  ssr: false,
});

export default function LazyHeadsetScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsNearViewport(entry.isIntersecting),
      { rootMargin: "250px 0px", threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={styles.headsetScene}>
      {isNearViewport ? (
        <HeadsetVRScene />
      ) : (
        <div className={styles.headsetFallback} aria-hidden="true" />
      )}
    </div>
  );
}
