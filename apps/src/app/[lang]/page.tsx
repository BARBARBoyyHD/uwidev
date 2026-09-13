import { notFound } from "next/navigation";
import { isLocale } from "@/lib/lang";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WorkSection from "@/components/WorkSection";
import PricingSection from "@/components/PricingSection";
import IndustriesSection from "@/components/IndustriesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <main id="main" className="flex-1">
      <HeroSection locale={lang} />
      <ProblemSection locale={lang} />
      <ServicesSection locale={lang} />
      <ProcessSection locale={lang} />
      <WorkSection locale={lang} />
      <PricingSection locale={lang} />
      <IndustriesSection locale={lang} />
      <AboutSection locale={lang} />
      <TestimonialsSection locale={lang} />
      <ContactSection locale={lang} />
    </main>
  );
}