import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CTAButton from "@/components/CTAButton";
import { newsItems } from "@/content/news";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      images: item.image ? [item.image] : undefined,
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);

  if (!item) notFound();

  return (
    <article>
      <section className="bg-navy-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-300">
            {item.category}
          </span>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{item.title}</h1>
          <time className="mt-3 block text-cream-100/70" dateTime={item.date}>
            {new Date(item.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>
      </section>

      {item.image && (
        <div className="relative mx-auto -mt-10 h-64 max-w-4xl overflow-hidden rounded-2xl shadow-lg sm:h-96">
          <Image src={item.image} alt={item.title} fill sizes="100vw" className="object-cover" />
        </div>
      )}

      <section className="bg-white py-16 sm:py-24">
        <div className="prose-body mx-auto max-w-3xl px-6 text-charcoal-700">
          {item.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl px-6 text-center">
          <CTAButton href="/news" variant="outline">
            &larr; Back to News & Events
          </CTAButton>
        </div>
      </section>
    </article>
  );
}
