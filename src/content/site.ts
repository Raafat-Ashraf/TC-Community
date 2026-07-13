import { NavLink, SocialLink, UtilityCTA } from "@/lib/types";

export const siteConfig = {
  name: "The Community Central Website",
  shortName: "The Community",
  abbreviation: "TC",
  tagline: "Restoring the Community to the Kingdom of God",
  description:
    "The Community (TC) is a unified platform for ministry across Egypt and the Middle East, equipping leaders and departments including The Recovery House and 100 Leaders.",
  url: "https://www.thecommunitymena.com",
  email: "info@thecommunitymena.com",
  phone: "+20 100 000 0000",
  address: "Cairo, Egypt",
  hours: "Sunday – Thursday, 9:00 AM – 5:00 PM",
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "News & Events", href: "/news" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const defaultUtilityCTAs: UtilityCTA[] = [
  { label: "Give", href: "/give" },
  { label: "Get Involved", href: "/contact" },
];

export const recoveryUtilityCTAs: UtilityCTA[] = [
  { label: "Give", href: "/give" },
  { label: "Apply for Residency", href: "/departments/recovery#inquire" },
];

export const leadersUtilityCTAs: UtilityCTA[] = [
  { label: "Meet The Leaders", href: "/departments/100-leaders#leaders" },
  { label: "Get Involved", href: "/departments/100-leaders#get-involved" },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "News & Events", href: "/news" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];
