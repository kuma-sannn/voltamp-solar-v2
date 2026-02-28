import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import ServicesPreview from "@/components/ServicesPreview";
import RoiCalculator from "@/components/RoiCalculator";
import SolarFlow from "@/components/SolarFlow";
import Consultation from "@/components/Consultation";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Hero />
      <TrustMetrics />
      <ServicesPreview />
      <RoiCalculator />
      <SolarFlow />
      <Consultation />
    </main>
  );
}
