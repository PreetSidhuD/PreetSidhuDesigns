"use client";

import Script from "next/script";
import { BUSINESS } from "@/lib/constants";

export default function CalendlyEmbed() {
  return (
    <>
      <div
        className="calendly-inline-widget rounded-2xl border border-[var(--color-border)]"
        data-url={`${BUSINESS.calendlyUrl}?background_color=181818&text_color=ffffff&primary_color=ff4a17`}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
