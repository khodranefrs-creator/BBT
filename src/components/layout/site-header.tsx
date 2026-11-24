"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  if (prevPath !== pathname) {
    setPrevPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#F6F2EA]/92 backdrop-blur-md shadow-[0_1px_0_rgba(13,27,42,0.08)]" : "bg-[#F6F2EA]/80 backdrop-blur-sm",
      )}
    >
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex flex-col leading-none" aria-label="Building the Bond home">
          <span className="font-serif text-[1.55rem] font-semibold tracking-tight text-navy">
            Building <span className="text-gold">the</span> Bond
          </span>
          <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-muted">
            {siteConfig.byline}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium tracking-wide text-navy/80 transition hover:text-navy",
                  active && "text-navy",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300",
                    active ? "w-full" : "w-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.primaryCta.href}>{siteConfig.primaryCta.label}</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-[#F6F2EA] border-t border-[var(--border)]",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0 border-transparent",
        )}
      >
        <nav aria-label="Mobile" className="container-shell flex flex-col py-6">
          {siteConfig.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "py-3 text-base font-medium border-b border-[var(--border)]",
                  active ? "text-navy" : "text-navy/75",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button href={siteConfig.primaryCta.href} className="mt-6 w-full">
            {siteConfig.primaryCta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}
