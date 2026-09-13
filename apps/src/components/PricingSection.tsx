import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { t, type Locale } from "@/lib/lang";

export default function PricingSection({ locale }: { locale: Locale }) {
  const dict = t(locale).pricing;

  return (
    <section id="pricing" className="scroll-mt-16 relative z-10 grid-lines-light bg-white py-24 md:py-32">
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
          </div>
        </Reveal>

        {/* Asymmetric cards: featured 7-col + secondary 5-col */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article className="flex h-full flex-col rounded-xl border border-accent bg-white p-8 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(11,30,91,0.18)]">
              <p className="font-mono text-[11px] font-medium text-accent">
                {dict.featured.eyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-ink">
                {dict.featured.title}
              </h3>

              <ul className="mt-8 space-y-3 border-t border-hairline pt-8">
                {dict.featured.factors.map((factor) => (
                  <li key={factor.label} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <div>
                      <span className="font-mono text-xs font-medium text-ink">
                        {factor.label}
                      </span>
                      <p className="mt-0.5 max-w-md text-sm leading-relaxed text-ink-secondary">
                        {factor.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 self-start rounded-[10px] bg-electric px-6 py-3.5 text-sm font-medium text-white transition-[filter] duration-150 hover:brightness-110"
              >
                {dict.featured.cta}
                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </a>
            </article>
          </Reveal>

          <Reveal delay={0.14} className="lg:col-span-5">
            <article className="flex h-full flex-col rounded-xl border border-hairline bg-muted p-8 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(11,30,91,0.18)]">
              <p className="font-mono text-[11px] font-medium text-accent">
                {dict.secondary.eyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-ink">
                {dict.secondary.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                {dict.secondary.description}
              </p>

              <ul className="mt-8 space-y-3 border-t border-hairline pt-8">
                {dict.secondary.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 pt-8 font-mono text-xs font-medium text-accent transition-colors duration-150 hover:text-electric"
              >
                {dict.secondary.cta}
                <ArrowRight
                  className="h-3.5 w-3.5"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}