import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { JoinForm } from "@/components/forms/join-partner-forms";
import { Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & Join",
  description: "Join the Building the Bond movement, subscribe to updates, or get in touch with our team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Join"
        title="Your next meaningful connection starts here."
        intro="Whether you want to join the movement, explore a partnership, or simply start a conversation—we’re here to listen."
        image={{ src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80", alt: "Two professionals in a warm, welcoming conversation" }}
        align="center"
      />

      <section id="join" className="section-pad bg-surface scroll-mt-24">
        <div className="container-shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Join the Movement" title="Become part of Building the Bond." intro="Join a community of women, veterans, entrepreneurs, and community builders committed to leadership, opportunity, and meaningful action." />
            <div className="mt-10 space-y-6">
              {[
                { title: "Connect with purpose", desc: "Meet leaders who value substance, integrity, and follow-through." },
                { title: "Access resources & opportunities", desc: "Grow through programs, events, and insights designed for action." },
                { title: "Build lasting legacy", desc: "Turn individual ambition into collective impact in your community." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <div>
                    <p className="font-semibold text-navy">{item.title}</p>
                    <p className="text-sm leading-7 text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 rounded-[1.5rem] bg-background border border-[var(--border)] p-8 sm:p-10 shadow-[var(--shadow-soft)]">
            <JoinForm />
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Get in touch" title="We’d love to hear from you." intro="Questions, ideas, media inquiries, or collaboration opportunities—send us a message and we’ll respond with care." />
            <div className="mt-10 rounded-2xl bg-surface border border-[var(--border)] p-6">
              <p className="flex items-center gap-3 text-sm text-navy"><Mail className="h-4 w-4 text-gold" aria-hidden /> {siteConfig.email}</p>
              <p className="mt-4 text-sm leading-7 text-muted">For partnership inquiries, you can also visit our <a href="/partner" className="text-navy font-semibold hover:text-gold transition">Partner & Sponsor</a> page for more detail.</p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 rounded-[1.5rem] bg-surface border border-[var(--border)] p-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
