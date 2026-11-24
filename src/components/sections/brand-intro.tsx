import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

export function BrandIntro() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-shell grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="Mentorship conversation between professionals"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-navy text-white p-6 rounded-2xl shadow-[var(--shadow-soft)] max-w-[16rem] sm:-right-6">
              <p className="font-serif text-2xl leading-tight text-gold">One Bond.</p>
              <p className="font-serif text-2xl leading-tight text-white">Many Voices.</p>
              <p className="font-serif text-2xl leading-tight text-white/80">One Movement.</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading
            eyebrow="Why we exist"
            title="Connection is not a nice-to-have. It’s the catalyst."
            intro="Building the Bond brings together people who lead with purpose—women, veterans, entrepreneurs, and community builders—to share resources, open doors, and turn meaningful conversation into collective impact."
          />
          <div className="mt-10 space-y-6 text-base leading-8 text-muted">
            <p>
              We believe leadership grows stronger in community. When the right people gather with intention,
              ideas gain traction, opportunities become accessible, and individual ambition becomes shared momentum.
            </p>
            <p className="border-l-2 border-gold pl-5 text-navy font-medium">
              This is more than a network. It’s a movement built on trust, action, and the belief that legacy is created together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
