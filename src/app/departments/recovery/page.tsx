import { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import StatCounter from "@/components/StatCounter";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTAButton from "@/components/CTAButton";
import RecoveryInquiryForm from "@/components/RecoveryInquiryForm";
import {
  recoveryHero,
  completeApproach,
  recoveryStats,
  nextSteps,
  joinCommunityBand,
} from "@/content/recovery";
import { heroImages } from "@/content/images";

export const metadata: Metadata = {
  title: "The Recovery House",
  description:
    "A faith-based Christian recovery center for men and women in Egypt, offering real, lasting freedom from addiction.",
};

export default function RecoveryPage() {
  return (
    <>
      <Hero
        eyebrow="The Recovery House (TRH) — A Ministry of The Community"
        headline={recoveryHero.headline}
        subhead={recoveryHero.subhead}
        primaryCta={recoveryHero.primaryCta}
        secondaryCta={recoveryHero.secondaryCta}
        imageSrc={heroImages.recovery.src}
        imageAlt={heroImages.recovery.alt}
      >
        <blockquote className="mx-auto mt-8 max-w-xl italic text-gold-300">
          &ldquo;{recoveryHero.quote}&rdquo;
        </blockquote>
        <p className="mx-auto mt-6 max-w-2xl text-cream-100/90">{recoveryHero.body}</p>
      </Hero>

      {/* Complete Recovery Approach */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Our Approach"
              title="A Complete Recovery Approach"
              subtitle="We believe lasting freedom comes from caring for the whole person."
            />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {completeApproach.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.1}>
                <a
                  href={item.href}
                  className="block h-full rounded-2xl border border-cream-200 bg-cream-50 p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-4xl font-bold text-gold-400">{item.number}</span>
                  <h3 className="mt-4 text-xl font-bold text-navy-950">{item.title}</h3>
                  <p className="mt-3 text-charcoal-700">{item.description}</p>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Counter */}
      <section className="bg-navy-950 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Our Impact" title="A Decade of Restoring Lives" light />
            <div className="mt-12">
              <StatCounter stats={recoveryStats} />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Take the Next Steps */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Get Connected" title="Take the Next Steps" />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((step, i) => (
              <RevealOnScroll key={step.title} delay={i * 0.08}>
                <Card {...step} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquire" className="scroll-mt-32 bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Reach Out"
              title="Apply for Residency or Ask a Question"
              subtitle="Whether you're ready to apply, want to support our work, or simply have a question — we'd love to hear from you."
              align="left"
            />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="rounded-2xl border border-cream-200 bg-cream-50 p-8">
              <RecoveryInquiryForm />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Join Our Community band */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">{joinCommunityBand.heading}</h2>
          <p className="mt-4 text-cream-100/80">{joinCommunityBand.body}</p>
          <div className="mt-8">
            <CTAButton href="/contact" variant="primary" size="lg">
              Partner in the Journey
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
