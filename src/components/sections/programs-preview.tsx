import Image from "next/image";
import { Mic, CalendarDays, BookOpen, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowLink } from "@/components/ui/button";

const programs = [
  {
    id: "podcast",
    icon: Mic,
    title: "Podcast",
    description: "8–12 minute episodes turning breakthrough ideas into action. Real voices, practical insight, no fluff.",
    href: "/programs#podcast",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
    alt: "Podcast microphone in a studio setting",
  },
  {
    id: "retreats",
    icon: CalendarDays,
    title: "Retreats & Events",
    description: "Intimate rooms, real conversations, measurable next steps. Gatherings designed for depth, not just attendance.",
    href: "/events",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    alt: "Attendees at a professional retreat event",
  },
  {
    id: "toolkit",
    icon: BookOpen,
    title: "Host Toolkit",
    description: "A guided framework to run your own Bond conversations. Bring the movement into your community with confidence.",
    href: "/programs#host-toolkit",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
    alt: "Person writing in a notebook planning a session",
  },
  {
    id: "membership",
    icon: Users,
    title: "Membership",
    description: "Resources, private sessions, and a community that executes. Belong to a network where follow-through matters.",
    href: "/programs#membership",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    alt: "Group of diverse professionals connecting",
  },
];

export function ProgramsPreview() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            eyebrow="Programs"
            title="Built for momentum, not just inspiration."
            intro="Each Building the Bond offering is designed to move you from conversation to action—with the people, tools, and structure to make it last."
            className="lg:col-span-7"
          />
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <ArrowLink href="/programs">View all programs</ArrowLink>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="group relative overflow-hidden rounded-[1.5rem] lg:col-span-7 min-h-[28rem]">
            <Image src={programs[0].image} alt={programs[0].alt} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(max-width: 1024px) 100vw, 60vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
            <div className="absolute bottom-0 p-8 sm:p-10 text-white">
              <Mic className="h-6 w-6 text-gold" aria-hidden />
              <h3 className="mt-4 font-serif text-3xl sm:text-4xl">{programs[0].title}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/80">{programs[0].description}</p>
              <ArrowLink href={programs[0].href} className="mt-5 text-white hover:text-gold-soft">Learn more</ArrowLink>
            </div>
          </div>
          <div className="grid gap-6 lg:col-span-5">
            {programs.slice(1).map((p) => (
              <div key={p.id} className="group flex gap-5 rounded-[1.25rem] border border-[var(--border)] bg-background p-5 transition hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-soft)]">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
                  <Image src={p.image} alt={p.alt} fill className="object-cover transition duration-500 group-hover:scale-[1.05]" sizes="112px" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-navy">
                    <p.icon className="h-4 w-4 text-gold" aria-hidden />
                    <h3 className="font-serif text-xl">{p.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">{p.description}</p>
                  <ArrowLink href={p.href} className="mt-auto pt-3 text-xs">Learn more</ArrowLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
