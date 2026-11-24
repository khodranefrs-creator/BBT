import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-shell max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">Privacy Policy</h1>
        <div className="mt-10 space-y-6 text-base leading-8 text-muted">
          <p>Building the Bond™ by ShoulderUP respects your privacy. This page outlines how we handle information submitted through our website forms.</p>
          <h2 className="font-serif text-2xl text-navy pt-4">Information we collect</h2>
          <p>When you submit a form, we collect the information you provide, such as your name, email address, organization, and message. We use this information only to respond to your inquiry, process your request, or send updates you’ve opted into.</p>
          <h2 className="font-serif text-2xl text-navy pt-4">How we use information</h2>
          <p>We do not sell your personal information. Information submitted through this site is used for communication related to Building the Bond programs, events, partnerships, and community updates.</p>
          <h2 className="font-serif text-2xl text-navy pt-4">Third-party services</h2>
          <p>If external services are configured (such as email delivery or CRM integrations), submissions may be processed through those services in accordance with their privacy policies.</p>
          <h2 className="font-serif text-2xl text-navy pt-4">Contact</h2>
          <p>For privacy-related questions, contact us at <a className="text-navy font-semibold hover:text-gold" href="mailto:hello@buildingthebond.com">hello@buildingthebond.com</a>.</p>
          <p className="text-sm text-muted/80 pt-4">This is a baseline policy placeholder. Review with legal counsel before production launch.</p>
        </div>
      </div>
    </section>
  );
}
