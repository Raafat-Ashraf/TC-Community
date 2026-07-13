import { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import RevealOnScroll from "@/components/RevealOnScroll";
import { departmentsHero, liveDepartments, ministryAreaCards } from "@/content/departments";

export const metadata: Metadata = {
  title: "Departments",
  description:
    "Explore The Community's departments and ministries, including The Recovery House and 100 Leaders.",
};

export default function DepartmentsPage() {
  return (
    <>
      <Hero headline={departmentsHero.headline} subhead={departmentsHero.subhead} size="md" />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <SectionHeading eyebrow="Live Today" title="Featured Departments" />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {liveDepartments.map((dept, i) => (
              <RevealOnScroll key={dept.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl ring-2 ring-gold-400">
                  <Card {...dept} />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Five Areas of Ministry"
              title="Our Broader Ministry Framework"
              subtitle="These areas frame the full scope of The Community's work as new departments come online."
            />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ministryAreaCards.map((area, i) => (
              <RevealOnScroll key={area.title} delay={i * 0.06}>
                <Card {...area} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
