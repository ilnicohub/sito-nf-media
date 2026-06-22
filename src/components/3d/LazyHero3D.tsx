"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import styles from "./LazyScenes.module.css";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function LazyHero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const activate = () => setHasInteracted(true);
    const passiveOnce: AddEventListenerOptions = { once: true, passive: true };

    window.addEventListener("pointermove", activate, passiveOnce);
    window.addEventListener("touchstart", activate, passiveOnce);
    window.addEventListener("scroll", activate, passiveOnce);
    window.addEventListener("keydown", activate, { once: true });

    return () => {
      window.removeEventListener("pointermove", activate);
      window.removeEventListener("touchstart", activate);
      window.removeEventListener("scroll", activate);
      window.removeEventListener("keydown", activate);
    };
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={styles.heroScene} aria-hidden="true">
      <div className={styles.heroFallback} />
      {hasInteracted && isVisible ? <Hero3D /> : null}
    </div>
  );
}
