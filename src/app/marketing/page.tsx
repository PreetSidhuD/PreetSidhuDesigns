import type { Metadata } from "next";
import { CheckCircle2, Megaphone, Target, BarChart3, Calendar } from "lucide-react";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Social Media & Marketing Agency in Edmonton | Marketing Strategy",
  description:
    "Social media management, content, and marketing strategy for small businesses in Edmonton and across Canada. Build a following and bring in consistent leads.",
  alternates: { canonical: "/marketing" },
};

const included = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    text: "Consistent, on-brand content for Instagram, Facebook, and other platforms — planned, designed, and posted for you.",
  },
  {
    icon: Target,
    title: "Content Creation & Visual Design",
    text: "Photos, graphics, and visuals built around your brand — for social media, your website, and marketing materials.",
  },
  {
    icon: BarChart3,
    title: "Promotional & Advertising Design",
    text: "Targeted ad creative and promotional graphics built to reach the right customers in your city — and across Canada if you're ready to scale.",
  },
  {
    icon: Calendar,
    title: "Digital Marketing Support",
    text: "Ongoing support for your content calendar, online presence, and campaigns — so you always know what's being posted, when, and why.",
  },
];

const faqItems = [
  {
    question: "How often should my business post on social media?",
    answer:
      "Consistency matters more than frequency. For most small businesses, 3–5 posts per week of useful, relevant content outperforms daily posting that's random or off-brand. A content calendar gets built around what your audience actually responds to.",
  },
  {
    question: "Will social media marketing help my Google ranking?",
    answer:
      "Social media doesn't directly boost your Google ranking, but it builds brand awareness, drives traffic to your website, and creates signals (reviews, engagement, local mentions) that support your overall online presence — which works hand-in-hand with SEO.",
  },
  {
    question: "I don't have time to manage social media. Can you handle everything?",
    answer:
      "Yes. Social media can be taken off your plate completely — from content creation and design to scheduling and posting — so you can focus on running your business.",
  },
  {
    question: "Do you run paid ads (Google Ads, Facebook Ads)?",
    answer:
      "Yes — targeted ad campaigns get set up and managed around your budget and goals, whether that's local awareness in Edmonton or reaching customers across Canada.",
  },
];

export default function MarketingPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
            Marketing &amp; Social Media
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Marketing That Brings In{" "}
            <span className="text-gradient">Real Customers</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-text-muted)]">
            Social media management, content, and marketing strategy for
            small businesses in Edmonton and across Canada — built around
            your goals, not vanity metrics.
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
              Why &ldquo;Just Posting More&rdquo; Doesn&rsquo;t Work
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Posting without a strategy feels productive but rarely brings
              in customers. The businesses that grow have a plan: they know
              who they&rsquo;re talking to, what makes them different, and
              how social media, their website, and their branding all point
              toward the same goal — getting people to take action.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Content built around what your ideal customer actually searches for",
                "Consistent branding across every post and platform",
                "Clear calls to action that drive traffic to your website",
                "Monthly reporting so you know what's working",
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
              <li>Businesses with little to no time to manage social media</li>
              <li>
                Businesses that post regularly but see little engagement or
                leads
              </li>
              <li>Companies launching a new product, service, or location</li>
              <li>Businesses ready to invest in paid advertising</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Marketing FAQs
          </h2>
        </div>
        <FAQAccordion items={faqItems} />
        <FAQSchema items={faqItems} />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let&rsquo;s Build a Marketing Plan That Works
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
