import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { resources } from "@/content/resources";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowLink } from "@/components/ui/button";

export function ResourcesPreview() {
  const items = resources.slice(0, 3);
  return (
    <section className="section-pad bg-background">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end mb-14">
          <SectionHeading
            eyebrow="Resources"
            title="Insight you can act on."
            intro="Editorial perspectives on leadership, wealth, community, and voice—crafted to be read, shared, and put into practice."
            className="lg:col-span-7"
          />
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <ArrowLink href="/resources">Explore all resources</ArrowLink>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((r) => (
            <Link key={r.slug} href={`/resources/${r.slug}`} className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                <Image src={r.image} alt={r.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="mt-5 flex flex-1 flex-col">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal">{r.category} <span className="text-muted">· {r.readTime}</span></p>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-navy group-hover:text-navy-soft">{r.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted flex-1">{r.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-gold">
                  Read article <ArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
