export type EventItem = {
  slug: string;
  title: string;
  category: "Leadership" | "Veterans" | "Entrepreneurship" | "Community";
  date: string;
  location: string;
  description: string;
  image: string;
  alt: string;
  audience: string;
  agenda: string[];
  featured?: boolean;
  sample?: boolean;
};

export const events: EventItem[] = [
  {
    slug: "bond-roundtable-leadership-legacy",
    title: "The Bond Roundtable: Leadership & Legacy",
    category: "Leadership",
    date: "Sample date: June 18, 2026",
    location: "Sample location: Washington, DC",
    description:
      "An intimate conversation bringing women leaders, veterans, and entrepreneurs together to turn lived experience into shared momentum.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
    alt: "Guests networking at an intimate leadership event",
    audience: "Women leaders, veterans, entrepreneurs, and community builders",
    agenda: [
      "Welcome and intention setting",
      "Facilitated roundtable conversations",
      "Action commitments and connection exchange",
    ],
    featured: true,
    sample: true,
  },
  {
    slug: "veteran-voices-business-forum",
    title: "Veteran Voices Business Forum",
    category: "Veterans",
    date: "Sample date: July 23, 2026",
    location: "Sample location: Virtual",
    description:
      "A practical forum focused on translating service, leadership, and resilience into entrepreneurial opportunity.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    alt: "Professional workshop with participants taking notes",
    audience: "Veterans, veteran allies, and business mentors",
    agenda: ["Panel conversation", "Resource spotlight", "Peer networking circles"],
    sample: true,
  },
  {
    slug: "entrepreneur-collaboration-lab",
    title: "Entrepreneur Collaboration Lab",
    category: "Entrepreneurship",
    date: "Sample date: August 14, 2026",
    location: "Sample location: Atlanta, GA",
    description:
      "A hands-on session where founders and community builders pressure-test ideas and form meaningful partnerships.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80",
    alt: "Entrepreneurs collaborating in a workshop setting",
    audience: "Founders, small business owners, and ecosystem partners",
    agenda: ["Challenge framing", "Collaborative working sessions", "Partnership commitments"],
    sample: true,
  },
  {
    slug: "community-builders-salon",
    title: "Community Builders Salon",
    category: "Community",
    date: "Sample date: September 10, 2026",
    location: "Sample location: Chicago, IL",
    description:
      "A salon-style gathering for local leaders to share what is working, what is needed, and where collective action can grow.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80",
    alt: "Community members in thoughtful conversation around a table",
    audience: "Community leaders, nonprofit partners, and advocates",
    agenda: ["Community story circle", "Resource mapping", "Next-step planning"],
    sample: true,
  },
];

export const eventCategories = ["All", "Leadership", "Veterans", "Entrepreneurship", "Community"] as const;
