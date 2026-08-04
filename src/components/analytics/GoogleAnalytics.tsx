"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const CONSENT_KEY = "nf_cookie_consent";
const CONSENT_EVENT = "nf-cookie-consent";

function AnalyticsPageView({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag("config", measurementId, {
      page_path: pagePath,
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

  useEffect(() => {
    const syncConsent = () => {
      const consentStr = localStorage.getItem(CONSENT_KEY);
      if (consentStr === "all" || consentStr === "true") {
        setHasConsent(true);
        return;
      }
      
      const prefsStr = localStorage.getItem("nf_cookie_prefs");
      if (prefsStr) {
        try {
          const prefs = JSON.parse(prefsStr);
          if (prefs.analytics) {
            setHasConsent(true);
            return;
          }
        } catch (e) {}
      }
      
      setHasConsent(false);
    };

    syncConsent();
    window.addEventListener(CONSENT_EVENT, syncConsent);
    return () => window.removeEventListener(CONSENT_EVENT, syncConsent);
  }, []);

  if (!measurementId || !hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <AnalyticsPageView measurementId={measurementId} />
      </Suspense>
    </>
  );
}
