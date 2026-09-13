import Reveal from "@/components/Reveal";
import { t, type Locale } from "@/lib/lang";

export default function ProblemSection({ locale }: { locale: Locale }) {
  const dict = t(locale).problem;

  return (
    <section className="relative z-10 grid-lines-light bg-white py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 font-mono text-[11px] font-medium text-accent">
              {dict.eyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl lg:text-[44px] lg:leading-[1.1]">
              {dict.title}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg">
              {dict.body}
            </p>
          </div>
        </Reveal>

        {/* Editorial rows — no card boxes, big type + supporting line */}
        <div>
          {dict.transformations.map((transformation, index) => (
            <Reveal key={transformation.number} delay={Math.min(index * 0.14, 0.56)}>
              <div className="grid grid-cols-1 gap-4 border-t border-hairline py-10 md:grid-cols-12 md:gap-8 md:py-12">
                <div className="md:col-span-7">
                  <span className="mr-4 font-mono text-xs text-ink-secondary">
                    {transformation.number}
                  </span>
                  <h3 className="inline text-2xl font-medium tracking-tight text-ink md:text-4xl">
                    {transformation.title}
                  </h3>
                </div>
                <p className="max-w-md text-base leading-relaxed text-ink-secondary md:col-span-5 md:pt-2">
                  {transformation.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}