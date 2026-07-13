import { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import SocialIcon from "@/components/SocialIcon";
import RevealOnScroll from "@/components/RevealOnScroll";
import { siteConfig, socialLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Community, The Recovery House, or 100 Leaders.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        headline="Contact Us"
        subhead="We'd love to hear from you. Reach out with questions, prayer requests, or ways you'd like to get involved."
        size="md"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <RevealOnScroll>
            <div className="rounded-2xl border border-cream-200 bg-cream-50 p-8">
              <ContactForm />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-navy-950">Office</h2>
                <p className="mt-2 text-charcoal-700">{siteConfig.address}</p>
                <p className="mt-1 text-charcoal-700">{siteConfig.phone}</p>
                <p className="mt-1 text-charcoal-700">{siteConfig.email}</p>
                <p className="mt-1 text-sm text-charcoal-700/70">{siteConfig.hours}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-950">Follow Us</h2>
                <div className="mt-3 flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="rounded-full bg-navy-950 p-2 text-white hover:bg-gold-500 hover:text-navy-950"
                    >
                      <SocialIcon icon={social.icon} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-950">Find Us</h2>
                <p className="mt-1 text-xs text-charcoal-700/60">
                  TODO: Replace with a real embedded address once confirmed.
                </p>
                <div className="mt-3 overflow-hidden rounded-2xl border border-cream-200">
                  <iframe
                    title="Office location map"
                    src="https://www.google.com/maps?q=Cairo,Egypt&output=embed"
                    className="h-64 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
