import { CardItem } from "@/lib/types";
import { ministryAreaImages } from "@/content/images";

export const departmentsHero = {
  headline: "Our Departments",
  subhead:
    "The Community works through dedicated departments and ministries, each addressing a distinct need while carrying the same mission: restoring the community to the Kingdom of God.",
};

export const liveDepartments: CardItem[] = [
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

export const ministryAreaCards: CardItem[] = [
  {
    title: "Spiritual Formation",
    description: "Discipleship and spiritual growth that roots young adults in the truth of the gospel.",
    href: "/departments",
    comingSoon: true,
    image: ministryAreaImages["Spiritual Formation"],
  },
  {
    title: "Emotional and Physical Empowerment",
    description: "Holistic care that restores emotional health and physical wellbeing.",
    href: "/departments",
    comingSoon: true,
    image: ministryAreaImages["Emotional and Physical Empowerment"],
  },
  {
    title: "Work and Faith",
    description: "Equipping believers to integrate faith with vocation, work, and economic empowerment.",
    href: "/departments",
    comingSoon: true,
    image: ministryAreaImages["Work and Faith"],
  },
  {
    title: "Leadership Development",
    description: "Raising up and multiplying local church leaders across Egypt and the region.",
    href: "/departments",
    comingSoon: true,
    image: ministryAreaImages["Leadership Development"],
  },
  {
    title: "Online Ministry",
    description: "Reaching young adults with the gospel through digital platforms and online community.",
    href: "/departments",
    comingSoon: true,
    image: ministryAreaImages["Online Ministry"],
  },
];
