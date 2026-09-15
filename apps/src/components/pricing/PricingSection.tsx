"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useReducedMotion } from "@/lib/hydrated";
import { t, type Locale } from "@/lib/lang";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PricingSection({ locale }: { locale: Locale }) {
  const dict = t(locale).pricing;
  const services = dict.services;
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex] ?? services[0];
  const topIndex = dict.tiers.length - 1;

  return (
    <section
      id="pricing"
      className="scroll-mt-16 relative z-10 grid-lines-light bg-white py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mb-16 border-b border-hairline pb-6">
            <p className="mb-2 font-mono text-[11px] font-medium text-accent">
              {dict.eyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-medium tracking-tight text-ink md:text-4xl lg:text-[44px]">
              {dict.title}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg">
              {dict.sub}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-secondary">
              {dict.intro}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="mb-2 font-mono text-[11px] font-medium text-ink-secondary">
                {dict.pickLabel}
              </p>
              <ul className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 lg:mx-0 lg:block lg:overflow-visible lg:px-0 lg:pb-0">
                {services.map((service, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <li key={service.id} className="shrink-0 lg:shrink">
                      <button
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        aria-pressed={isActive}
                        className={`group flex w-full min-w-[200px] items-center justify-between gap-3 rounded-[10px] border px-4 py-3 text-left transition-[border-color,background-color,color] duration-150 lg:min-w-0 lg:rounded-none lg:border-0 lg:border-b lg:border-hairline lg:px-1 lg:py-4 ${
                          isActive
                            ? "border-accent/40 bg-fade-light lg:border-accent/60 lg:bg-transparent"
                            : "border-hairline hover:border-accent/30 hover:bg-muted lg:bg-transparent lg:hover:border-accent/30 lg:hover:bg-transparent"
                        }`}
                      >
                        <span className="flex items-baseline gap-2">
                          <span
                            className={`font-mono text-[11px] ${
                              isActive ? "text-accent" : "text-ink-secondary"
                            }`}
                          >
                            {service.code}
                          </span>
                          <span
                            className={`text-sm font-medium ${
                              isActive
                                ? "text-ink"
                                : "text-ink-secondary group-hover:text-ink"
                            }`}
                          >
                            {service.label}
                          </span>
                        </span>
                        <span
                          className={`whitespace-nowrap font-mono text-[11px] ${
                            isActive ? "text-accent" : "text-ink-secondary"
                          }`}
                        >
                          {dict.fromLabel} {service.tiers[0].price}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <div>
              <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-hairline pb-4">
                <h3 className="text-xl font-medium tracking-tight text-ink md:text-2xl">
                  {active.label}
                </h3>
                <p className="whitespace-nowrap font-mono text-[11px] text-ink-secondary">
                  {dict.fromLabel} {active.tiers[0].price}
                </p>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }
                  }
                  transition={{
                    duration: reduceMotion ? 0.15 : 0.35,
                    ease: EASE,
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {dict.tiers.map((tier, i) => {
                      const price = active.tiers[i].price;
                      const note = (active.tiers[i] as { note?: string }).note;
                      const isTop = i === topIndex;
                      return (
                        <article
                          key={tier.name}
                          className={`flex flex-col rounded-xl border p-6 ${
                            isTop
                              ? "border-accent/50 bg-fade-light"
                              : "border-hairline bg-muted"
                          }`}
                        >
                          <p className="font-mono text-[11px] font-medium text-accent">
                            {tier.name}
                          </p>
                          <p className="mt-4 border-t border-hairline pt-4 text-[28px] font-medium tracking-tight text-ink tabular-nums md:text-[30px]">
                            {price}
                          </p>
                          {note ? (
                            <p className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/30 bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-accent">
                              <Check
                                className="h-3 w-3"
                                strokeWidth={2}
                                aria-hidden
                              />
                              {note}
                            </p>
                          ) : null}
                          <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                            {tier.tagline}
                          </p>
                          <div className="mt-auto pt-6">
                            <div className="flex items-center gap-2.5 border-t border-hairline pt-4">
                              <ShieldCheck
                                className="h-4 w-4 shrink-0 text-accent"
                                strokeWidth={1.5}
                                aria-hidden
                              />
                              <div>
                                <p className="text-sm font-medium text-ink">
                                  {tier.warranty}
                                </p>
                                <p className="mt-0.5 font-mono text-[10px] text-ink-secondary">
                                  {dict.warrantyLabel}
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              <p className="mt-6 flex items-center gap-2 font-mono text-[11px] text-ink-secondary">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} aria-hidden />
                {dict.warrantyNote}
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-[10px] bg-electric px-6 py-3.5 text-sm font-medium text-white transition-[filter] duration-150 hover:brightness-110"
              >
                {dict.cta}
                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </a>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-secondary">
                {dict.unsure}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}