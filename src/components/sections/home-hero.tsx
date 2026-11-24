import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#F6F2EA]">
      <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
          alt="Diverse professionals connecting in a warm collaborative space"
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F2EA] via-[#F6F2EA]/20 to-transparent" />
        <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
      </div>

      <div className="container-shell relative grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7 xl:col-span-6">
          <p className="eyebrow">Building the Bond™ &middot; By ShoulderUP</p>
          <h1 className="display-title mt-6 max-w-[12ch] text-navy">
            Build bonds that move families, businesses, and communities <span className="text-gold">forward.</span>
          </h1>
          <p className="lede mt-8 max-w-xl">
            A leadership platform for women, veterans, entrepreneurs, and community builders. We turn
            conversations into action—and action into legacy.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact#join">Join the Movement</Button>
            <Button href="/programs" variant="secondary">Explore Programs</Button>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[var(--border)] pt-8 max-w-xl">
            {[
              { label: "The philosophy", value: "R.O.C." },
              { label: "The promise", value: "Action" },
              { label: "The outcome", value: "Legacy" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-serif text-2xl text-navy sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5 xl:col-span-6 lg:hidden">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
              alt="Diverse professionals connecting in a warm collaborative space"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="absolute bottom-8 right-0 hidden xl:block">
          <div className="relative mr-8 w-64 overflow-hidden rounded-2xl border-8 border-[#F6F2EA] shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
                alt="Woman leader speaking confidently"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
