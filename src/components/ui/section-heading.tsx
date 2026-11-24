import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-4", tone === "light" ? "text-gold-soft" : "text-navy-soft")}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn("section-title", tone === "light" ? "text-white" : "text-navy")}>{title}</h2>
      {intro && (
        <p className={cn("lede mt-5", tone === "light" ? "text-white/75" : "text-muted")}>{intro}</p>
      )}
    </div>
  );
}
