import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { isLocale, locales, t } from "@/lib/lang";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://uwidev.com";

// Per Next.js i18n routing: this layout under the dynamic segment is the root
// layout (it owns <html> and <body>), and every page of the site lives under
// /[lang]. The bare "/" is redirected to a locale by proxy.ts before rendering.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = t(lang);
  const canonical = `/${lang}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en`,
        id: `${SITE_URL}/id`,
      },
      types: {
        "text/plain": "/llm.txt",
        "text/llms-txt": "/llms.txt",
      },
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}${canonical}`,
      siteName: "Uwi_Dev",
      title: dict.meta.title,
      description: dict.meta.description,
      locale: lang === "en" ? "en_US" : "id_ID",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = t(lang);

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${jetBrainsMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          {dict.common.skipToContent}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Uwi_Dev",
              url: "https://uwidev.com",
              description:
                "Software built around the way your business works. Custom business systems, web applications, mobile applications, and system integrations.",
              email: "muhammadnahrulhayat98@gmail.com",
              inLanguage: lang === "en" ? "English" : "Indonesian",
              knowsAbout: [
                "Business systems",
                "Web applications",
                "Mobile applications",
                "System integrations",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "muhammadnahrulhayat98@gmail.com",
                availableLanguage: ["English", "Indonesian"],
              },
            }),
          }}
        />
        <SiteHeader locale={lang} />
        {children}
        <SiteFooter locale={lang} />
        <FloatingWhatsApp locale={lang} />
      </body>
    </html>
  );
}