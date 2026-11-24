import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  ariaLabel?: string;
};

const styles = {
  primary:
    "bg-navy text-white hover:bg-navy-soft shadow-[0_10px_30px_rgba(13,27,42,0.22)]",
  secondary:
    "bg-transparent text-navy border border-[var(--border-strong)] hover:bg-navy hover:text-white",
  ghost: "bg-transparent text-navy hover:text-gold",
  inverse: "bg-gold text-navy hover:bg-gold-soft",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  ariaLabel,
}: ButtonProps) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-none",
    styles[variant],
    className,
  );
  if (href) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export function ArrowLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-navy transition hover:text-gold",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}
