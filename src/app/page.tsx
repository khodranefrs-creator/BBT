import { HomeHero } from "@/components/sections/home-hero";
import { BrandIntro } from "@/components/sections/brand-intro";
import { AudiencePillars } from "@/components/sections/audience-pillars";
import { ProgramsPreview } from "@/components/sections/programs-preview";
import { RocSection } from "@/components/sections/roc-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { FeaturedEvent } from "@/components/sections/featured-event";
import { ResourcesPreview } from "@/components/sections/resources-preview";
import { PartnerTeaser } from "@/components/sections/partner-teaser";
import { ClosingCta } from "@/components/sections/closing-cta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BrandIntro />
      <AudiencePillars />
      <ProgramsPreview />
      <RocSection />
      <ImpactSection />
      <FeaturedEvent />
      <ResourcesPreview />
      <PartnerTeaser />
      <ClosingCta />
    </>
  );
}
