import { SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  {
    letter: "R",
    title: "Resources",
    description:
      "Practical knowledge, tools, and insight you can use immediately—from conversations that respect your time and intelligence.",
  },
  {
    letter: "O",
    title: "Opportunities",
    description:
      "Rooms, relationships, and pathways that open doors. We connect ambition with access so momentum has somewhere to go.",
  },
  {
    letter: "C",
    title: "Connections",
    description:
      "Human relationships built on trust, not transactions. The kind of bonds that create collaboration, accountability, and legacy.",
  },
];

export function RocSection() {
  return (
    <section className="section-pad bg-navy text-white overflow-hidden">
      <div className="container-shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="The R.O.C. Philosophy"
              title="What holds the movement together."
              intro="Resources, Opportunities, and Connections are not separate offerings—they are the interlocking foundation of every Bond experience."
              tone="light"
            />
            <div className="mt-10 hidden lg:block">
              <div className="relative h-px w-full bg-white/15">
                <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-gold" />
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
                <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-gold" />
              </div>
              <p className="mt-6 text-sm leading-7 text-white/55">
                Each pillar strengthens the others. Resources without connection go unused. Connection without opportunity stalls. Opportunity without resources remains out of reach.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-0">
              {pillars.map((p, i) => (
                <div
                  key={p.letter}
                  className="group grid gap-4 border-t border-white/15 py-10 sm:grid-cols-[auto_1fr] sm:gap-8"
                >
                  <div className="flex items-start gap-4 sm:block">
                    <span className="font-serif text-6xl leading-none text-gold/80 sm:text-7xl">
                      {p.letter}
                    </span>
                    <span className="mt-3 text-xs font-semibold tracking-[0.2em] text-white/40 sm:block">
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl text-white sm:text-4xl">{p.title}</h3>
                    <p className="mt-4 max-w-xl text-base leading-8 text-white/72">{p.description}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-white/15" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
