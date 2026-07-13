import { CardItem, StatItem, Testimonial } from "@/lib/types";

export const homeHero = {
  headline: "Restoring the Community to the Kingdom of God",
  subhead: "Get connected and find out how you can help.",
  primaryCta: { label: "Explore Our Departments", href: "/departments" },
  secondaryCta: { label: "Get Involved", href: "/contact" },
};

export const homeAbout = {
  heading: "About The Community",
  body: [
    "The Community (TC) exists to carry the gospel to non-believing young adults across Egypt through an Isaiah 19 Movement — establishing ministry points in five strategic cities where the lost can be reached and local church leaders can be equipped and trained to multiply that impact far beyond their own congregations.",
    "We believe transformed young adults become the next generation of leaders who restore families, churches, and communities to God's Kingdom.",
  ],
  scripture: {
    text: "In that day there will be an altar to the Lord in the heart of Egypt, and a pillar to the Lord at its border... The Lord will make himself known to the Egyptians, and the Egyptians will know the Lord in that day... The Lord will strike Egypt with a plague; he will strike them and heal them. They will turn to the Lord, and he will respond to their pleas and heal them.",
    reference: "Isaiah 19:18–21",
  },
  cta: { label: "Read Our Full Story", href: "/about" },
};

export const ministryAreas: CardItem[] = [
  {
    title: "Spiritual Formation",
    description: "Discipleship and spiritual growth that roots young adults in the truth of the gospel.",
    href: "/departments",
    comingSoon: true,
  },
  {
    title: "Emotional and Physical Empowerment",
    description: "Holistic care that restores emotional health and physical wellbeing.",
    href: "/departments",
    comingSoon: true,
  },
  {
    title: "Work and Faith",
    description: "Equipping believers to integrate faith with vocation, work, and economic empowerment.",
    href: "/departments",
    comingSoon: true,
  },
  {
    title: "Leadership Development",
    description: "Raising up and multiplying local church leaders across Egypt and the region.",
    href: "/departments",
    comingSoon: true,
  },
  {
    title: "Online Ministry",
    description: "Reaching young adults with the gospel through digital platforms and online community.",
    href: "/departments",
    comingSoon: true,
  },
];

export const featuredDepartments: CardItem[] = [
  {
    title: "The Recovery House (TRH)",
    description:
      "A faith-based Christian recovery center for men and women in Egypt seeking real, lasting freedom from addiction.",
    href: "/departments/recovery",
    ctaLabel: "Visit Recovery",
  },
  {
    title: "100 Leaders",
    description:
      "Identifying, equipping, supporting, and holding accountable Christian leaders across the Middle East.",
    href: "/departments/100-leaders",
    ctaLabel: "Visit 100 Leaders",
  },
];

export const featuredServices: CardItem[] = [
  {
    title: "Residential Recovery Program",
    description: "An 8–10 month, faith-based residential program healing body, soul, and spirit.",
    href: "/departments/recovery/program",
    ctaLabel: "Learn More",
  },
  {
    title: "Stories of Hope",
    description: "Real stories of transformation and lasting freedom from addiction.",
    href: "/departments/recovery/recovery-in-action",
    ctaLabel: "Read Stories",
  },
  {
    title: "Leader Coaching & Mentoring",
    description: "Every leader in the 100 Leaders network receives a trained coach and a personal mentor.",
    href: "/departments/100-leaders",
    ctaLabel: "Meet The Leaders",
  },
  {
    title: "Get Involved",
    description: "Churches, individuals, and organizations can partner with our departments and ministries.",
    href: "/contact",
    ctaLabel: "Get Involved",
  },
];

export const homeStats: StatItem[] = [
  { value: 2, label: "Recovery facilities" },
  { value: 50, label: "Concurrent resident beds" },
  { value: 500, suffix: "+", label: "Men and women impacted directly by TRH" },
  { value: 10, label: "Years serving in recovery ministry" },
];

export const homeTestimonials: Testimonial[] = [
  {
    quote:
      "I found a family here, not just a program. For the first time in years, I know who I am and whose I am.",
    name: "A Resident of The Recovery House",
    role: "Graduate, Recovery Program",
  },
  {
    quote:
      "The Recovery House gave me tools I didn't know I needed, and a hope I thought I'd lost for good.",
    name: "Michael",
    role: "Recovery in Action",
  },
  {
    quote:
      "100 Leaders didn't just train me — they walked with me, coached me, and believed in what God was doing in my community before I could see it myself.",
    name: "A Leader in the 100 Leaders Network",
    role: "Community Leader, Middle East",
  },
];

export const closingBanner = {
  line1: "Impactful Generations",
  line2: "Effective Organizations",
  line3: "A Community seeking God's Kingdom",
  cta: { label: "Get Involved", href: "/contact" },
};
