import type { Metadata } from "next";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { CheckCircle2 } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

const PAGE_TITLE = "About | Edmonton Branding & Web Design Studio";
const PAGE_DESCRIPTION =
  "PreetSidhuDesigns is an independent Edmonton-based branding, web design, and marketing studio helping small businesses across Canada look credible and get found online.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/logo.png`],
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: "About", href: "/about" }]} />
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            One Person.{" "}
            <span className="text-gradient">One Focus: Your Business.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-text-muted)]">
            PreetSidhuDesigns is an independent branding, web design, and
            marketing studio based in Edmonton — built for small businesses
            across Canada who want to look as good as they perform.
          </p>
        </div>
      </section>

      <Section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl space-y-6 text-[var(--color-text-muted)]">
          <p>
            Too many small businesses do great work but get overlooked —
            because their branding looks dated, their website is hard to find
            on Google, or their marketing feels scattered. That gap between
            &ldquo;great business&rdquo; and &ldquo;looks great&rdquo; is what
            PreetSidhuDesigns closes.
          </p>
          <p>
            This is a one-person studio, on purpose. There&rsquo;s no account
            manager, no hand-offs between departments, and no junior designer
            learning on your project. Every brand, website, and marketing plan
            is worked on directly — which means clear communication, fewer
            delays, and pricing without a big-agency markup.
          </p>
          <p>
            Every project starts the same way: a free 15-minute Business
            Visibility Review, taking an honest look at how a business
            currently shows up — branding, website, signage, and online
            presence — and pointing out 3 practical improvements, whether or
            not that turns into a project.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            How It Works
          </h2>
        </div>
        <ul className="mx-auto mt-10 max-w-2xl space-y-4">
          {[
            "Honest, plain-language advice — even if that means hearing what you don't need",
            "Clear pricing and timelines before any work begins",
            "One point of contact from start to finish, every time",
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
