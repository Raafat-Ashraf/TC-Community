export interface NavLink {
  label: string;
  href: string;
}

export interface UtilityCTA {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "facebook" | "youtube" | "instagram";
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CardItem {
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  icon?: string;
  comingSoon?: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  photo?: string;
}

export type NewsCategory = "News" | "Events" | "Workshops" | "Conferences" | "Articles";

export interface NewsItem {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string;
  excerpt: string;
  body: string[];
  image?: string;
}

export type ResourceCategory = "Guides" | "PDFs" | "Articles" | "Videos" | "Forms";

export interface ResourceItem {
  title: string;
  category: ResourceCategory;
  description: string;
  href: string;
  fileType?: string;
}

export interface StorySection {
  heading: string;
  paragraphs: string[];
}

export interface RecoveryStory {
  slug: string;
  name: string;
  title: string;
  sections: StorySection[];
  currentJourney: {
    timeInRecovery: string;
    currentStage: string;
  };
}
