import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-shell max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">Terms of Use</h1>
        <div className="mt-10 space-y-6 text-base leading-8 text-muted">
          <p>By accessing the Building the Bond™ website, you agree to use it lawfully and respectfully. Content on this site is provided for informational and community purposes.</p>
          <h2 className="font-serif text-2xl text-navy pt-4">Intellectual property</h2>
          <p>Building the Bond™, the BBT name, logos, and site content are property of ShoulderUP unless otherwise noted. You may not reproduce or distribute materials without permission.</p>
          <h2 className="font-serif text-2xl text-navy pt-4">Sample content</h2>
          <p>Some events, resources, and program details on this site may be labeled as sample or illustrative content during development. Verify all details before relying on them.</p>
          <h2 className="font-serif text-2xl text-navy pt-4">Contact</h2>
          <p>Questions about these terms can be directed to <a className="text-navy font-semibold hover:text-gold" href="mailto:hello@buildingthebond.com">hello@buildingthebond.com</a>.</p>
          <p className="text-sm text-muted/80 pt-4">This is a baseline terms placeholder. Review with legal counsel before production launch.</p>
        </div>
      </div>
    </section>
  );
}
