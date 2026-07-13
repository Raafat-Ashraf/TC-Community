import { Metadata } from "next";
import Hero from "@/components/Hero";
import NewsGrid from "@/components/NewsGrid";
import { newsItems } from "@/content/news";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Stay up to date with news, events, workshops, conferences, and articles from The Community.",
};

export default function NewsPage() {
  return (
    <>
      <Hero
        headline="News & Events"
        subhead="Stay connected with what God is doing across The Community's departments and ministries."
        size="md"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <NewsGrid items={newsItems} />
        </div>
      </section>
    </>
  );
}
