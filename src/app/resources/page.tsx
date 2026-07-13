import { Metadata } from "next";
import Hero from "@/components/Hero";
import ResourceGrid from "@/components/ResourceGrid";
import { resourceItems } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, PDFs, articles, videos, and forms from The Community, The Recovery House, and 100 Leaders.",
};

export default function ResourcesPage() {
  return (
    <>
      <Hero
        headline="Resources"
        subhead="Guides, articles, videos, and forms to support your journey with The Community."
        size="md"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ResourceGrid items={resourceItems} />
        </div>
      </section>
    </>
  );
}
