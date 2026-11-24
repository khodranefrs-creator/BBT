import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CardImage = { src: string; alt: string };

export function ImageCard({
  image,
  eyebrow,
  title,
  description,
  href,
  className,
}: {
  image: CardImage;
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  className?: string;
}) {
  const Inner = (
    <div className={cn("group flex h-full flex-col overflow-hidden rounded-[var(--radius)] bg-surface border border-[var(--border)] shadow-[0_2px_20px_rgba(13,27,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]", className)}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        {eyebrow && <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal">{eyebrow}</p>}
        <h3 className="mt-3 font-serif text-2xl leading-tight text-navy">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
        {href && (
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy transition group-hover:text-gold">
            Explore <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        )}
      </div>
    </div>
  );
  return href ? <Link href={href} className="block h-full">{Inner}</Link> : Inner;
}
