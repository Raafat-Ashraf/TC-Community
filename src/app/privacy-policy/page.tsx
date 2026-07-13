import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The Community Central Website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero headline="Privacy Policy" size="md" />
      <section className="bg-white py-16 sm:py-24">
        <div className="prose-body mx-auto max-w-3xl px-6 text-charcoal-700">
          <p>
            TODO: This is placeholder legal copy. Replace with a real privacy policy
            covering data collection (contact forms, newsletter signup, analytics),
            data usage, third-party services, and contact information for privacy
            inquiries before launch.
          </p>
        </div>
      </section>
    </>
  );
}
