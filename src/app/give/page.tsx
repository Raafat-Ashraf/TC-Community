import { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Give",
  description: "Support the work of The Community, The Recovery House, and 100 Leaders.",
};

export default function GivePage() {
  return (
    <>
      <Hero
        headline="Support a Life Today"
        subhead="Your generosity fuels lasting transformation across every department of The Community."
        size="md"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-charcoal-700">
            TODO: This page is a placeholder. Real online giving is out of scope for this
            build — wire up a payment processor (e.g. Stripe, PayPal Giving Fund, or a
            regional giving platform) here once available.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" variant="primary" size="lg">
              Contact Us About Giving
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
