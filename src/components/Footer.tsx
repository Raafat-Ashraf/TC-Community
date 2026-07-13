import Link from "next/link";
import { siteConfig, socialLinks, footerQuickLinks } from "@/content/site";
import NewsletterForm from "./NewsletterForm";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-heading text-lg font-bold text-white">{siteConfig.shortName}</h3>
          <p className="mt-3 text-sm text-cream-100/80">{siteConfig.address}</p>
          <p className="mt-1 text-sm text-cream-100/80">{siteConfig.phone}</p>
          <p className="mt-1 text-sm text-cream-100/80">{siteConfig.email}</p>
          <p className="mt-3 text-sm text-cream-100/60">{siteConfig.hours}</p>
        </div>

        <div>
          <NewsletterForm />
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream-100/80 hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold text-white">Follow Us</h3>
          <div className="mt-3 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-full bg-white/10 p-2 text-white hover:bg-gold-500 hover:text-navy-950"
              >
                <SocialIcon icon={social.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-cream-100/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="hover:text-gold-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
