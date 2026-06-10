import type { Metadata } from "next";
import Link from "next/link";
import {
  Palette,
  Globe,
  Megaphone,
  Target,
  Search,
  Smartphone,
  Eye,
  TrendingUp,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Branding, Web Design & Marketing Agency in Edmonton | Free Visibility Review",
  description:
    "PreetSidhuDesigns helps small businesses in Edmonton and across Canada with branding, websites, and marketing. Get a free 15-minute Business Visibility Review today.",
  alternates: { canonical: "/" },
};

const painPoints = [
  {
    icon: Search,
    title: "People can't find you on Google",
    text: "Your competitors show up first when someone searches for your service nearby — and you lose the customer before they even call.",
  },
  {
    icon: Eye,
    title: "Your branding looks outdated or DIY",
    text: "An inconsistent logo, colors, and signage make people question whether your business is trustworthy — even if your work is great.",
  },
  {
    icon: Smartphone,
    title: "Your website doesn't convert",
    text: "Visitors land on your site and leave without booking or buying because it's slow, confusing, or doesn't work on mobile.",
  },
  {
    icon: TrendingUp,
    title: "Your social media feels random",
    text: "You're posting, but it isn't bringing in leads because there's no strategy behind what you're sharing.",
  },
];

const services = [
  {
    icon: Palette,
    title: "Branding & Logo Design",
    text: "A bold, memorable identity — logo, colors, and brand guidelines — that makes your business look established and trustworthy.",
    href: "/branding",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    text: "Fast, mobile-friendly, SEO-optimized websites built to turn visitors into booked calls and paying customers.",
    href: "/web-design",
  },
  {
    icon: Megaphone,
    title: "Social Media & Digital Marketing",
    text: "Content, ads, and a posting strategy that builds a real following and brings consistent leads to your business.",
    href: "/marketing",
  },
  {
    icon: Target,
    title: "Brand & Marketing Strategy",
    text: "A clear, practical plan that ties your branding, website, and marketing together so every dollar works harder.",
    href: "/marketing",
  },
];

const steps = [
  {
    number: "01",
    title: "Free 15-Minute Visibility Review",
    text: "We look at your branding, website, signage, and online presence — then hand you 3 practical improvements you can use immediately.",
  },
  {
    number: "02",
    title: "Custom Plan",
    text: "If it's a fit, we map out exactly what your business needs — branding, website, marketing, or all three — with clear pricing and timelines.",
  },
  {
    number: "03",
    title: "We Build & Launch",
    text: "Our team designs, builds, and launches your new brand, website, or campaigns — keeping you informed at every step.",
  },
  {
    number: "04",
    title: "Grow & Get Found",
    text: "We help you show up on Google, attract the right customers, and keep improving your results over time.",
  },
];

const faqItems = [
  {
    question: "How much does branding and web design cost in Edmonton?",
    answer:
      "Pricing depends on the scope of your project. A simple logo and brand refresh starts at a different price point than a full website build with SEO and ongoing marketing. The free 15-minute Business Visibility Review gives you a clear picture of what your business needs and an honest estimate — no pressure, no obligation.",
  },
  {
    question: "Do you only work with businesses in Edmonton?",
    answer:
      "We're based in Edmonton, Alberta, but we work with small businesses across Canada. Everything — from branding to web design to marketing strategy — is delivered remotely with video calls, so location is never a barrier.",
  },
  {
    question: "What's included in the free Business Visibility Review?",
    answer:
      "In 15 minutes, we'll review your current branding, website, signage, and online presence (Google Business Profile, social media, etc.) and give you 3 specific, practical improvements you can act on — whether or not you decide to work with us.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most small business websites take 2–4 weeks from kickoff to launch, depending on the number of pages and how quickly we receive content and feedback. Larger projects with custom features may take longer — we'll give you a clear timeline before we start.",
  },
  {
    question: "Can you help my business show up higher on Google?",
    answer:
      "Yes. Every website we build is optimized for local search from the ground up — including Google Business Profile setup, location-based keywords, fast loading speeds, and mobile optimization — so customers searching for your services nearby can actually find you.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[var(--color-border)]">
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
              <MapPin className="h-3.5 w-3.5" />
              Edmonton-Based &middot; Serving All of Canada
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Get a Free 15-Minute{" "}
              <span className="text-gradient">Business Visibility Review</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-muted)] sm:text-xl">
              I&rsquo;ll review your branding, website, signage, and online
              presence and give you 3 practical improvements — free, no
              obligation.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href="/booking">Book My Free Review</CTAButton>
              <CTAButton href="/branding" variant="outline">
                See Our Services
              </CTAButton>
            </div>
            <p className="mt-6 text-sm text-[var(--color-text-muted)]">
              Branding &middot; Websites &middot; Social Media &middot; Marketing Strategy
            </p>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <Section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Is Your Business{" "}
            <span className="text-[var(--color-primary)]">Invisible</span> Online?
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Most small businesses don&rsquo;t lose customers because their
            product or service is bad — they lose them because people can&rsquo;t
            find them, trust them, or convert on their site.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {painPoints.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
            >
              <p.icon className="h-8 w-8 text-[var(--color-primary)]" />
              <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything Your Business Needs to{" "}
            <span className="text-gradient">Get Found &amp; Get Customers</span>
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            One agency for branding, websites, and marketing — so everything
            works together instead of looking like it was made by five
            different people.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-colors hover:border-[var(--color-primary)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/15">
                <s.icon className="h-6 w-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="mt-5 text-lg font-bold group-hover:text-[var(--color-primary)]">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-[var(--color-text-muted)]">{s.text}</p>
              <span className="mt-4 text-sm font-bold text-[var(--color-primary)]">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="border-b border-[var(--color-border)] bg-[var(--color-bg-soft)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Simple, straightforward, and built around getting you real
            results — not just deliverables.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.number}>
              <span className="text-5xl font-extrabold text-[var(--color-primary)]/30">
                {s.number}
              </span>
              <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY US / LOCAL */}
      <Section className="border-b border-[var(--color-border)]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Edmonton Roots.{" "}
              <span className="text-gradient">Clients Across Canada.</span>
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              We&rsquo;re a small, hands-on design and marketing studio based
              in Edmonton, Alberta. We work with tradespeople, restaurants,
              clinics, retail shops, and service businesses across Canada who
              are tired of being invisible online and ready to look like the
              go-to choice in their industry.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Real conversations with a real person — not a chatbot or call center",
                "Designs built around your local market and ideal customer",
                "Websites optimized to rank for searches like “near me” in your city",
                "Honest pricing and timelines — no hidden fees or surprise upsells",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]" />
                  <span className="text-[var(--color-text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton href="/about">More About Us</CTAButton>
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
            <h3 className="text-xl font-bold">Who We Help</h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                "Tradespeople & Contractors",
                "Restaurants & Cafes",
                "Clinics & Wellness",
                "Retail & E-commerce",
                "Real Estate & Property",
                "Professional Services",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="border-b border-[var(--color-border)] bg-[var(--color-bg-soft)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            What Business Owners Say
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[
            {
              quote:
                "The free review alone gave us more useful feedback than the last agency we paid for. Our new site has already brought in new customers from Google.",
              name: "Local Business Owner",
              location: "Edmonton, AB",
            },
            {
              quote:
                "Our branding finally feels consistent across our signage, website, and social media. People take us more seriously now.",
              name: "Service Business Owner",
              location: "Calgary, AB",
            },
            {
              quote:
                "We went from invisible on Google to showing up on the first page for our main service. The whole process was simple and clearly explained.",
              name: "Small Business Owner",
              location: "Toronto, ON",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
            >
              <p className="text-sm text-[var(--color-text-muted)]">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-bold">{t.name}</p>
              <p className="text-xs text-[var(--color-text-muted)]">{t.location}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <FAQAccordion items={faqItems} />
        <FAQSchema items={faqItems} />
      </Section>

      {/* FINAL CTA */}
      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to Stop Being the{" "}
            <span className="text-gradient">Best-Kept Secret</span> in Your Industry?
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Get your free 15-minute Business Visibility Review today — 3
            practical improvements, zero obligation.
          </p>
          <div className="mt-8">
            <CTAButton href="/booking">Book My Free Review</CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
