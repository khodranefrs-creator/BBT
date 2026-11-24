import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { events } from "@/content/events";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedEvent() {
  const event = events.find((e) => e.featured) ?? events[0];
  return (
    <section className="section-pad bg-surface">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Featured gathering"
          title="Where conversation becomes commitment."
          intro="Our events are designed to be intimate, intentional, and actionable—so you leave with more than inspiration."
          className="mb-14"
        />
        <div className="grid overflow-hidden rounded-[2rem] border border-[var(--border)] bg-background lg:grid-cols-2">
          <div className="relative min-h-[20rem] lg:min-h-full">
            <Image src={event.image} alt={event.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            {event.sample && (
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-navy backdrop-blur-sm">
                Sample event
              </span>
            )}
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{event.category}</p>
            <h3 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-4xl">{event.title}</h3>
            <p className="mt-5 text-base leading-8 text-muted">{event.description}</p>
            <dl className="mt-8 space-y-3 text-sm text-navy">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-gold" aria-hidden />
                <dt className="sr-only">Date</dt><dd>{event.date}</dd>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" aria-hidden />
                <dt className="sr-only">Location</dt><dd>{event.location}</dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={`/events/${event.slug}`}>View Event Details</Button>
              <Button href="/events" variant="secondary">All Events</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
