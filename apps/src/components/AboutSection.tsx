import { Quote, Terminal } from "lucide-react";
import Reveal from "@/components/Reveal";
import { t, type Locale } from "@/lib/lang";

export default function AboutSection({ locale }: { locale: Locale }) {
  const dict = t(locale).about;

  return (
    <section id="about" className="scroll-mt-16 relative z-10 grid-lines-light bg-muted py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div>
                <p className="mb-2 font-mono text-[11px] font-medium text-accent">
                  {dict.eyebrow}
                </p>
                <h2 className="mb-6 text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl lg:text-[44px]">
                  {dict.title.line1}
                  <br />
                  {dict.title.line2}
                </h2>
                <div className="max-w-2xl space-y-4 text-base leading-relaxed text-ink-secondary">
                  {dict.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-hairline pt-8">
              {dict.facts.map((fact, index) => (
                <Reveal key={fact.label} delay={Math.min(index * 0.14, 0.56)}>
                  <div>
                    <div className="font-mono text-xl font-semibold text-ink">
                      {fact.value}
                    </div>
                    <div className="mt-1 font-mono text-[11px] text-ink-secondary">
                      {fact.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.08} className="lg:col-span-5">
            <figure className="h-full rounded-xl border border-hairline bg-white p-8">
              <Quote
                className="mb-4 h-8 w-8 text-hairline"
                strokeWidth={1.5}
                aria-hidden
              />
              <blockquote className="mb-6 text-base italic leading-relaxed text-ink">
                {dict.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-hairline pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded bg-void">
                  <Terminal
                    className="h-4 w-4 text-accent"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </span>
                <div>
                  <div className="font-mono text-xs font-semibold text-ink">
                    {dict.caption}
                  </div>
                  <div className="font-mono text-[10px] text-ink-secondary">
                    {dict.captionSub}
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}