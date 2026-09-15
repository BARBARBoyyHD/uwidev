import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/contact-form";
import { WHATSAPP_URL } from "@/lib/contact";
import { t, type Locale } from "@/lib/lang";

const WHATSAPP_ICON_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

export default function ContactSection({ locale }: { locale: Locale }) {
  const dict = t(locale).contact;

  return (
    <section
      id="contact"
      className="hero-radial-mesh relative z-10 scroll-mt-16 overflow-hidden border-t border-white/10 bg-void text-white"
    >
      <div
        className="grid-lines-pattern pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div>
                <p className="mb-2 font-mono text-[11px] font-medium text-ink-on-dark-muted">
                  {dict.eyebrow}
                </p>
                <h2 className="mb-4 text-3xl font-medium leading-tight tracking-tight text-ink-on-dark md:text-4xl lg:text-[44px]">
                  {dict.title}
                </h2>
                <p className="mb-8 max-w-md text-base leading-relaxed text-ink-on-dark-muted">
                  {dict.sub}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <ul className="space-y-3 border-t border-white/10 pt-6 font-mono text-xs text-ink-on-dark-muted">
                {dict.expectations.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-col">
                <a
                  href="mailto:muhammadnahrulhayat98@gmail.com"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-xs font-medium text-ink-on-dark transition-colors duration-150 hover:text-white"
                >
                  muhammadnahrulhayat98@gmail.com
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 font-mono text-xs font-medium text-ink-on-dark transition-colors duration-150 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d={WHATSAPP_ICON_PATH} />
                  </svg>
                  {dict.whatsapp}
                </a>
              </div>
            </Reveal>
          </div>

          {/* <div className="lg:col-span-7">
            <Reveal delay={0.36}>
              <ContactForm locale={locale} />
            </Reveal>
          </div> */}
        </div>
      </div>
    </section>
  );
}