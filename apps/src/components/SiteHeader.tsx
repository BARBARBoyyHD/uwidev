"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu } from "lucide-react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { locales, t, type Locale } from "@/lib/lang";

/**
 * Scroll-aware navbar:
 * - At top: tall, minimal translucent fill (the dark hero sits behind it).
 * - Scrolled ~50px: shrinks to h-12 with a stronger blur and hairline border.
 * - Scrolling down hides it; scrolling up brings it back.
 * - Reduced motion: pinned (shrink/blur only). Open mobile menu: stays put.
 *
 * `locale` comes from the [lang] layout; nav labels and the EN | ID toggle
 * (pathname-swapped next/link, no state/cookies) read from the dictionary.
 */
export default function SiteHeader({ locale }: { locale: Locale }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const reduceMotionRef = useRef(false);
  const menuOpenRef = useRef(false);
  const lastYRef = useRef(0);

  const pathname = usePathname();
  const dict = t(locale);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastYRef.current;
    lastYRef.current = latest;

    setScrolled(latest > 48);

    // Reduced motion: never slide the header away — only shrink/blur.
    // Open menu: never hide the header while it is being used.
    if (reduceMotionRef.current || menuOpenRef.current) return;

    if (latest > previous && latest > 180) {
      setHidden(true);
    } else if (latest < previous) {
      setHidden(false);
    }
  });

  const localeHref = (code: Locale) =>
    pathname.replace(/^\/(en|id)/, `/${code}`);

  const localeToggle = (
    <div
      className="flex items-center gap-0.5 font-mono text-xs"
      aria-label={dict.common.changeLanguage}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={localeHref(code)}
            aria-current={active ? "page" : undefined}
            className={`rounded px-2 py-1 font-medium transition-colors duration-150 ${
              active
                ? "text-white"
                : "text-ink-on-dark-muted hover:text-white"
            }`}
          >
            {code.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );

  return (
    <header
      inert={hidden}
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[height,background-color,border-color,transform,opacity] duration-200 ease-out",
        scrolled
          ? "h-12 border-b border-white/10 bg-void/95 backdrop-blur-md"
          : "h-16 border-b border-transparent bg-void/40 backdrop-blur-sm",
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100",
      ].join(" ")}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-mono text-[13px] font-semibold tracking-tight text-ink-on-dark transition-colors duration-150 hover:text-white"
        >
          <Terminal className="h-4 w-4 text-accent" strokeWidth={1.5} aria-hidden />
          <span>Uwi_Dev</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label={dict.nav.primary}>
          {dict.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-on-dark-muted transition-colors duration-150 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {localeToggle}

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-[10px] bg-accent px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-electric md:inline-flex"
          >
            {dict.nav.contactUs}
          </a>

          {/* Mobile menu — native details/summary; closes on link click;
              keeps the header visible while open */}
          <details
            className="group relative md:hidden"
            onToggle={(event) => {
              menuOpenRef.current = event.currentTarget.open;
            }}
          >
            <summary className="flex h-10 w-10 list-none cursor-pointer items-center justify-center rounded-lg border border-white/10 text-ink-on-dark-muted transition-colors duration-150 hover:text-white [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              <span className="sr-only">{dict.nav.menu}</span>
            </summary>
            <nav
              className="absolute right-0 top-12 z-50 w-56 rounded-xl border border-white/10 bg-void p-2 shadow-2xl"
              aria-label={dict.nav.mobile}
              onClick={(event) => {
                if ((event.target as HTMLElement).closest("a")) {
                  event.currentTarget.closest("details")?.removeAttribute("open");
                }
              }}
            >
              <div className="border-b border-white/10 px-3 py-2">
                {localeToggle}
              </div>
              {dict.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-ink-on-dark-muted transition-colors duration-150 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 block rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-medium text-white transition-colors duration-150 hover:bg-electric"
              >
                {dict.nav.contactUs}
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}