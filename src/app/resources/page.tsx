import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ResourcesExplorer } from "@/components/sections/resources-explorer";
import { ClosingCta } from "@/components/sections/closing-cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description: "Insights, guides, and perspectives on leadership, wealth, community, and voice from Building the Bond.",
};

const downloads = [
  { icon: BookOpen, title: "Host Conversation Guide", desc: "A practical starting framework for convening your own Bond conversation.", note: "Sample resource — available upon request" },
  { icon: FileText, title: "Connection Action Planner", desc: "A simple worksheet for turning conversations into measurable next steps.", note: "Sample resource — available upon request" },
  { icon: Quote, title: "Quote Vault", desc: "A curated collection of principles and prompts to ground leadership in purpose.", note: "Sample resource — available upon request" },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Insight you can act on."
        intro="Editorial perspectives, practical frameworks, and thoughtful prompts on leadership, wealth, community, and voice—built for people who move."
        image={{ src: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1600&q=80", alt: "Open notebook and coffee on a desk in a warm workspace" }}
      />
      <section className="section-pad bg-surface">
        <div className="container-shell">
          <ResourcesExplorer />
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeading eyebrow="Downloads & tools" title="Practical resources for intentional leaders." intro="Tools designed to help you host, plan, and act. These sample resources illustrate the kind of value Building the Bond provides." className="mb-12" />
          <div className="grid gap-6 md:grid-cols-3">
            {downloads.map((d) => (
              <div key={d.title} className="rounded-[1.5rem] border border-[var(--border)] bg-surface p-7">
                <d.icon className="h-6 w-6 text-gold" aria-hidden />
                <h3 className="mt-4 font-serif text-2xl text-navy">{d.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{d.desc}</p>
                <p className="mt-5 text-xs font-medium text-teal">{d.note}</p>
                <Button href="/contact" variant="secondary" className="mt-6 w-full">Request Access</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
