import { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQAccordion from "@/components/FAQAccordion";
import LeadersGetInvolvedForm from "@/components/LeadersGetInvolvedForm";
import {
  leadersHero,
  programOverview,
  identifySection,
  equipSection,
  supportSection,
  holdAccountableSection,
  leaderTestimonials,
  coursesSection,
  eventsSection,
  registrationSection,
  successStoriesSection,
  leadersFAQs,
  getInvolvedIntro,
} from "@/content/leaders";

export const metadata: Metadata = {
  title: "100 Leaders",
  description:
    "100 Leaders identifies, equips, supports, and holds accountable Christian leaders across the Middle East.",
};

export default function LeadersPage() {
  return (
    <>
      <Hero
        eyebrow="100 Leaders — A Ministry of The Community"
        headline={leadersHero.headline}
        subhead={leadersHero.subhead}
        primaryCta={leadersHero.primaryCta}
        secondaryCta={leadersHero.secondaryCta}
      />

      {/* Program Overview */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <RevealOnScroll>
            <SectionHeading eyebrow={programOverview.heading} title="Identify. Equip. Support. Hold Accountable." />
            <p className="mt-6 text-charcoal-700">{programOverview.body}</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Identify */}
      <section id="leaders" className="bg-cream-100 py-16 sm:py-24 scroll-mt-32">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Step One" title={identifySection.heading} />
            <p className="mx-auto mt-4 max-w-2xl text-center text-charcoal-700">
              {identifySection.intro}
            </p>
          </RevealOnScroll>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {identifySection.criteria.map((item, i) => (
              <RevealOnScroll key={item} delay={i * 0.06}>
                <div className="flex items-start gap-3 rounded-xl border border-cream-200 bg-white p-5">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                  <p className="text-charcoal-700">{item}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Equip */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Step Two" title={equipSection.heading} />
            <p className="mx-auto mt-4 max-w-2xl text-center text-charcoal-700">
              {equipSection.intro}
            </p>
          </RevealOnScroll>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {equipSection.pillars.map((pillar, i) => (
              <RevealOnScroll key={pillar.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-cream-200 bg-cream-50 p-6">
                  <h3 className="text-lg font-bold text-navy-950">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-700">{pillar.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="bg-navy-950 py-16 text-center text-white sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Step Three" title={supportSection.heading} light />
            <p className="mt-4 text-cream-100/90">{supportSection.body}</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Hold Accountable */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Step Four" title={holdAccountableSection.heading} />
            <p className="mx-auto mt-4 max-w-2xl text-center text-charcoal-700">
              {holdAccountableSection.intro}
            </p>
          </RevealOnScroll>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {holdAccountableSection.cards.map((card, i) => (
              <RevealOnScroll key={card.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-cream-200 bg-white p-6 text-center">
                  <h3 className="text-lg font-bold text-navy-950">{card.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-700">{card.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="From Our Leaders" title="Voices From the Field" />
            <div className="mt-12">
              <TestimonialSlider testimonials={leaderTestimonials} />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Courses / Events / Registration / Success Stories placeholders */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="More From 100 Leaders" title="Program Details" />
          </RevealOnScroll>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[coursesSection, eventsSection, registrationSection, successStoriesSection].map(
              (section, i) => (
                <RevealOnScroll key={section.heading} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-dashed border-cream-200 bg-white p-6">
                    <span className="inline-block rounded-full bg-cream-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-charcoal-700">
                      Coming Soon
                    </span>
                    <h3 className="mt-3 font-bold text-navy-950">{section.heading}</h3>
                    <p className="mt-2 text-sm text-charcoal-700">{section.body}</p>
                  </div>
                </RevealOnScroll>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" />
          </RevealOnScroll>
          <div className="mt-12">
            <FAQAccordion items={leadersFAQs} />
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="get-involved" className="bg-navy-950 py-16 text-white sm:py-24 scroll-mt-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading eyebrow="Partner With Us" title="Get Involved" align="left" light />
            <p className="mt-4 text-cream-100/90">{getInvolvedIntro}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="rounded-2xl bg-white p-8">
              <LeadersGetInvolvedForm />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
