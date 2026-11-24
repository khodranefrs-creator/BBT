import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { ClosingCta } from "@/components/sections/closing-cta";
import { EventsExplorer } from "@/components/sections/events-explorer";
import { events } from "@/content/events";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Events",
  description: "Discover Building the Bond events—intimate gatherings, roundtables, and forums designed to turn conversation into action.",
};

export default function EventsPage() {
  const featured = events.find((e) => e.featured) ?? events[0];
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Rooms where real connections happen."
        intro="Our gatherings are intimate by design, intentional in structure, and focused on what happens after the conversation ends."
        image={{ src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80", alt: "Attendees connecting at a professional networking event" }}
      />

      <section className="section-pad bg-surface">
        <div className="container-shell">
          <div className="grid overflow-hidden rounded-[2rem] border border-[var(--border)] bg-background lg:grid-cols-2 mb-20">
            <div className="relative min-h-[18rem]">
              <Image src={featured.image} alt={featured.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              {featured.sample && <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-navy">Sample event</span>}
            </div>
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <p className="eyebrow">Featured event</p>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-navy leading-tight">{featured.title}</h2>
              <p className="mt-4 text-base leading-8 text-muted">{featured.description}</p>
              <p className="mt-5 text-sm text-navy"><span className="font-semibold">When:</span> {featured.date}</p>
              <p className="mt-1 text-sm text-navy"><span className="font-semibold">Where:</span> {featured.location}</p>
              <div className="mt-8"><Button href={`/events/${featured.slug}`}>View Event Details</Button></div>
            </div>
          </div>

          <EventsExplorer />
        </div>
      </section>

      <section className="section-pad bg-navy text-white">
        <div className="container-shell grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Host a conversation" title="Bring the Bond to your community." intro="You don’t need a big stage to create meaningful impact. With the Host Toolkit and our support, you can convene a Bond conversation that sparks real connection and action." tone="light" />
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Button href="/programs#host-toolkit" variant="inverse">Explore the Host Toolkit</Button>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
