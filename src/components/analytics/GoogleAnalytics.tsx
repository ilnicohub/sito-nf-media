"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const CONSENT_KEY = "nf_cookie_consent";
const CONSENT_EVENT = "nf-cookie-consent";
const SCRIPT_ID = "nf-google-analytics-script";

function hasAnalyticsConsent() {
  const consentStr = localStorage.getItem(CONSENT_KEY);
  if (consentStr === "all" || consentStr === "true") {
    return true;
  }

  const prefsStr = localStorage.getItem("nf_cookie_prefs");
  if (!prefsStr) {
    return false;
  }

  try {
    const prefs = JSON.parse(prefsStr);
    return prefs.analytics === true;
  } catch {
    return false;
  }
}

function AnalyticsPageView({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    const isDevelopment = process.env.NODE_ENV === "development";

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
      send_to: measurementId,
      ...(isDevelopment ? { debug_mode: true } : {}),
    });
  }, [measurementId, pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics({
  measurementId,
}: {
  measurementId?: string;
}) {
  const [hasConsent, setHasConsent] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const consentGranted = hasAnalyticsConsent();
      setHasConsent(consentGranted);
      if (!consentGranted) {
        setIsReady(false);
      }
    };

    syncConsent();
    window.addEventListener(CONSENT_EVENT, syncConsent);
    return () => window.removeEventListener(CONSENT_EVENT, syncConsent);
  }, []);

  useEffect(() => {
    if (!measurementId || !hasConsent) return;

    // Se lo script è già stato caricato, chiama solo config e segna come ready
    if (document.getElementById(SCRIPT_ID)) {
      if (typeof window.gtag === "function") {
        const isDevelopment = process.env.NODE_ENV === "development";
        window.gtag("config", measurementId, {
          send_page_view: false,
          ...(isDevelopment ? { debug_mode: true } : {}),
        });
        setIsReady(true);
      }
      return;
    }

    // Prima volta: inizializza dataLayer e gtag tramite inline script
    // (unico modo sicuro per avere `arguments` disponibile nel contesto giusto)
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
    `;
    document.head.appendChild(inlineScript);

    // Poi carica lo script GTM esterno
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

    script.addEventListener("load", () => {
      const isDevelopment = process.env.NODE_ENV === "development";
      window.gtag?.("config", measurementId, {
        send_page_view: false,
        ...(isDevelopment ? { debug_mode: true } : {}),
      });
      setIsReady(true);
    });

    script.addEventListener("error", () => {
      console.warn("[GA] Impossibile caricare lo script Google Analytics.");
    });

    document.head.appendChild(script);
  }, [hasConsent, measurementId]);

  if (!measurementId || !hasConsent) return null;

  return (
    <>
      {isReady && (
        <Suspense fallback={null}>
          <AnalyticsPageView measurementId={measurementId} />
        </Suspense>
      )}
    </>
  );
}
