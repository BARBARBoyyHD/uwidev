"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { useHydrated, useReducedMotion } from "@/lib/hydrated";
import { t, type Locale } from "@/lib/lang";

const GhostFibers = dynamic(() => import("@/components/hero/GhostFibers"), {
  ssr: false,
});

const BEATS = {
  headline: 0,
  sub: 0.15,
  cta: 0.3,
};

/**
 * Hydration-safe hero entrance. Server + hydration render the plain div
 * (content instantly visible for no-JS / slow-JS), then once hydrated and
 * motion is allowed, each beat slides+fades into place with a smooth
 * deceleration curve.
 */
function HeroBeat({ delay, children }: { delay: number; children: ReactNode }) {
  const isHydrated = useHydrated();
  const reduceMotion = useReducedMotion();

  if (!isHydrated || reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection({ locale }: { locale: Locale }) {
  const dict = t(locale).hero;

  return (
    <section
      id="top"
      className="hero-radial-mesh sticky top-0 z-0 overflow-clip border-b border-white/10 bg-void text-white"
    >
      {/* electric-blue bloom, low center-left; fades back to near-black
          before the bottom edge where the capability strip begins */}
      <div
        className="hero-bloom pointer-events-none absolute inset-0"
        aria-hidden
      />

      {/* grid lines — dark upper zone only, masked away before the bloom */}
      <div
        className="grid-lines-pattern pointer-events-none absolute inset-0 opacity-40"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 42%, transparent 72%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 42%, transparent 72%)",
        }}
        aria-hidden
      />

      {/* ghost fibers — decorative depth field behind the hero content.
          Section and content wrapper are both `relative`, so DOM order keeps
          this below the content; no negative z-index (the section does not
          create its own stacking context, -z-* would hide it behind bg-void). */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <GhostFibers
          lineColor="#0B1E5B"
          glowColor="#3D5AFE"
          layers={2}
          scale={2}
          speed={0.15}
          fps={30}
          dpr={1}
          vignette={0.8}
          grain={0.04}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-32 pt-24 md:px-8 md:pb-48 md:pt-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <HeroBeat delay={BEATS.headline}>
            <div>
              {/* hairline chips */}
              <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
                {dict.eyebrowChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-md border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] font-medium text-ink-on-dark-muted"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* two-tone headline */}
              <h1 className="mb-6 text-[40px] font-medium leading-[1.05] tracking-tight sm:text-[60px] lg:text-[64px]">
                <span className="text-white/70">{dict.headline.line1}</span>
                <br className="hidden sm:block" />
                <span className="text-white">{dict.headline.line2}</span>
              </h1>
            </div>
          </HeroBeat>
          <HeroBeat delay={BEATS.sub}>
            <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-ink-on-dark-muted md:text-lg">
              {dict.sub}
            </p>
          </HeroBeat>

          <HeroBeat delay={BEATS.cta}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              {/* split CTA: label segment + attached arrow segment */}
              <a
                href="#contact"
                className="group inline-flex items-center overflow-hidden rounded-[10px] transition-[filter] duration-150 hover:brightness-110"
              >
                <div className="flex items-center gap-2 bg-electric px-6 py-3.5 text-sm font-medium text-white">
                  <span className="flex items-center text-sm font-medium text-white">
                    {dict.cta}
                  </span>
                  <span className="flex items-center text-white">
                    <ArrowRight
                      className="h-4 w-4"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </span>
                </div>
              </a>
              <span className="font-mono text-xs text-ink-on-dark-muted sm:border-l sm:border-white/15 sm:py-1 sm:pl-4">
                {dict.supporting}
              </span>
            </div>
          </HeroBeat>
        </div>

        {/* Capability strip — the dark zone hands off into the light body */}
        <div className="mt-16 border-t border-white/10 pt-6 md:mt-20">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[11px] font-medium text-ink-on-dark-muted">
            {dict.capabilities.map((capability, index) => (
              <li key={capability} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                {capability}
                {index < dict.capabilities.length - 1 && (
                  <span className="hidden text-white/20 md:inline">/</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
