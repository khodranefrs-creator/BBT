import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { NewsletterForm } from "@/components/forms/newsletter-form";

const programLinks = [
  { href: "/programs#podcast", label: "Podcast" },
  { href: "/programs#retreats", label: "Retreats & Events" },
  { href: "/programs#host-toolkit", label: "Host Toolkit" },
  { href: "/programs#membership", label: "Membership" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-shell section-pad">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1.2fr]">
          <div>
            <Link href="/" className="inline-flex flex-col leading-none">
              <span className="font-serif text-3xl font-semibold tracking-tight text-white">
                Building <span className="text-gold">the</span> Bond
              </span>
              <span className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/55">
                {siteConfig.byline}
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
              A leadership platform uniting women, veterans, entrepreneurs, and community builders
              around resources, opportunities, and meaningful connection.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" aria-hidden /> {siteConfig.email}</p>
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-gold" aria-hidden /> Serving a national and global community</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">Navigate</p>
            <ul className="mt-5 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/75 transition hover:text-white">{item.label}</Link>
                </li>
              ))}
              <li><Link href="/contact" className="text-sm text-white/75 transition hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">Programs</p>
            <ul className="mt-5 space-y-3">
              {programLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/75 transition hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4">
              {Object.entries(siteConfig.socials).map(([name, href]) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-white/70 transition hover:text-gold">
                  <span className="capitalize">{name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">Stay in the movement</p>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Receive thoughtful updates on events, resources, and opportunities to build meaningful connection.
            </p>
            <NewsletterForm tone="dark" className="mt-6" />
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Building the Bond™ by ShoulderUP. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
