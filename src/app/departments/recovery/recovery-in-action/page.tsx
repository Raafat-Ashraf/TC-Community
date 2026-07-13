import { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import FAQAccordion from "@/components/FAQAccordion";
import StoryDisplay from "@/components/StoryDisplay";
import CTAButton from "@/components/CTAButton";
import { confidentialityNotice, recoveryFAQs } from "@/content/recovery";
import { recoveryStories } from "@/content/stories";

export const metadata: Metadata = {
  title: "Recovery in Action",
  description:
    "Real stories of struggle, transformation, and lasting hope from residents of The Recovery House.",
};

export default function RecoveryInActionPage() {
  return (
    <>
      <Hero
        eyebrow="Recovery in Action"
        headline="Stories of Hope"
        subhead="Real journeys of struggle, transformation, and lasting freedom."
        size="md"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <RevealOnScroll>
            <div className="rounded-2xl border-l-4 border-gold-500 bg-cream-100 p-6 text-sm text-charcoal-700">
              <p className="font-semibold text-navy-950">A Note on Confidentiality</p>
              <p className="mt-2">{confidentialityNotice}</p>
            </div>
          </RevealOnScroll>

          <div className="mt-12 space-y-10">
            {recoveryStories.map((story, i) => (
              <RevealOnScroll key={story.slug} delay={i * 0.1}>
                <StoryDisplay story={story} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" />
          </RevealOnScroll>
          <div className="mt-12">
            <FAQAccordion items={recoveryFAQs} />
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Your story of transformation could be next.
          </h2>
          <div className="mt-6">
            <CTAButton href="/contact" variant="primary" size="lg">
              Reach Out Today
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
