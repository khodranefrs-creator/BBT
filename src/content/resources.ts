export type ResourceItem = {
  slug: string;
  title: string;
  category: "Leadership" | "Wealth" | "Community" | "Voice";
  excerpt: string;
  image: string;
  alt: string;
  readTime: string;
  date: string;
  content: string[];
};

export const resources: ResourceItem[] = [
  {
    slug: "leading-with-standard-not-status",
    title: "Leading With a Standard, Not a Status",
    category: "Leadership",
    excerpt:
      "Professionalism becomes powerful when it is practiced as a daily standard that lifts everyone in the room.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    alt: "Team members in a focused leadership discussion",
    readTime: "5 min read",
    date: "Editorial sample",
    content: [
      "Leadership is often described through titles, but the people who create lasting impact are usually defined by their standards. A standard shows up in how you prepare, how you listen, and how you make room for others to contribute.",
      "At Building the Bond, professionalism is not a performance. It is a commitment to clarity, respect, and follow-through. When leaders hold that standard consistently, they create environments where trust can grow quickly.",
      "The most meaningful rooms are not the loudest ones. They are the rooms where expectations are clear, voices are valued, and action follows conversation.",
    ],
  },
  {
    slug: "wealth-as-a-community-practice",
    title: "Wealth as a Community Practice",
    category: "Wealth",
    excerpt:
      "Financial confidence grows faster when knowledge, access, and opportunity are shared with intention.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    alt: "Professional reviewing financial plans at a desk",
    readTime: "6 min read",
    date: "Editorial sample",
    content: [
      "Wealth-building conversations often feel isolating, especially for people navigating systems that were not designed with them in mind. Community changes that. It creates space to ask honest questions, compare notes, and learn from lived experience.",
      "The goal is not only personal gain. It is the ability to create stability, invest in others, and make choices from a place of confidence rather than urgency.",
      "When resources are shared responsibly, opportunity stops being a secret and starts becoming a pathway.",
    ],
  },
  {
    slug: "the-power-of-intentional-rooms",
    title: "The Power of Intentional Rooms",
    category: "Community",
    excerpt:
      "The right room does more than inspire. It clarifies direction, deepens relationships, and creates accountability.",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1600&q=80",
    alt: "People gathered in an intimate professional event",
    readTime: "4 min read",
    date: "Editorial sample",
    content: [
      "Not every gathering creates momentum. Intentional rooms do. They are designed with purpose, shaped by thoughtful facilitation, and grounded in mutual respect.",
      "When people feel seen and heard, conversation moves beyond surface-level networking. It becomes a place to name challenges, exchange insight, and commit to next steps.",
      "Building the Bond treats connection as a catalyst. A well-held room can change the trajectory of a project, a business, or a life.",
    ],
  },
  {
    slug: "finding-your-voice-after-transition",
    title: "Finding Your Voice After Transition",
    category: "Voice",
    excerpt:
      "Transitions can reshape identity, but they can also sharpen purpose when community and opportunity meet.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=80",
    alt: "Speaker addressing an audience from a stage",
    readTime: "5 min read",
    date: "Editorial sample",
    content: [
      "Transitions, whether professional, personal, or service-related, often ask people to redefine how they show up. That process can be disorienting, but it can also be clarifying.",
      "Voice is not only about speaking. It is about knowing what you carry, what you need, and where your experience can create value for others.",
      "In community, people find language for their next chapter. They also find listeners who take that chapter seriously.",
    ],
  },
];

export const resourceCategories = ["All", "Leadership", "Wealth", "Community", "Voice"] as const;
