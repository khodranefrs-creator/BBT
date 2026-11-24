import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { PartnerForm } from "@/components/forms/join-partner-forms";
import { Handshake, Heart, Award, Megaphone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner & Sponsor",
  description: "Partner with Building the Bond to support leadership, wealth, voice, and community impact through meaningful sponsorship and collaboration.",
};

const opportunities = [
  { icon: Handshake, title: "Program Sponsorship", desc: "Support podcast seasons, retreats, or membership experiences that create lasting value for leaders." },
  { icon: Megaphone, title: "Event Partnerships", desc: "Align your brand with intimate, high-trust gatherings where meaningful conversations happen." },
  { icon: Heart, title: "Community Initiatives", desc: "Contribute to scholarships, veteran support, and community programs that extend impact beyond the room." },
  { icon: Award, title: "Strategic Collaboration", desc: "Co-create initiatives that reflect shared values and deliver measurable community benefit." },
];

const tiers = [
  {
    name: "Community Partner",
    focus: "For organizations beginning their alignment with the movement.",
    items: ["Brand recognition at select events", "Newsletter and digital acknowledgment", "Community impact updates", "One partnership touchpoint per quarter"],
    highlight: false,
  },
  {
    name: "Impact Sponsor",
    focus: "For partners ready to actively support programs and initiatives.",
    items: ["Prominent event and program recognition", "Opportunity to host or co-host a Bond conversation", "Featured partner spotlight in resources", "Quarterly impact and engagement review"],
    highlight: true,
  },
  {
    name: "Legacy Partner",
    focus: "For organizations committed to deep, sustained community impact.",
    items: ["Strategic alignment across programs and events", "Custom collaboration opportunities", "Executive-level partnership engagement", "Tailored impact reporting and recognition"],
    highlight: false,
  },
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner & Sponsor"
        title="Align your brand with a movement that means something."
        intro="Building the Bond offers partners and sponsors a credible way to support leadership, wealth, voice, and community—through programs, events, and initiatives designed for real impact."
        image={{ src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80", alt: "Professional partners shaking hands in a modern office" }}
        primaryCta={{ href: "#inquiry", label: "Start a Partnership Conversation" }}
      />

      <section className="section-pad bg-surface">
        <div className="container-shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Why partner" title="Purpose, credibility, and meaningful reach." intro="Partnering with Building the Bond means investing in people, not just impressions. Our community values substance, trust, and follow-through." />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-base leading-8 text-muted">
            <p>Building the Bond brings together women, veterans, entrepreneurs, and community builders in environments designed for honest conversation and real action. Partners gain alignment with a movement grounded in leadership, integrity, and community impact.</p>
            <p className="border-l-2 border-gold pl-5 text-navy font-medium">We believe the best partnerships are built the same way strong communities are: with intention, transparency, and shared commitment.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeading eyebrow="Partnership opportunities" title="Ways to support the movement." align="center" className="mb-14" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {opportunities.map((o) => (
              <div key={o.title} className="rounded-[1.5rem] bg-surface border border-[var(--border)] p-7">
                <o.icon className="h-6 w-6 text-gold" aria-hidden />
                <h3 className="mt-5 font-serif text-xl text-navy">{o.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-shell">
          <SectionHeading eyebrow="Partnership packages" title="A starting point for collaboration." intro="These packages are illustrative proposals designed to start a conversation. All scope, benefits, and commitments are finalized collaboratively." align="center" className="mb-14" />
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.name} className={`rounded-[1.5rem] p-8 border ${t.highlight ? "bg-navy text-white border-navy shadow-[var(--shadow-soft)]" : "bg-background border-[var(--border)]"}`}>
                {t.highlight && <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold mb-4">Most aligned</p>}
                <h3 className={`font-serif text-2xl ${t.highlight ? "text-white" : "text-navy"}`}>{t.name}</h3>
                <p className={`mt-3 text-sm leading-7 ${t.highlight ? "text-white/70" : "text-muted"}`}>{t.focus}</p>
                <ul className="mt-6 space-y-3">
                  {t.items.map((item) => (
                    <li key={item} className={`flex gap-3 text-sm leading-6 ${t.highlight ? "text-white/85" : "text-navy"}`}>
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${t.highlight ? "text-gold" : "text-gold"}`} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted">Package names and benefits shown are editable proposals. No pricing, contractual commitments, or funded initiatives are represented without verification.</p>
        </div>
      </section>

      <section className="section-pad bg-navy text-white">
        <div className="container-shell max-w-3xl text-center">
          <p className="eyebrow text-gold-soft">A shared commitment</p>
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl text-white leading-tight">Support work that builds leadership, wealth, and community.</h2>
          <p className="mt-6 text-base leading-8 text-white/72">
            Align your brand with a movement focused on leadership, wealth, and impact. Choose from opportunities that support scholarships, veteran initiatives, and community programs—as these initiatives are developed and confirmed.
          </p>
        </div>
      </section>

      <section id="inquiry" className="section-pad bg-background scroll-mt-24">
        <div className="container-shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Partnership inquiry" title="Let’s build something meaningful together." intro="Share your goals and we’ll explore how a partnership with Building the Bond can create value for your organization and the communities we serve." />
            <div className="mt-10 rounded-2xl bg-surface border border-[var(--border)] p-6 text-sm leading-7 text-muted">
              <p className="font-semibold text-navy mb-2">What to expect</p>
              <p>We review every inquiry with care. A member of the Building the Bond team will follow up to understand your goals and discuss alignment opportunities.</p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 rounded-[1.5rem] bg-surface border border-[var(--border)] p-8 sm:p-10">
            <PartnerForm />
          </div>
        </div>
      </section>
    </>
  );
}
