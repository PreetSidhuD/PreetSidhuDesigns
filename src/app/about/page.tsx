import type { Metadata } from "next";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Edmonton Branding & Web Design Studio",
  description:
    "PreetSidhuDesigns is an Edmonton-based branding, web design, and marketing studio helping small businesses across Canada look credible and get found online.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            A Small Studio, Built for{" "}
            <span className="text-gradient">Small Businesses</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-text-muted)]">
            PreetSidhuDesigns is an Edmonton-based branding, web design, and
            marketing studio. We work with small businesses across Canada
            who want to look as good as they perform.
          </p>
        </div>
      </section>

      <Section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl space-y-6 text-[var(--color-text-muted)]">
          <p>
            Too many small businesses do great work but get overlooked —
            because their branding looks dated, their website is hard to
            find on Google, or their marketing feels scattered. That gap
            between &ldquo;great business&rdquo; and &ldquo;looks
            great&rdquo; is exactly what we close.
          </p>
          <p>
            We started PreetSidhuDesigns to give small business owners — in
            Edmonton and across Canada — access to the kind of branding,
            websites, and marketing strategy that big companies pay agencies
            tens of thousands of dollars for, without the bloated retainers
            or confusing jargon.
          </p>
          <p>
            Every project starts the same way: a free 15-minute Business
            Visibility Review, where we look honestly at how your business
            currently shows up — branding, website, signage, and online
            presence — and give you 3 practical improvements, whether or not
            you ever hire us.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            How We Work
          </h2>
        </div>
        <ul className="mx-auto mt-10 max-w-2xl space-y-4">
          {[
            "Honest, plain-language advice — even if that means telling you what you don't need",
            "Clear pricing and timelines before any work begins",
            "One point of contact, so nothing gets lost between departments",
            "Designs and strategy built around your real customers, not trends",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]" />
              <span className="text-[var(--color-text-muted)]">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <CTAButton href="/booking">Book My Free Visibility Review</CTAButton>
        </div>
      </Section>
    </>
  );
}
