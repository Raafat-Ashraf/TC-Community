import { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTAButton from "@/components/CTAButton";
import {
  aboutHero,
  ourStory,
  ourVision,
  ourMission,
  coreValues,
  leadershipTeam,
  staffTeam,
  partners,
} from "@/content/about";
import { heroImages } from "@/content/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story, vision, and mission behind The Community (TC) and the Isaiah 19 Movement across Egypt.",
};

function initials(name: string) {
  return name
    .replace("TODO: ", "")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      <Hero
        headline={aboutHero.headline}
        subhead={aboutHero.subhead}
        size="md"
        imageSrc={heroImages.about.src}
        imageAlt={heroImages.about.alt}
      />

      {/* Our Story */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <RevealOnScroll>
            <SectionHeading title={ourStory.heading} align="left" />
            <div className="prose-body mt-6 text-charcoal-700">
              {ourStory.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <RevealOnScroll>
            <div className="h-full rounded-2xl bg-navy-950 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">
                {ourVision.heading}
              </p>
              <p className="mt-4 text-2xl font-bold">{ourVision.statement}</p>
              <p className="mt-4 text-cream-100/90">{ourVision.description}</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="h-full rounded-2xl border border-cream-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
                {ourMission.heading}
              </p>
              <p className="mt-4 text-2xl font-bold text-navy-950">{ourMission.statement}</p>
              <p className="mt-4 text-charcoal-700">{ourMission.description}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="What We Believe" title="Core Values" />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <RevealOnScroll key={value.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-cream-200 bg-cream-50 p-6">
                  <h3 className="text-lg font-bold text-navy-950">{value.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-700">{value.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Meet the Team" title="Leadership" />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((member, i) => (
              <RevealOnScroll key={member.name + i} delay={i * 0.08}>
                <div className="rounded-2xl border border-cream-200 bg-white p-6 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-navy-900 text-lg font-bold text-gold-300">
                    {initials(member.name)}
                  </div>
                  <h3 className="mt-4 font-bold text-navy-950">{member.name}</h3>
                  <p className="text-sm font-semibold text-gold-600">{member.title}</p>
                  <p className="mt-2 text-sm text-charcoal-700">{member.bio}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Our People" title="Team" />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {staffTeam.map((member, i) => (
              <RevealOnScroll key={member.name + i} delay={i * 0.06}>
                <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-base font-bold text-gold-600">
                    {initials(member.name)}
                  </div>
                  <h3 className="mt-3 font-semibold text-navy-950">{member.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-700/70">
                    {member.title}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Working Together" title="Partners" />
          </RevealOnScroll>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-20 items-center justify-center rounded-xl border border-dashed border-cream-200 bg-white px-3 text-center text-xs font-medium text-charcoal-700/60"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to see how you can get involved?
          </h2>
          <div className="mt-6">
            <CTAButton href="/contact" variant="primary" size="lg">
              Get Involved
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
