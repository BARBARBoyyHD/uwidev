import { Building2, Database, Globe, PanelsTopLeft, Smartphone, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { t, type Locale } from "@/lib/lang";

// Icons and grid spans are presentation, not content — paired by index with
// the localized service entries in the dictionary.
const serviceLayout: { icon: LucideIcon; span: string }[] = [
  { icon: PanelsTopLeft, span: "md:col-span-7" },
  { icon: Building2, span: "md:col-span-5" },
  { icon: Database, span: "md:col-span-5" },
  { icon: Globe, span: "md:col-span-7" },
  { icon: Smartphone, span: "md:col-span-7" },
  { icon: Workflow, span: "md:col-span-5" },
];

export default function ServicesSection({ locale }: { locale: Locale }) {
  const dict = t(locale).services;

  return (
    <section
      id="what-we-build"
      className="scroll-mt-16 relative z-10 grid-lines-light bg-muted py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mb-16 flex flex-col justify-between gap-6 border-b border-hairline pb-6 md:flex-row md:items-end">
            <div>
              <p className="mb-2 font-mono text-[11px] font-medium text-accent">
                {dict.eyebrow}
              </p>
              <h2 className="text-3xl font-medium tracking-tight text-ink md:text-4xl lg:text-[44px]">
                {dict.title}
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-ink-secondary">
              {dict.sub}
            </p>
          </div>
        </Reveal>

        {/* Asymmetric 12-col grid: 7/5 then 5/7 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {dict.items.map((service, index) => {
            const { icon: Icon, span } = serviceLayout[index];
            return (
              <Reveal key={service.number} className={span} delay={Math.min(index * 0.14, 0.56)}>
                <article className="group flex h-full flex-col justify-between rounded-xl border border-hairline bg-white p-8 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(11,30,91,0.18)]">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className="font-mono text-xs font-medium text-accent">
                        {service.number} / {service.code}
                      </span>
                      <Icon
                        className="h-5 w-5 text-ink-secondary transition-colors duration-150 group-hover:text-accent"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                    </div>
                    <h3 className="mb-3 text-[17px] font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mb-6 max-w-xl text-[15px] leading-relaxed text-ink-secondary">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 border-t border-hairline pt-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-ink-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}