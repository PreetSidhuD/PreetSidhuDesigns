import type { Metadata } from "next";
import { CheckCircle2, Globe, Zap, Smartphone, Search } from "lucide-react";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

const PAGE_TITLE = "Website Design Agency in Edmonton | SEO-Optimized Websites";
const PAGE_DESCRIPTION =
  "Custom, mobile-friendly, SEO-optimized website design for small businesses in Edmonton and across Canada. Built to rank on Google and turn visitors into customers.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/web-design" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/web-design`,
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

const included = [
  {
    icon: Globe,
    title: "Custom Website Design",
    text: "A modern, on-brand website built around your business and your customers — not a generic template.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First & Fast",
    text: "Most of your visitors are on their phones. Your site is built to look great and load quickly on any device.",
  },
  {
    icon: Search,
    title: "Built-In SEO Foundations",
    text: "Proper page titles, descriptions, headings, and structured data so Google can actually understand and index your site.",
  },
  {
    icon: Zap,
    title: "Booking & Contact Tools",
    text: "Booking forms, click-to-call buttons, and clear calls to action that turn visitors into leads and customers.",
  },
];

const faqItems = [
  {
    question: "Why isn't my current website showing up on Google?",
    answer:
      "There are a few common reasons: the site was never properly indexed, it's missing basic SEO elements (titles, descriptions, headings), it loads too slowly, it isn't mobile-friendly, or it lacks the local information (city, services, Google Business Profile) that Google uses to match your business to local searches. This gets diagnosed for free in your Business Visibility Review.",
  },
  {
    question: "Will my new website actually rank on Google?",
    answer:
      "Every website starts with the technical SEO foundations Google looks for: fast load times, mobile optimization, proper page structure, sitemaps, and local business schema. Combined with the right content and keywords for your city and services, this gives you a real shot at ranking — though SEO is ongoing, not a one-time switch.",
  },
  {
    question: "Can I update the website myself after it's built?",
    answer:
      "Yes. Sites are built so you (or anyone on your team) can update text, images, and basic content without needing to know how to code.",
  },
  {
    question: "Do you build e-commerce or booking websites?",
    answer:
      "Yes — from simple brochure-style sites to e-commerce stores and websites with built-in booking and scheduling, the build is matched to your business and budget.",
  },
];

export default function WebDesignPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: "Web Design", href: "/web-design" }]} />
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
            Website Design &amp; Development
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Websites Built to{" "}
            <span className="text-gradient">Get Found &amp; Get Booked</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-text-muted)]">
            Fast, mobile-friendly, SEO-optimized websites for small
            businesses in Edmonton and across Canada — designed to turn
            visitors into customers.
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
              Why &ldquo;Google Can&rsquo;t Find My Website&rdquo; Happens
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              A website that looks fine to you can still be invisible to
              Google. The most common culprits: no Google Business Profile
              connected to your site, missing or duplicate page titles, slow
              load times on mobile, no location-based content, and a site
              that was never submitted for indexing in the first place.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Your site gets submitted to Google Search Console for indexing",
                "Your Google Business Profile gets connected and optimized",
                "Page titles & descriptions are written to target your city + service",
                "Your site is built and tested to load fast on mobile devices",
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
              <li>Businesses with no website, or one that looks outdated</li>
              <li>
                Businesses that aren&rsquo;t showing up for &ldquo;near
                me&rdquo; searches
              </li>
              <li>Sites that don&rsquo;t work properly on mobile</li>
              <li>Businesses ready to take bookings or sales online</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Website FAQs
          </h2>
        </div>
        <FAQAccordion items={faqItems} />
        <FAQSchema items={faqItems} />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let&rsquo;s Find Out Why You&rsquo;re Not Showing Up
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Get a free 15-minute Business Visibility Review and 3 practical
            improvements — no obligation.
          </p>
          <div className="mt-8">
            <CTAButton href="/booking">Book My Free Review</CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
