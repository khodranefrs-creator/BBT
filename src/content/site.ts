export const siteConfig = {
  name: "Building the Bond",
  shortName: "BBT",
  byline: "By ShoulderUP",
  tagline: "One Bond. Many Voices. One Movement.",
  description:
    "Building the Bond is a leadership platform for women, veterans, entrepreneurs, and community builders. We turn conversations into action—and action into legacy.",
  url: "https://buildingthebond.com",
  email: "hello@buildingthebond.com",
  socials: {
    linkedin: "https://www.linkedin.com/company/building-the-bond",
    instagram: "https://www.instagram.com/buildingthebond",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/events", label: "Events" },
    { href: "/resources", label: "Resources" },
    { href: "/partner", label: "Partner & Sponsor" },
  ],
  primaryCta: { href: "/contact#join", label: "Join the Movement" },
} as const;

export const audiences = [
  {
    id: "women",
    title: "Women",
    description:
      "Leadership, growth, and a community that sees your ambition and supports your next move.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
    alt: "Women leaders collaborating in a professional meeting",
    href: "/programs#membership",
  },
  {
    id: "veterans",
    title: "Veterans",
    description:
      "Resources, recognition, and meaningful connections that honor service while opening new doors.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    alt: "Veteran professional in conversation during a mentorship meeting",
    href: "/programs#podcast",
  },
  {
    id: "entrepreneurs",
    title: "Entrepreneurs",
    description:
      "Practical tools, trusted relationships, and rooms where ideas turn into collaboration.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    alt: "Entrepreneurs discussing strategy around a table",
    href: "/programs#host-toolkit",
  },
  {
    id: "community",
    title: "Community Leaders",
    description:
      "A platform for people building stronger neighborhoods through voice, action, and shared purpose.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
    alt: "Community leaders engaged in a roundtable discussion",
    href: "/events",
  },
] as const;
