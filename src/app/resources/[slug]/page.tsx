import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { resources } from "@/content/resources";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const r = resources.find((x) => x.slug === slug);
  if (!r) return { title: "Resource" };
  return { title: r.title, description: r.excerpt };
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = resources.find((r) => r.slug === slug);
  if (!article) notFound();
  const related = resources.filter((r) => r.slug !== article.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="bg-navy text-white py-20 sm:py-28">
          <div className="container-shell max-w-4xl">
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold transition"><ArrowLeft className="h-4 w-4" aria-hidden /> Back to Resources</Link>
            <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold-soft">{article.category} · {article.readTime} · {article.date}</p>
            <h1 className="mt-5 font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.96] tracking-[-0.03em] text-white">{article.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">{article.excerpt}</p>
          </div>
        </header>

        <div className="container-shell max-w-5xl -mt-10 relative z-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] shadow-[var(--shadow-soft)]">
            <Image src={article.image} alt={article.alt} fill priority className="object-cover" sizes="(max-width:1024px) 100vw, 1024px" />
          </div>
        </div>

        <div className="container-shell max-w-3xl py-14 sm:py-20">
          <div className="space-y-6 text-base leading-8 text-muted">
            {article.content.map((p, i) => (
              <p key={i} className={i === 0 ? "text-lg leading-9 text-navy/85" : ""}>{p}</p>
            ))}
          </div>
          <div className="mt-14 rounded-[1.5rem] bg-[#EDE5D4] p-8 sm:p-10">
            <p className="font-serif text-2xl text-navy">Keep the conversation going.</p>
            <p className="mt-3 text-sm leading-7 text-muted">Join the Building the Bond movement for more insights, events, and meaningful connections.</p>
            <Button href="/contact#join" className="mt-6">Join the Movement</Button>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-pad bg-surface border-t border-[var(--border)]">
          <div className="container-shell">
            <h2 className="font-serif text-3xl text-navy mb-8">More to explore</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/resources/${r.slug}`} className="group flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem]">
                    <Image src={r.image} alt={r.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(max-width:768px) 100vw, 50vw" />
                  </div>
                  <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal">{r.category} · {r.readTime}</p>
                  <h3 className="mt-2 font-serif text-2xl text-navy group-hover:text-gold transition">{r.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-navy">Read <ArrowUpRight className="h-4 w-4" aria-hidden /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
