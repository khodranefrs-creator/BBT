import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  primaryCta,
  secondaryCta,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  image: { src: string; alt: string };
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <Image src={image.src} alt={image.alt} fill priority className="object-cover opacity-35" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,27,42,0.92)_0%,rgba(13,27,42,0.72)_45%,rgba(13,27,42,0.45)_100%)]" />
      </div>
      <div className={cn("container-shell relative py-24 sm:py-28 lg:py-36", align === "center" && "text-center")}>
        <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
          {eyebrow && <p className="eyebrow text-gold-soft">{eyebrow}</p>}
          <h1 className="mt-5 font-serif text-[clamp(2.7rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.035em] text-white">{title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">{intro}</p>
          {(primaryCta || secondaryCta) && (
            <div className={cn("mt-10 flex flex-wrap gap-4", align === "center" && "justify-center")}>
              {primaryCta && <Button href={primaryCta.href} variant="inverse">{primaryCta.label}</Button>}
              {secondaryCta && <Button href={secondaryCta.href} variant="secondary" className="border-white/30 text-white hover:bg-white hover:text-navy">{secondaryCta.label}</Button>}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
