import type { Metadata } from "next";
import {
  CheckCircle2,
  CreditCard,
  FileText,
  Image as ImageIcon,
  LayoutTemplate,
  CarFront,
  Lightbulb,
  Building2,
} from "lucide-react";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Print & Signage in Edmonton | Business Cards, Banners & Storefront Signs",
  description:
    "Print and signage for small businesses in Edmonton and across Canada — business cards, flyers, banners, vinyl decals, channel letter signs, lightboxes, and full storefront installations.",
  alternates: { canonical: "/print-signage" },
};

const products = [
  {
    icon: CreditCard,
    title: "Business Cards & Stationery",
    text: "Professionally designed and printed business cards, letterheads, and stationery that match your brand identity.",
  },
  {
    icon: FileText,
    title: "Flyers, Brochures & Posters",
    text: "Eye-catching print materials for promotions, events, and campaigns — designed and produced ready to hand out or display.",
  },
  {
    icon: ImageIcon,
    title: "Banners",
    text: "Indoor and outdoor banners for sales, events, grand openings, and ongoing promotions — built to hold up and stand out.",
  },
  {
    icon: LayoutTemplate,
    title: "Vinyl Decals & Window Graphics",
    text: "Custom decals and window graphics for storefronts, offices, and retail spaces that turn blank surfaces into branding.",
  },
  {
    icon: CarFront,
    title: "Vehicle Graphics & Wraps",
    text: "Vehicle decals and full or partial wraps that turn your car, van, or fleet into moving advertising for your business.",
  },
  {
    icon: Lightbulb,
    title: "Channel Letter Signs & Lightboxes",
    text: "Illuminated channel letters and lightbox signage for storefronts — designed to make your business impossible to miss, day or night.",
  },
  {
    icon: Building2,
    title: "Large & Complex Installations",
    text: "Big-format signage and multi-piece installations for storefronts, buildings, and commercial spaces — managed from design through to installation.",
  },
];

const faqItems = [
  {
    question: "Can you handle both the design and the printing?",
    answer:
      "Yes. Every print or signage product is designed in-house and produced to match your brand, so you get one consistent look across business cards, banners, vehicles, and storefront signage — without having to coordinate multiple vendors yourself.",
  },
  {
    question: "Do you only do small print jobs, or signage too?",
    answer:
      "Both. Small runs of business cards and flyers are handled the same way as large channel letter signs, lightboxes, and full storefront installations — the process stays the same: design, approve, produce, install.",
  },
  {
    question: "How long does a print or signage project take?",
    answer:
      "Smaller print items like business cards and flyers are typically ready within a week of final approval. Larger signage and installation projects — like channel letters or storefront wraps — usually take 2–4 weeks depending on complexity and production time.",
  },
  {
    question: "I'm not in Edmonton. Can you still help with signage?",
    answer:
      "Yes — design work is handled remotely for businesses across Canada, and printing and installation are coordinated locally wherever your business is located.",
  },
];

export default function PrintSignagePage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
            Print &amp; Signage
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            From Business Cards to{" "}
            <span className="text-gradient">Storefront Signs</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-text-muted)]">
            Print and signage designed and produced to match your brand —
            for businesses in Edmonton and across Canada. One place for
            everything from business cards to full storefront installations.
          </p>
          <div className="mt-8">
            <CTAButton href="/booking">Get My Free Visibility Review</CTAButton>
          </div>
        </div>
      </section>

      <Section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            What&rsquo;s Available
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
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
              One Brand, Everywhere It Shows Up
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Your branding shouldn&rsquo;t look different on your website
              than it does on your storefront, your vehicle, or your business
              card. Every print and signage piece is designed against your
              brand guidelines, so customers see the same colors, fonts, and
              logo wherever they encounter your business.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Consistent branding across digital and physical materials",
                "Print-ready files and production handled for you",
                "Installation coordinated for signage and vehicle graphics",
                "One point of contact from design to delivery",
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
              <li>New businesses needing a full set of brand materials</li>
              <li>Storefronts and offices ready for new signage</li>
              <li>Fleets and work vehicles ready for branding</li>
              <li>Businesses planning a launch, sale, or event</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Print &amp; Signage FAQs
          </h2>
        </div>
        <FAQAccordion items={faqItems} />
        <FAQSchema items={faqItems} />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to Get Your Brand Out There?
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
