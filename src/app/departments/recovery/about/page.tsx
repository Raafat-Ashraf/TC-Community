import { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTAButton from "@/components/CTAButton";
import {
  aboutOpeningScripture,
  aboutIntro,
  addictionContext,
  recoveryMission,
  foundingHistory,
  transformationReflection,
  recoveryCoreValues,
} from "@/content/recovery";

export const metadata: Metadata = {
  title: "About The Recovery House",
  description:
    "The story, mission, and core values behind The Recovery House — a Christ-centered residential recovery ministry in Egypt.",
};

export default function RecoveryAboutPage() {
  return (
    <>
      <Hero
        eyebrow="Our Story"
        headline="A Path From the Pit to Solid Ground"
        subhead="How The Recovery House began, and why we believe no life is beyond the reach of God's redeeming love."
        size="md"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <RevealOnScroll>
            <blockquote className="rounded-2xl border-l-4 border-gold-500 bg-cream-100 p-6 text-center italic text-navy-950">
              <p className="text-lg">&ldquo;{aboutOpeningScripture.text}&rdquo;</p>
              <footer className="mt-3 text-sm font-semibold not-italic text-gold-600">
                {aboutOpeningScripture.reference}
              </footer>
            </blockquote>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="prose-body mt-8 text-charcoal-700">
              {aboutIntro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <h2 className="mt-12 text-2xl font-bold text-navy-950">
              The Reality of Addiction in Egypt
            </h2>
            <div className="prose-body mt-4 text-charcoal-700">
              {addictionContext.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <h2 className="mt-12 text-2xl font-bold text-navy-950">Our Mission</h2>
            <div className="prose-body mt-4 text-charcoal-700">
              {recoveryMission.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <h2 className="mt-12 text-2xl font-bold text-navy-950">How We Began</h2>
            <div className="prose-body mt-4 text-charcoal-700">
              {foundingHistory.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <h2 className="mt-12 text-2xl font-bold text-navy-950">Lives Made New</h2>
            <div className="prose-body mt-4 text-charcoal-700">
              {transformationReflection.map((p) => (
                <p key={p} className="font-medium">
                  {p}
                </p>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="What We Believe" title="Our Core Values" />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recoveryCoreValues.map((value, i) => (
              <RevealOnScroll key={value.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-cream-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-navy-950">{value.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-700">{value.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Want to learn more about our program?
          </h2>
          <div className="mt-6">
            <CTAButton href="/departments/recovery/program" variant="primary" size="lg">
              Explore Our Program
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
