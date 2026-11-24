import type { Metadata } from "next";
import Image from "next/image";
import { Mic, CalendarDays, BookOpen, Users, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ClosingCta } from "@/components/sections/closing-cta";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore Building the Bond programs: Podcast, Retreats & Events, Host Toolkit, and Membership—designed to turn conversation into action.",
};

const programs = [
  {
    id: "podcast",
    icon: Mic,
    title: "The Bond Podcast",
    tagline: "Breakthrough ideas, built for action.",
    description: "Short, focused episodes that respect your time and sharpen your thinking. Each 8–12 minute conversation turns breakthrough ideas into practical next steps you can carry into your work, leadership, and community.",
    value: ["8–12 minute episodes designed for busy leaders", "Real voices from women, veterans, entrepreneurs, and community builders", "Actionable insight—not just inspiration"],
    cta: { href: "/resources", label: "Explore Insights" },
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=80",
    alt: "Professional podcast microphone in a warm studio",
  },
  {
    id: "retreats",
    icon: CalendarDays,
    title: "Retreats & Events",
    tagline: "Intimate rooms. Real momentum.",
    description: "Gatherings designed for depth, not just attendance. Our retreats and events bring the right people into the room for honest conversation, strategic connection, and measurable next steps.",
    value: ["Curated, intimate environments for meaningful dialogue", "Facilitated conversations that lead to action", "Opportunities to connect across industries and experiences"],
    cta: { href: "/events", label: "View Events" },
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=80",
    alt: "Elegant event space prepared for a leadership gathering",
  },
  {
    id: "host-toolkit",
    icon: BookOpen,
    title: "Host Toolkit",
    tagline: "Bring the Bond to your community.",
    description: "A guided framework to run your own Bond conversations with confidence. Whether you’re gathering a small circle or convening your organization, the Host Toolkit gives you the structure to create rooms that matter.",
    value: ["Step-by-step facilitation framework", "Conversation guides rooted in the R.O.C. philosophy", "Tools to turn dialogue into commitments and follow-through"],
    cta: { href: "/contact#join", label: "Request the Toolkit" },
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=80",
    alt: "Notebook and planning materials on a desk",
  },
  {
    id: "membership",
    icon: Users,
    title: "Membership",
    tagline: "A community that executes.",
    description: "More than access—a commitment to growth. Membership connects you with resources, private sessions, and a community of leaders who hold each other to a higher standard and follow through on what matters.",
    value: ["Access to curated resources and private sessions", "A trusted network of leaders across four communities", "Ongoing accountability and shared momentum"],
    cta: { href: "/contact#join", label: "Join the Movement" },
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80",
    alt: "Diverse group of professionals connecting warmly",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Designed for momentum, not just inspiration."
        intro="Every Building the Bond offering is built to move you from conversation to action—with the people, tools, and structure to make it last."
        image={{ src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80", alt: "Workshop participants collaborating on a project" }}
      />

      <section className="section-pad bg-surface">
        <div className="container-shell space-y-24 lg:space-y-32">
          {programs.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <article key={p.id} id={p.id} className="grid gap-10 lg:grid-cols-12 lg:items-center scroll-mt-28">
                <div className={reverse ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-6"}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                    <Image src={p.image} alt={p.alt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                  </div>
                </div>
                <div className={reverse ? "lg:col-span-5 lg:col-start-1 lg:row-start-1" : "lg:col-span-5 lg:col-start-8"}>
                  <p.icon className="h-7 w-7 text-gold" aria-hidden />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-teal">{p.tagline}</p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight text-navy sm:text-4xl">{p.title}</h2>
                  <p className="mt-5 text-base leading-8 text-muted">{p.description}</p>
                  <ul className="mt-7 space-y-3">
                    {p.value.map((v) => (
                      <li key={v} className="flex gap-3 text-sm leading-7 text-navy">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href={p.cta.href} className="mt-8">{p.cta.label}</Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeading eyebrow="How to participate" title="Your next step is simple." intro="Whether you’re exploring for the first time or ready to go deeper, there’s a clear path into the Building the Bond community." align="center" className="mb-14" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { step: "01", title: "Explore", desc: "Discover the programs, stories, and resources that speak to where you are right now.", href: "/resources", link: "Browse resources" },
              { step: "02", title: "Connect", desc: "Attend an event, join the conversation, or bring a Bond gathering to your own community.", href: "/events", link: "See events" },
              { step: "03", title: "Commit", desc: "Become part of the movement. Join a community that values action, accountability, and legacy.", href: "/contact#join", link: "Join the movement" },
            ].map((s) => (
              <div key={s.step} className="rounded-[1.5rem] bg-surface border border-[var(--border)] p-8">
                <span className="font-serif text-5xl text-gold/70">{s.step}</span>
                <h3 className="mt-4 font-serif text-2xl text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{s.desc}</p>
                <a href={s.href} className="mt-5 inline-flex text-sm font-semibold text-navy hover:text-gold transition">{s.link} ?</a>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-muted">Program details, pricing, and membership benefits are shared directly during the joining process. No invented packages or commitments are presented here.</p>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
