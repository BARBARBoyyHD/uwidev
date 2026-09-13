import { Terminal } from "lucide-react";
import Reveal from "@/components/Reveal";
import { t, type Locale } from "@/lib/lang";

export default function ProcessSection({ locale }: { locale: Locale }) {
  const dict = t(locale).process;

  return (
    <section id="how-we-work" className="scroll-mt-16 relative z-10 grid-lines-light bg-white py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <p className="mb-2 font-mono text-[11px] font-medium text-accent">
              {dict.eyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl lg:text-[44px]">
              {dict.title}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-ink-secondary md:text-lg">
              {dict.sub}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {dict.steps.map((step, index) => (
            <Reveal key={step.number} delay={Math.min(index * 0.14, 0.56)}>
              <article className="h-full rounded-lg border border-hairline bg-white p-6 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(11,30,91,0.18)]">
                <div className="mb-4 font-mono text-xs font-medium text-accent">
                  {step.number} / {step.label}
                </div>
                <h3 className="mb-2 text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-secondary">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.64}>
          <div className="mt-8 flex items-start gap-2 border-t border-hairline pt-6 font-mono text-xs text-ink-secondary">
            <Terminal className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden />
            <span>{dict.note}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}