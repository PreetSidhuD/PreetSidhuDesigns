import type { Metadata } from "next";
import { CheckCircle2, Palette, Award, Layers, FileText } from "lucide-react";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Branding Agency in Edmonton | Logo & Brand Identity Design",
  description:
    "Professional branding and logo design for small businesses in Edmonton and across Canada. Stand out, build trust, and look like the go-to choice in your industry.",
  alternates: { canonical: "/branding" },
};

const included = [
  {
    icon: Palette,
    title: "Logo Design",
    text: "A custom, memorable logo that works everywhere — your website, signage, vehicles, packaging, and social media.",
  },
  {
    icon: Layers,
    title: "Brand Colors & Fonts",
    text: "A consistent color palette and typography system so your business looks the same — and looks professional — everywhere it appears.",
  },
  {
    icon: FileText,
    title: "Brand Guidelines",
    text: "A simple guide your whole team (and any future designer or printer) can follow, so your branding never goes off-track.",
  },
  {
    icon: Award,
    title: "Signage & Print-Ready Files",
    text: "Print-ready files for signage, business cards, vehicle wraps, and packaging — done right the first time.",
  },
];

const faqItems = [
  {
    question: "Why does branding matter for a small business?",
    answer:
      "Your branding is often the first thing a potential customer sees — before they read a review, visit your store, or call you. Strong, consistent branding builds instant trust and makes your business look established, even if you're just starting out. Weak or inconsistent branding does the opposite: it makes people hesitate.",
  },
  {
    question: "I already have a logo. Do I need a full rebrand?",
    answer:
      "Not always. In your free Business Visibility Review, your current branding gets an honest look — to figure out whether a small refresh (colors, fonts, consistency) is enough, or whether a full rebrand would serve you better.",
  },
  {
    question: "How long does a branding project take?",
    answer:
      "A logo and brand identity package typically takes 1–3 weeks, depending on the number of revisions and how quickly feedback comes back.",
  },
  {
    question: "Do you design signage and print materials too?",
    answer:
      "Yes — business cards, vehicle decals, storefront signage, packaging, and other print materials, all matched to your brand identity and ready to send to a printer.",
  },
];

export default function BrandingPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
            Branding &amp; Logo Design
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Branding That Makes Your Business{" "}
            <span className="text-gradient">Look Like the Obvious Choice</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-text-muted)]">
            A custom logo, color palette, and brand guidelines built to make
            your Edmonton or Canada-based business instantly recognizable —
            and instantly trusted.
          </p>
          <div className="mt-8">
            <CTAButton href="/booking">Get My Free Visibility Review</CTAButton>
          </div>
        </div>
      </section>

      <Section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            What&rsquo;s Included
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {included.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/15">
                <item.icon className="h-6 w-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-b border-[var(--color-border)] bg-[var(--color-bg-soft)]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why Branding Is About More Than a Pretty Logo
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              When your branding is inconsistent — different fonts on your
              sign, your truck, and your website — it tells customers your
              business isn&rsquo;t put-together. Strong branding does the
              opposite: it builds instant credibility, helps people remember
              you, and makes your marketing more effective because everything
              looks like it belongs together.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Stand out from competitors using generic templates",
                "Build instant trust with new customers",
                "Make your marketing and ads more recognizable",
                "Use one consistent identity everywhere — online and offline",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]" />
                  <span className="text-[var(--color-text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
            <h3 className="text-xl font-bold">Perfect For:</h3>
            <ul className="mt-6 space-y-4 text-sm text-[var(--color-text-muted)]">
              <li>New businesses launching for the first time</li>
              <li>Businesses that have outgrown a DIY logo</li>
              <li>Companies rebranding after a name change or pivot</li>
              <li>
                Multi-location businesses needing consistent branding across
                Canada
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Branding FAQs
          </h2>
        </div>
        <FAQAccordion items={faqItems} />
        <FAQSchema items={faqItems} />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready for a Brand That Matches Your Ambition?
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Start with a free 15-minute Business Visibility Review — no
            obligation.
          </p>
          <div className="mt-8">
            <CTAButton href="/booking">Book My Free Review</CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
