import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ClosingCta } from "@/components/sections/closing-cta";
import { audiences } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Building the Bond™—a leadership platform uniting women, veterans, entrepreneurs, and community builders through Resources, Opportunities, and Connections.",
};

const values = [
  { title: "Intentionality", description: "We create rooms and resources with purpose, so every interaction has the chance to become meaningful action." },
  { title: "Integrity", description: "Professionalism is our standard. We lead with honesty, respect, and follow-through." },
  { title: "Inclusion", description: "Many voices make the movement stronger. We welcome diverse experiences and build bridges across communities." },
  { title: "Impact", description: "Conversation matters when it moves. We measure success by the steps people take and the legacy they build." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Building the Bond"
        title="A movement built on connection, carried by action."
        intro="Building the Bond™ by ShoulderUP brings together women, veterans, entrepreneurs, and community builders to grow wealth, voice, and community—one intentional connection at a time."
        image={{ src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80", alt: "Collaborative team meeting in a warm professional setting" }}
      />

      <section className="section-pad bg-surface">
        <div className="container-shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our mission" title="To turn meaningful connection into lasting impact." />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-base leading-8 text-muted">
            <p>
              Building the Bond exists to unite people around leadership, wealth, voice, and meaningful connection. We believe that when the right people come together with intention, conversations become opportunities, relationships become collaboration, and individual leadership becomes collective impact.
            </p>
            <p>
              Our platform is designed for those who are ready to move—not just be inspired. Through programs, events, resources, and a growing community, we create the conditions for people to lead with confidence and build with purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background grain">
        <div className="container-shell grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80" alt="People engaged in an intentional discussion" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <SectionHeading eyebrow="Our story" title="Born from the belief that leadership needs community." />
            <div className="mt-8 space-y-5 text-base leading-8 text-muted">
              <p>
                Building the Bond was created by ShoulderUP to answer a simple but urgent need: leaders across communities deserve spaces where they can be seen, supported, and challenged to grow.
              </p>
              <p>
                Too often, ambition is isolated. Women leaders navigate rooms that weren’t built for them. Veterans transition without the networks they deserve. Entrepreneurs build without access. Community leaders carry weight without support.
              </p>
              <p className="text-navy font-medium border-l-2 border-gold pl-5">
                Building the Bond is the answer—a platform where those journeys intersect, and where connection becomes the foundation for something greater.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy text-white">
        <div className="container-shell max-w-4xl text-center">
          <p className="eyebrow text-gold-soft">Our standard</p>
          <blockquote className="mt-8 font-serif text-[clamp(1.8rem,3.8vw,3.2rem)] leading-[1.25] tracking-[-0.02em] text-white">
            &ldquo;Professionalism isn’t a suit—it’s a standard. Building the Bond exists to raise that standard for ourselves and each other. We bring leaders together to grow wealth, voice, and community—one intentional connection at a time.&rdquo;
          </blockquote>
          <p className="mt-8 text-sm font-semibold tracking-wide text-gold-soft">Building the Bond™ by ShoulderUP</p>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-shell">
          <SectionHeading eyebrow="Who we serve" title="Distinct journeys. Shared purpose." intro="Our community is made stronger by the people who bring their lived experience, ambition, and commitment to it." align="center" className="mb-14" />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {audiences.map((a) => (
              <div key={a.id} className="rounded-[1.5rem] border border-[var(--border)] bg-background p-7">
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src={a.image} alt={a.alt} fill className="object-cover" sizes="(max-width:640px) 100vw, 25vw" />
                </div>
                <h3 className="font-serif text-2xl text-navy">{a.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="The R.O.C. Framework" title="Resources. Opportunities. Connections." intro="Three pillars that shape every program, conversation, and partnership at Building the Bond." />
          </div>
          <div className="lg:col-span-7 lg:col-start-6 grid gap-6 sm:grid-cols-3">
            {[
              { l: "R", t: "Resources", d: "Knowledge, tools, and practical insight that people can use immediately." },
              { l: "O", t: "Opportunities", d: "Pathways, rooms, and relationships that open doors to growth." },
              { l: "C", t: "Connections", d: "Trust-based relationships that create collaboration and accountability." },
            ].map((p) => (
              <div key={p.l} className="rounded-2xl bg-surface border border-[var(--border)] p-6">
                <span className="font-serif text-5xl text-gold/80">{p.l}</span>
                <h3 className="mt-3 font-serif text-2xl text-navy">{p.t}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-shell">
          <SectionHeading eyebrow="Our values" title="The standards we hold together." align="center" className="mb-14" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="border-t-2 border-gold/40 pt-6">
                <span className="text-xs font-semibold tracking-[0.2em] text-muted">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-2xl text-navy">{v.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Looking forward" title="Building a legacy that outlasts any single room." intro="Our vision is a growing community where leadership is shared, opportunity is accessible, and every intentional connection has the power to ripple outward—into families, businesses, and communities." />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 rounded-2xl bg-navy p-8 text-white">
            <p className="font-serif text-2xl text-gold">The future we’re building</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/75">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />More rooms where real conversations happen.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />More pathways to resources and opportunity.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />More leaders empowered to build their own legacy.</li>
            </ul>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
