"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { resources, resourceCategories } from "@/content/resources";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

export function ResourcesExplorer() {
  const [category, setCategory] = useState<(typeof resourceCategories)[number]>("All");
  const filtered = useMemo(() => (category === "All" ? resources : resources.filter((r) => r.category === category)), [category]);
  const [featured, ...rest] = filtered;
  const grid = featured ? rest : [];

  return (
    <div>
      <SectionHeading eyebrow="Articles & perspectives" title="Read. Reflect. Act." intro="Curated editorial content to support your leadership, wealth-building, community impact, and voice. Sample content is original and clearly labeled." className="mb-10" />
      <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Resource categories">
        {resourceCategories.map((c) => (
          <button key={c} role="tab" aria-selected={category === c} onClick={() => setCategory(c)} className={cn("rounded-full px-4 py-2 text-sm font-medium transition border", category === c ? "bg-navy text-white border-navy" : "bg-transparent text-navy border-[var(--border-strong)] hover:border-navy")}>{c}</button>
        ))}
      </div>

      {featured && (
        <Link href={`/resources/${featured.slug}`} className="group grid overflow-hidden rounded-[2rem] border border-[var(--border)] bg-background lg:grid-cols-2 mb-12">
          <div className="relative min-h-[18rem]">
            <Image src={featured.image} alt={featured.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.02]" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal">{featured.category} · {featured.readTime}</p>
            <h3 className="mt-4 font-serif text-3xl sm:text-4xl text-navy leading-tight">{featured.title}</h3>
            <p className="mt-4 text-base leading-8 text-muted">{featured.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-gold">Read article <ArrowUpRight className="h-4 w-4" aria-hidden /></span>
          </div>
        </Link>
      )}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {grid.map((r) => (
          <Link key={r.slug} href={`/resources/${r.slug}`} className="group flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
              <Image src={r.image} alt={r.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(max-width:768px) 100vw, 33vw" />
            </div>
            <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal">{r.category} <span className="text-muted">· {r.readTime}</span></p>
            <h3 className="mt-3 font-serif text-2xl leading-tight text-navy group-hover:text-navy-soft">{r.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{r.excerpt}</p>
          </Link>
        ))}
      </div>
      {!featured && <p className="text-sm text-muted">No resources in this category yet.</p>}
    </div>
  );
}
