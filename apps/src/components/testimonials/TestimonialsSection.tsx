"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useHydrated, useReducedMotion } from "@/lib/hydrated";
import { t, type Locale } from "@/lib/lang";

const EASE = [0.22, 1, 0.36, 1] as const;
const INTERVAL_MS = 5000;

export default function TestimonialsSection({ locale }: { locale: Locale }) {
  const dict = t(locale).testimonials;
  const testimonials = dict.quotes;

  const isHydrated = useHydrated();
  const reduceMotion = useReducedMotion();
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const [clientPaused, setClientPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = testimonials.length;
  const canAutoAdvance = isHydrated && !reduceMotion;
  const autoPaused = paused || clientPaused;

  const goTo = (next: number, dir: number) => {
    setIndex([(next + count) % count, dir]);
  };
  const next = () => goTo(index + 1, 1);
  const prev = () => goTo(index - 1, -1);

  useEffect(() => {
    if (!canAutoAdvance || autoPaused) return;
    timerRef.current = setInterval(next, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [canAutoAdvance, autoPaused, index]);

  const navigate = (fn: () => void) => {
    if (timerRef.current) clearInterval(timerRef.current);
    fn();
  };

  return (
    <section
      id="testimonials"
      className="scroll-mt-16 relative z-10 grid-lines-light bg-white py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mx-auto mb-16 max-w-3xl border-b border-hairline pb-6 text-center">
            <p className="mb-2 font-mono text-[11px] font-medium text-accent">
              {dict.eyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-medium tracking-tight text-ink md:text-4xl lg:text-[44px]">
              {dict.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg">
              {dict.sub}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="mx-auto flex max-w-3xl flex-col items-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setClientPaused(true)}
            onBlurCapture={() => setClientPaused(false)}
          >
            <div className="relative h-40 w-full overflow-hidden" aria-live="polite">
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.figure
                  key={index}
                  custom={direction}
                  initial={
                    reduceMotion ? { opacity: 0 } : { opacity: 0, x: 80 * direction }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={
                    reduceMotion ? { opacity: 0 } : { opacity: 0, x: -80 * direction }
                  }
                  transition={
                    reduceMotion
                      ? { opacity: { duration: 0.15 } }
                      : { x: { duration: 0.5, ease: EASE }, opacity: { duration: 0.3 } }
                  }
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <blockquote className="mb-6 text-center text-lg leading-relaxed text-ink-secondary md:text-xl">
                    &ldquo;{testimonials[index].quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-center font-mono text-[11px] font-medium text-ink">
                    {testimonials[index].attribution}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <button
                type="button"
                onClick={() => navigate(prev)}
                aria-label={dict.prev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-hairline text-ink-secondary transition-colors duration-150 hover:border-accent/40 hover:text-ink"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label={dict.tablist}>
                {testimonials.map((_: unknown, dotIndex: number) => (
                  <button
                    key={dotIndex}
                    type="button"
                    onClick={() => navigate(() => goTo(dotIndex, dotIndex > index ? 1 : -1))}
                    aria-label={dict.goToSlide.replace("{n}", String(dotIndex + 1))}
                    aria-current={dotIndex === index}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      dotIndex === index
                        ? "w-6 bg-accent"
                        : "w-2 bg-hairline hover:bg-accent/40"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => navigate(next)}
                aria-label={dict.next}
                className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-hairline text-ink-secondary transition-colors duration-150 hover:border-accent/40 hover:text-ink"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
