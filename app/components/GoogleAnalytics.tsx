"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

type GoogleAnalyticsProps = {
  measurementId: string;
};

function track(eventName: string, parameters: Record<string, string>) {
  window.gtag?.("event", eventName, parameters);
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    track("page_view", {
      page_path: pathname,
      page_title: document.title,
      language: pathname === "/en" || pathname.startsWith("/en/") ? "en" : "th",
    });
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const clickedElement = event.target instanceof Element
        ? event.target
        : event.target instanceof Node
          ? event.target.parentElement
          : null;
      const anchor = clickedElement?.closest("a");
      const linkUrl = anchor?.getAttribute("href");

      if (!linkUrl) return;

      const pagePath = `${window.location.pathname}${window.location.search}`;
      const language = window.location.pathname === "/en" || window.location.pathname.startsWith("/en/") ? "en" : "th";
      const parameters = {
        page_path: pagePath,
        page_title: document.title,
        link_url: new URL(linkUrl, window.location.origin).href,
        language,
      };

      if (linkUrl.includes("lin.ee/")) {
        window.gtag?.("event", "line_click", {
          ...parameters,
          transport_type: "beacon",
        });
      }
      if (linkUrl.includes("facebook.com/")) track("facebook_click", parameters);
      if (linkUrl.startsWith("tel:")) track("phone_click", parameters);
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){window.dataLayer.push(arguments);};
          window.gtag('js', new Date());
          window.gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}