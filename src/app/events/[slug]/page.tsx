import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, MapPin, Users, CheckCircle2 } from "lucide-react";
import { events } from "@/content/events";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return { title: "Event" };
  return { title: event.title, description: event.description };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <Image src={event.image} alt={event.alt} fill priority className="object-cover opacity-30" sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,27,42,0.94)_0%,rgba(13,27,42,0.72)_55%,rgba(13,27,42,0.5)_100%)]" />
        </div>
        <div className="container-shell relative py-24 sm:py-32">
          <p className="eyebrow text-gold-soft">{event.category}{event.sample && <span className="ml-2 text-white/50">ï¿½ Sample event</span>}</p>
          <h1 className="mt-5 max-w-4xl font-serif text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[0.95] tracking-[-0.03em] text-white">{event.title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/78">{event.description}</p>
          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/85">
            <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-gold" aria-hidden /><dd>{event.date}</dd></div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" aria-hidden /><dd>{event.location}</dd></div>
          </dl>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="font-serif text-3xl text-navy">About this gathering</h2>
              <p className="mt-4 text-base leading-8 text-muted">{event.description} This session reflects Building the Bondï¿½s commitment to creating intentional rooms where leaders can share openly, learn from one another, and leave with clear next steps.</p>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-navy">Agenda</h2>
              <ul className="mt-5 space-y-3">
                {event.agenda.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-muted">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-navy">Who itï¿½s for</h2>
              <p className="mt-4 flex gap-3 text-base leading-8 text-muted"><Users className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden />{event.audience}</p>
            </div>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="sticky top-28 rounded-[1.5rem] border border-[var(--border)] bg-background p-8 shadow-[var(--shadow-soft)]">
              <p className="font-serif text-2xl text-navy">Reserve your place</p>
              <p className="mt-3 text-sm leading-7 text-muted">Register your interest and weï¿½ll share confirmed details, timing, and participation information.</p>
              {event.sample && <p className="mt-4 rounded-lg bg-[#F6F2EA] px-4 py-3 text-xs leading-6 text-muted">This is sample event content for demonstration. Replace with verified event details before publishing.</p>}
              <Button href="/contact#join" className="mt-6 w-full">Register Interest</Button>
              <Button href="/events" variant="secondary" className="mt-3 w-full">Back to Events</Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
