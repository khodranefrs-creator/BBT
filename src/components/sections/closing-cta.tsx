import { Button } from "@/components/ui/button";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-[#EDE5D4] py-24 sm:py-32">
      <div className="absolute inset-0 grain opacity-60" aria-hidden />
      <div className="container-shell relative text-center">
        <p className="eyebrow text-navy-soft">The invitation</p>
        <h2 className="mx-auto mt-6 max-w-4xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.035em] text-navy">
          Legacy is built <span className="text-gold">together.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          Whether you’re seeking community, ready to lead, or looking to partner with purpose—there’s a place for you in Building the Bond. Your next meaningful connection starts here.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/contact#join">Join the Movement</Button>
          <Button href="/partner" variant="secondary">Become a Partner</Button>
        </div>
      </div>
    </section>
  );
}
