import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function PartnerTeaser() {
  return (
    <section className="section-pad bg-navy text-white">
      <div className="container-shell grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Partner with purpose"
            title="Align your brand with a movement that means something."
            intro="Building the Bond offers partners and sponsors a credible way to support leadership, wealth, voice, and community—through programs, events, and initiatives designed for real impact."
            tone="light"
          />
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <p className="font-serif text-2xl text-white">Partnership opportunities</p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {["Event & program sponsorship", "Scholarship & veteran initiatives", "Community impact collaborations", "Strategic brand partnerships"].map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{item}</li>
              ))}
            </ul>
            <Button href="/partner" variant="inverse" className="mt-8 w-full">Explore Partnership Opportunities</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
