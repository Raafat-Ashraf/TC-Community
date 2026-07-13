import { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import ProgramPhaseAccordion from "@/components/ProgramPhaseAccordion";
import CTAButton from "@/components/CTAButton";
import {
  programIntro,
  keyElements,
  programPhases,
  programIncludes,
} from "@/content/recovery";

export const metadata: Metadata = {
  title: "Our Program",
  description:
    "An 8–10 month faith-based residential recovery program healing body, soul, and spirit through six structured phases.",
};

export default function RecoveryProgramPage() {
  return (
    <>
      <Hero
        eyebrow="Our Program"
        headline={programIntro.heading}
        subhead={programIntro.body}
        size="md"
      />

      {/* Key Elements */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Foundations" title="Key Elements of Our Program" />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {keyElements.map((element, i) => (
              <RevealOnScroll key={element.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-cream-200 bg-cream-50 p-8">
                  <h3 className="text-xl font-bold text-navy-950">{element.title}</h3>
                  <p className="mt-3 text-charcoal-700">{element.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Program Roadmap */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="The Journey"
              title="Program Roadmap: Six Phases"
              subtitle="Each resident moves through six structured phases over 8–10 months."
            />
          </RevealOnScroll>
          <div className="mt-12">
            <ProgramPhaseAccordion phases={programPhases} />
          </div>
        </div>
      </section>

      {/* What the Program Includes */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Comprehensive Care" title="What the Program Includes" />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programIncludes.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-cream-200 bg-cream-50 p-6">
                  <h3 className="font-bold text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-700">{item.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to take the next step toward freedom?
          </h2>
          <div className="mt-6">
            <CTAButton href="/departments/recovery#inquire" variant="primary" size="lg">
              Apply for Residency
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
