"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Servizi", path: "/servizi" },
    { name: "Progetti", path: "/case-studies" },
    { name: "Chi Siamo", path: "/chi-siamo" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? 'glass' : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="NF Media Lab - Home">
          <BrandLogo compact priority />
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contatti" className="primaryBtn">
            Inizia Ora
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Chiudi menu" : "Apri menu"}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`${styles.mobileLink} ${pathname === link.path ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contatti" className="primaryBtn" style={{textAlign: 'center'}} onClick={() => setIsOpen(false)}>
            Inizia Ora
          </Link>
        </div>
      )}
    </nav>
  );
}
