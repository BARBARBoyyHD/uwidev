import { ArrowUpRight, Terminal } from "lucide-react";
import { t, type Locale } from "@/lib/lang";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const dict = t(locale);

  return (
    <footer className="relative z-10 border-t border-white/10 bg-void text-ink-on-dark-muted">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-12 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center">
          <a
            href="#top"
            className="flex items-center gap-2.5 font-mono text-[13px] font-semibold tracking-tight text-ink-on-dark transition-colors duration-150 hover:text-white"
          >
            <Terminal className="h-4 w-4 text-accent" strokeWidth={1.5} aria-hidden />
            {dict.footer.studio}
          </a>
          <nav className="flex flex-wrap items-center gap-6" aria-label={dict.nav.footer}>
            {dict.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] font-medium transition-colors duration-150 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 font-mono text-[11px] sm:flex-row sm:items-center">
          <span>© 2026 Uwi_Dev. {dict.footer.copyright}</span>
          <a
            href="mailto:muhammadnahrulhayat98@gmail.com"
            className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-white"
          >
            muhammadnahrulhayat98@gmail.com
            <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}