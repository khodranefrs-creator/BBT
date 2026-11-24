import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { audiences } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function AudiencePillars() {
  return (
    <section className="section-pad bg-background grain">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Who we serve"
          title="Four voices. One shared purpose."
          intro="Building the Bond welcomes distinct journeys and unites them through a common commitment to leadership, opportunity, and meaningful connection."
          align="center"
          className="mb-14"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {audiences.map((a, i) => (
            <Link
              key={a.id}
              href={a.href}
              className="group relative flex min-h-[24rem] flex-col justify-end overflow-hidden rounded-[1.5rem] p-6"
            >
              <Image src={a.image} alt={a.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-navy/5" />
              <div className="relative">
                <span className="text-xs font-semibold tracking-[0.2em] text-gold-soft">0{i + 1}</span>
                <h3 className="mt-2 font-serif text-3xl text-white">{a.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/78">{a.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-gold-soft">
                  Find your path <ArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
