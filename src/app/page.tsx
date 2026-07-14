import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";
import StatCounter from "@/components/StatCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  homeHero,
  homeAbout,
  ministryAreas,
  featuredDepartments,
  featuredServices,
  homeStats,
  homeTestimonials,
  closingBanner,
} from "@/content/home";
import { newsItems } from "@/content/news";
import { heroImages, contentImages } from "@/content/images";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The Community (TC) is restoring the community to the Kingdom of God through departments and ministries across Egypt, including The Recovery House and 100 Leaders.",
};

export default function HomePage() {
  const latestNews = [...newsItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <Hero
        headline={homeHero.headline}
        subhead={homeHero.subhead}
        primaryCta={homeHero.primaryCta}
        secondaryCta={homeHero.secondaryCta}
        imageSrc={heroImages.home.src}
        imageAlt={heroImages.home.alt}
      />

      {/* About The Community */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Who We Are" title={homeAbout.heading} />
            <div className="prose-body mx-auto mt-8 max-w-3xl text-center text-charcoal-700">
              {homeAbout.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="mx-auto mt-10 grid max-w-4xl items-center gap-0 overflow-hidden rounded-2xl border border-cream-200 sm:grid-cols-5">
              <div className="relative h-56 sm:col-span-2 sm:h-full">
                <Image
                  src={contentImages.scriptureCross.src}
                  alt={contentImages.scriptureCross.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <blockquote className="bg-cream-100 p-8 text-center italic text-navy-950 sm:col-span-3 sm:text-left">
                <p>&ldquo;{homeAbout.scripture.text}&rdquo;</p>
                <footer className="mt-3 text-sm font-semibold not-italic text-gold-600">
                  {homeAbout.scripture.reference}
                </footer>
              </blockquote>
            </div>
            <div className="mt-8 text-center">
              <CTAButton href={homeAbout.cta.href} variant="ghost">
                {homeAbout.cta.label}
              </CTAButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Our Departments */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Our Departments"
              title="Ministry Across Egypt and the Middle East"
              subtitle="Two departments are fully live today. The five areas of ministry below frame our broader work as it continues to grow."
            />
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {featuredDepartments.map((dept, i) => (
              <RevealOnScroll key={dept.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl ring-2 ring-gold-400">
                  <Card {...dept} />
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ministryAreas.map((area, i) => (
              <RevealOnScroll key={area.title} delay={i * 0.05}>
                <Card {...area} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Get Connected" title="Featured Services" />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, i) => (
              <RevealOnScroll key={service.title} delay={i * 0.08}>
                <Card {...service} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-navy-950 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Our Impact"
              title="Lives Changed Through The Recovery House"
              light
            />
            <div className="mt-12">
              <StatCounter stats={homeStats} />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Stories of Hope" title="What People Are Saying" />
            <div className="mt-12">
              <TestimonialSlider testimonials={homeTestimonials} />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Stay Informed" title="Latest News" />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((item, i) => (
              <RevealOnScroll key={item.slug} delay={i * 0.08}>
                <Link
                  href={`/news/${item.slug}`}
                  className="block h-full overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-sm hover:shadow-lg"
                >
                  <div className="relative h-44 w-full bg-cream-200">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                      {item.category}
                    </span>
                    <h3 className="mt-2 font-bold text-navy-950">{item.title}</h3>
                    <p className="mt-2 text-sm text-charcoal-700">{item.excerpt}</p>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/news" variant="outline">
              View All News &amp; Events
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Closing CTA banner */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-lg font-semibold text-gold-300 sm:text-xl">
            {closingBanner.line1} &bull; {closingBanner.line2}
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{closingBanner.line3}</h2>
          <div className="mt-8">
            <CTAButton href={closingBanner.cta.href} variant="primary" size="lg">
              {closingBanner.cta.label}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
