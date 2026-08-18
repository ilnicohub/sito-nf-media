"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Navbar.module.css";
import BrandLogo from "./BrandLogo";
import { regions } from "@/data/regions";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<"main" | "regions">("main");
  const [desktopRegionsOpen, setDesktopRegionsOpen] = useState(false);
  const [desktopRegionsSuppressed, setDesktopRegionsSuppressed] = useState(false);
  const scrollPositionRef = useRef(0);
  const navigationCloseRef = useRef(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const suppressUntilMouseLeaveRef = useRef(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const scrollPosition = scrollPositionRef.current;
    const previousStyles = {
      bodyOverflow: document.body.style.overflow,
      bodyPosition: document.body.style.position,
      bodyTop: document.body.style.top,
      bodyWidth: document.body.style.width,
      htmlOverflow: document.documentElement.style.overflow,
      htmlScrollBehavior: document.documentElement.style.scrollBehavior,
    };
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
    document.documentElement.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobilePanel("main");
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousStyles.bodyOverflow;
      document.body.style.position = previousStyles.bodyPosition;
      document.body.style.top = previousStyles.bodyTop;
      document.body.style.width = previousStyles.bodyWidth;
      document.documentElement.style.overflow = previousStyles.htmlOverflow;
      document.documentElement.style.scrollBehavior = "auto";
      if (!navigationCloseRef.current) {
        window.scrollTo(0, scrollPosition);
      }
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = previousStyles.htmlScrollBehavior;
        navigationCloseRef.current = false;
      });
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const toggleMobileMenu = () => {
    if (!isOpen) scrollPositionRef.current = window.scrollY;
    if (isOpen) setMobilePanel("main");
    setIsOpen((open) => !open);
  };

  useEffect(() => {
    if (isOpen) navigationCloseRef.current = true;
    const frame = requestAnimationFrame(() => {
      setDesktopRegionsOpen(false);
      setDesktopRegionsSuppressed(suppressUntilMouseLeaveRef.current);
      if (isOpen) {
        setIsOpen(false);
        setMobilePanel("main");
      }
    });
    // `pathname` changes only after the destination route has been committed.
    // Keeping the overlay open until this point prevents the previous page flashing.
    return () => cancelAnimationFrame(frame);
    // `isOpen` is intentionally omitted: opening the menu must not close it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!desktopRegionsOpen) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!desktopDropdownRef.current?.contains(event.target as Node)) {
        setDesktopRegionsOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDesktopRegionsOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [desktopRegionsOpen]);

  const navItems: Array<{ name: string; path?: string; regions?: true }> = [
    { name: "Home", path: "/" },
    { name: "Servizi", path: "/servizi" },
    { name: "Progetti", path: "/case-studies" },
    { name: "Dove operiamo", regions: true },
    { name: "Chi Siamo", path: "/chi-siamo" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? 'glass' : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="NF Media Lab - Home">
          <BrandLogo compact priority />
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {navItems.map((item) => item.regions ? (
            <div
              className={`${styles.desktopDropdown} ${desktopRegionsOpen ? styles.desktopDropdownOpen : ""} ${desktopRegionsSuppressed ? styles.desktopDropdownSuppressed : ""}`}
              key={item.name}
              ref={desktopDropdownRef}
              onMouseLeave={() => {
                suppressUntilMouseLeaveRef.current = false;
                setDesktopRegionsSuppressed(false);
                setDesktopRegionsOpen(false);
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setDesktopRegionsOpen(false);
              }}
            >
              <button
                className={`${styles.navLink} ${pathname.startsWith("/dove-operiamo") ? styles.active : ""}`}
                aria-haspopup="true"
                aria-expanded={desktopRegionsOpen}
                onClick={() => setDesktopRegionsOpen((open) => !open)}
              >
                {item.name} <ChevronDown size={15} />
              </button>
              <div className={styles.desktopSubmenu}>
                <Link href="/dove-operiamo" onPointerDown={() => { suppressUntilMouseLeaveRef.current = true; }} className={styles.submenuOverview}><span>Panoramica</span><small>Tutti i territori</small></Link>
                {regions.map((region) => <Link key={region.slug} href={`/dove-operiamo/${region.slug}`} onPointerDown={() => { suppressUntilMouseLeaveRef.current = true; }} className={pathname === `/dove-operiamo/${region.slug}` ? styles.activeSubmenu : ""}>{region.name}</Link>)}
              </div>
            </div>
          ) : (
            <Link key={item.path} href={item.path!} className={`${styles.navLink} ${pathname === item.path ? styles.active : ""}`}>{item.name}</Link>
          ))}
          <Link href="/contatti" className="primaryBtn">
            Inizia Ora
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={toggleMobileMenu}
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            className={styles.mobileMenu}
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.8rem) 2.8rem)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 2.8rem) 2.8rem)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.8rem) 2.8rem)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.mobileMenuInner}>
              <AnimatePresence mode="wait" initial={false}>
                {mobilePanel === "main" ? (
                  <motion.div key="main" className={styles.mobilePanel} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
                    <div className={styles.mobileLinks}>
                      {navItems.map((item, index) => (
                        <motion.div key={item.name} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + index * 0.045, duration: 0.35 }}>
                          {item.regions ? (
                            <button className={`${styles.mobileLink} ${styles.mobileSubmenuTrigger} ${pathname.startsWith("/dove-operiamo") ? styles.active : ""}`} onClick={() => setMobilePanel("regions")}>{item.name} <ChevronDown size={24} /></button>
                          ) : (
                            <Link href={item.path!} className={`${styles.mobileLink} ${pathname === item.path ? styles.active : ""}`}>{item.name}</Link>
                          )}
                        </motion.div>
                      ))}
                    </div>
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.4 }}><Link href="/contatti" className={styles.mobileCta}>Inizia Ora</Link></motion.div>
                  </motion.div>
                ) : (
                  <motion.div key="regions" className={styles.mobilePanel} initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 32 }} transition={{ duration: 0.3 }}>
                    <button className={styles.mobileBack} onClick={() => setMobilePanel("main")}><ArrowLeft size={18} /> Menu principale</button>
                    <div className={`${styles.mobileLinks} ${styles.regionLinks}`}>
                      <Link href="/dove-operiamo" className={`${styles.mobileLink} ${pathname === "/dove-operiamo" ? styles.active : ""}`}>Panoramica</Link>
                      {regions.map((region) => <Link key={region.slug} href={`/dove-operiamo/${region.slug}`} className={`${styles.mobileLink} ${pathname === `/dove-operiamo/${region.slug}` ? styles.active : ""}`}>{region.name}</Link>)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
