"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { events, eventCategories } from "@/content/events";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

export function EventsExplorer() {
  const [category, setCategory] = useState<(typeof eventCategories)[number]>("All");
  const filtered = useMemo(() => (category === "All" ? events : events.filter((e) => e.category === category)), [category]);

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10">
        <SectionHeading eyebrow="Upcoming gatherings" title="Find your room." intro="Explore events by focus area. Every listing below is clearly marked as sample content until verified event data is available." />
      </div>
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Event categories">
        {eventCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={category === c}
            onClick={() => setCategory(c)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition border",
              category === c ? "bg-navy text-white border-navy" : "bg-transparent text-navy border-[var(--border-strong)] hover:border-navy",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((e) => (
          <Link key={e.slug} href={`/events/${e.slug}`} className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-background transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={e.image} alt={e.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(max-width:768px) 100vw, 33vw" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-navy">{e.category}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-serif text-2xl leading-tight text-navy">{e.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted flex-1">{e.description}</p>
              <dl className="mt-5 space-y-2 text-xs text-navy/80">
                <div className="flex gap-2 items-center"><Calendar className="h-3.5 w-3.5 text-gold" aria-hidden /><dd>{e.date}</dd></div>
                <div className="flex gap-2 items-center"><MapPin className="h-3.5 w-3.5 text-gold" aria-hidden /><dd>{e.location}</dd></div>
              </dl>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-gold">View details <ArrowUpRight className="h-4 w-4" aria-hidden /></span>
            </div>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && <p className="text-muted text-sm">No events in this category yet. Check back soon.</p>}
    </div>
  );
}
