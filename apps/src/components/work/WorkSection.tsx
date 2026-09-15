import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { workData } from "@/lib/worksData";
import { t, type Locale } from "@/lib/lang";

export default function WorkSection({ locale }: { locale: Locale }) {
  const dict = t(locale).work;
  const featuredWork = workData.projects.filter((project) => project.featured);

  return (
    <section
      id="work"
      className="scroll-mt-16 relative z-10 grid-lines-light bg-muted py-24 md:py-32"
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
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {featuredWork.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.12}
              className={
                index === 0
                  ? "lg:col-span-7"
                  : "lg:col-span-5"
              }
            >
              <article className="group flex h-full min-h-80 flex-col justify-between rounded-xl border border-hairline bg-white p-8 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(11,30,91,0.18)]">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <p className="font-mono text-xs text-ink-secondary">
                      {project.number} / {project.type}
                    </p>

                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-secondary">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium tracking-tight text-ink">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-secondary">
                    {project.description}
                  </p>
                </div>

                <div className="mt-10">
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-muted px-2.5 py-1 font-mono text-[10px] text-ink-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-hairline pt-5">
                    <span className="text-xs text-ink-secondary">
                      {project.outcome}
                    </span>

                    <ArrowRight
                      className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 border-t border-hairline pt-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-xs font-medium text-accent transition-colors duration-150 hover:text-electric"
            >
              {dict.cta}
              <ArrowRight
                className="h-3.5 w-3.5"
                strokeWidth={1.5}
                aria-hidden
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}