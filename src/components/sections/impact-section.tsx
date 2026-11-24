import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const principles = [
  { value: "4", label: "Audiences united", detail: "Women, veterans, entrepreneurs, and community leaders." },
  { value: "3", label: "Pillars of action", detail: "Resources, Opportunities, and Connections." },
  { value: "1", label: "Shared movement", detail: "One Bond. Many Voices. One Movement." },
];

export function ImpactSection() {
  return (
    <section className="section-pad bg-background">
      <div className="container-shell grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Impact & proof"
            title="Built on substance, not slogans."
            intro="Building the Bond is grounded in principles that translate into action. We measure ourselves by the quality of connection, the clarity of next steps, and the trust we earn in every room."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {principles.map((p) => (
              <div key={p.label} className="border-l-2 border-gold/50 pl-5">
                <p className="font-serif text-4xl text-navy">{p.value}</p>
                <p className="mt-1 text-sm font-semibold text-navy">{p.label}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-[2rem] bg-surface border border-[var(--border)] p-8 sm:p-12 shadow-[var(--shadow-soft)]">
            <Quote className="h-10 w-10 text-gold/60" aria-hidden />
            <blockquote className="mt-6 font-serif text-2xl leading-relaxed text-navy sm:text-3xl sm:leading-relaxed">
              &ldquo;Professionalism isn’t a suit—it’s a standard. Building the Bond exists to raise that standard for ourselves and each other. We bring leaders together to grow wealth, voice, and community—one intentional connection at a time.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4 border-t border-[var(--border)] pt-6">
              <div className="h-12 w-12 rounded-full bg-navy flex items-center justify-center text-gold font-serif text-lg">B</div>
              <div>
                <p className="text-sm font-semibold text-navy">Building the Bond™</p>
                <p className="text-xs text-muted">By ShoulderUP</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs leading-6 text-muted px-2">
            Impact figures and member testimonials will be added as verified data becomes available. Building the Bond is committed to representing its community with accuracy and care.
          </p>
        </div>
      </div>
    </section>
  );
}
