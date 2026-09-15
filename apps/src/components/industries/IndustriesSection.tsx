import {
  Building2,
  Coffee,
  Rocket,
  Store,
  Truck,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { t, type Locale } from "@/lib/lang";

// Icons are presentation, not content — paired by index with the localized
// industry entries in the dictionary.
const industryIcons: LucideIcon[] = [
  Coffee,
  Store,
  Truck,
  Building2,
  Rocket,
];

export default function IndustriesSection({ locale }: { locale: Locale }) {
  const dict = t(locale).industries;

  return (
    <section className="relative z-10 grid-lines-light bg-white py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mb-12 max-w-3xl">
            <p className="mb-2 font-mono text-[11px] font-medium text-accent">
              {dict.eyebrow}
            </p>
            <h2 className="mb-3 text-3xl font-medium tracking-tight text-ink md:text-4xl lg:text-[44px]">
              {dict.title}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-ink-secondary">
              {dict.sub}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {dict.items.map((industry, index) => {
            const Icon = industryIcons[index];
            return (
              <Reveal
                key={industry.name}
                className={index === dict.items.length - 1 ? "col-span-2 md:col-span-1" : undefined}
                delay={Math.min(index * 0.14, 0.56)}
              >
                <div className="h-full rounded-lg border border-hairline bg-muted p-6 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(11,30,91,0.18)]">
                  <Icon
                    className="mb-3 h-6 w-6 text-accent"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mb-1 text-sm font-semibold text-ink">
                    {industry.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-ink-secondary">
                    {industry.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.64}>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-4 font-mono text-xs sm:flex-row sm:items-center">
            <span className="text-ink-secondary">
              {dict.note}
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-medium text-accent transition-colors duration-150 hover:text-electric"
            >
              {dict.cta}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}