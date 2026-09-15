import { notFound } from "next/navigation";
import { isLocale } from "@/lib/lang";
import HeroSection from "@/components/hero/HeroSection";
import ProblemSection from "@/components/problem/ProblemSection";
import ServicesSection from "@/components/services/ServicesSection";
import ProcessSection from "@/components/process/ProcessSection";
import WorkSection from "@/components/work/WorkSection";
import PricingSection from "@/components/pricing/PricingSection";
import IndustriesSection from "@/components/industries/IndustriesSection";
import AboutSection from "@/components/about/AboutSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import ContactSection from "@/components/contact/ContactSection";

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