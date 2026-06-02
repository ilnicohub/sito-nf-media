"use client";

import { useEffect } from "react";

export default function AnalyticsLoader() {
  useEffect(() => {
    // Expose a loader function to the global scope that will inject analytics scripts when called.
    // It checks for NEXT_PUBLIC_GA_ID at build time; if set, it injects GA4 via gtag.
    // If not set, the function becomes a no-op.
    // eslint-disable-next-line no-undef, @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.loadAnalytics = function loadAnalytics() {
      try {
        // @ts-ignore
        const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
        if (!GA_ID) return;
        // avoid loading twice
        if ((window as any)._gaLoaded) return;
        (window as any)._gaLoaded = true;

        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}', { send_page_view: true });`;
        document.head.appendChild(script2);
      } catch (e) {
        // no-op
      }
    };
  }, []);

  return null;
}
