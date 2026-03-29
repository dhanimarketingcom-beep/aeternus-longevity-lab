import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { ProgramsPreview } from "@/components/home/programs-preview";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <div className="pointer-events-none relative z-10 -mt-20 h-20 bg-gradient-to-b from-secondary/80 to-transparent" />
      <FeaturesSection />
      <ProgramsPreview />
      <div className="pointer-events-none relative z-10 -mt-16 h-16 bg-gradient-to-b from-background to-transparent" />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
