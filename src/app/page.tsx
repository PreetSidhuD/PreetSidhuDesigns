import type { Metadata } from "next";
import Link from "next/link";
import {
  Palette,
  Globe,
  Megaphone,
  Printer,
  Search,
  Smartphone,
  Eye,
  TrendingUp,
  CheckCircle2,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import FAQSchema from "@/components/FAQSchema";
import Reveal from "@/components/Reveal";
import CycleWords from "@/components/CycleWords";
import StatCounter from "@/components/StatCounter";
import { TESTIMONIALS } from "@/lib/constants";

const CLIENT_LOGOS = [
  "clients-logo-01.png",
  "clients-logo-02.png",
  "clients-logo-04.png",
  "clients-logo-09.png",
  "clients-logo-12.png",
  "clients-logo-13.png",
  "clients-logo-15.png",
  "clients-logo-17.png",
  "clients-logo-18.png",
  "clients-logo-19.png",
  "clients-logo-20.png",
  "clients-logo-24.png",
  "untitled-13.png",
];

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
    icon: Printer,
    title: "Print & Signage",
    text: "Business cards, banners, vehicle decals, channel letter signs, and large installations — designed and produced to match your brand.",
    href: "/print-signage",
  },
];

const whoThisIsFor = [
  {
    title: "Tradespeople & Contractors",
    text: "You're booked through word of mouth and referrals, but your website, branding, and online presence don't yet reflect the quality of your work — or show up when people search for you.",
  },
  {
    title: "Restaurants, Cafes & Food Businesses",
    text: "Your food and service are the draw. Your branding, menus, signage, and social media should make people want to walk in before they've even tasted anything.",
  },
  {
    title: "Clinics, Salons & Wellness Businesses",
    text: "People decide whether to trust you before they ever book — based on your website, your branding, and how you show up online.",
  },
  {
    title: "Retail Shops & E-commerce",
    text: "Compete with bigger chains by looking just as polished and professional, with branding and a website that make your products the obvious choice.",
  },
  {
    title: "Real Estate & Property Businesses",
    text: "Stand out in a crowded market with branding, listings, and a web presence that signal credibility the moment someone finds you.",
  },
  {
    title: "Professional & Local Service Businesses",
    text: "Look as established and trustworthy as the advice and service you provide — both online and in person.",
  },
];

const steps = [
  {
    number: "01",
    title: "Free 15-Minute Visibility Review",
    text: "A look at your branding, website, signage, and online presence — followed by 3 practical improvements you can use immediately.",
  },
  {
    number: "02",
    title: "Custom Plan",
    text: "If it's a fit, you'll get a clear plan for exactly what your business needs — branding, website, marketing, or all three — with honest pricing and timelines.",
  },
  {
    number: "03",
    title: "Design & Build",
    text: "Your new brand, website, or campaigns get designed, built, and launched — with regular updates so you're never left wondering what's happening.",
  },
  {
    number: "04",
    title: "Grow & Get Found",
    text: "From there, it's about helping you show up on Google, attract the right customers, and keep improving results over time.",
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
      "PreetSidhuDesigns is based in Edmonton, Alberta, and works with small businesses across Canada. Everything — from branding to web design to marketing strategy — is delivered remotely with video calls, so location is never a barrier.",
  },
  {
    question: "What's included in the free Business Visibility Review?",
    answer:
      "In 15 minutes, your current branding, website, signage, and online presence (Google Business Profile, social media, etc.) get reviewed, and you'll walk away with 3 specific, practical improvements you can act on — whether or not you decide to move forward.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most small business websites take 2–4 weeks from kickoff to launch, depending on the number of pages and how quickly content and feedback come back. Larger projects with custom features may take longer — you'll get a clear timeline before anything starts.",
  },
  {
    question: "Can you help my business show up higher on Google?",
    answer:
      "Yes. Every website is optimized for local search from the ground up — including Google Business Profile setup, location-based keywords, fast loading speeds, and mobile optimization — so customers searching for your services nearby can actually find you.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[var(--color-border)]">
        {/* Aurora blobs */}
        <div
          className="animate-aurora-1 pointer-events-none absolute -top-48 right-[-5%] h-[36rem] w-[36rem] rounded-full opacity-35 blur-[80px]"
          style={{ background: "radial-gradient(circle, #ff4a17, #ff8a4c 40%, transparent 70%)" }}
        />
        <div
          className="animate-aurora-2 pointer-events-none absolute -bottom-32 left-[-10%] h-[40rem] w-[40rem] rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(circle, #d43a0f, #ff4a17 40%, transparent 70%)" }}
        />
        <div
          className="animate-aurora-3 pointer-events-none absolute top-1/3 left-1/3 h-[24rem] w-[24rem] rounded-full opacity-15 blur-[80px]"
          style={{ background: "radial-gradient(circle, #ff6b35, transparent 70%)" }}
        />
        {/* Dot grid */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[length:28px_28px] opacity-25" />
        {/* Shimmer line */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="animate-shimmer absolute top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[var(--color-primary)]/30 to-transparent"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <span className="animate-float-slow inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5" />
              Edmonton-Based &middot; Serving All of Canada
            </span>
            <h1 className="reveal is-visible mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Get a Free 15-Minute{" "}
              <span className="text-gradient animate-gradient">Business Visibility Review</span>
            </h1>
            <p
              className="reveal is-visible mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-muted)] sm:text-xl"
              style={{ animationDelay: "120ms" }}
            >
              I&rsquo;ll review your{" "}
              <CycleWords />{" "}
              and give you 3 practical improvements your business can act on — free, no obligation.
            </p>
            <div
              className="reveal is-visible mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              style={{ animationDelay: "240ms" }}
            >
              <div className="relative">
                <div className="animate-shimmer pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <CTAButton href="/booking">Book My Free Review</CTAButton>
              </div>
              <CTAButton href="/branding" variant="outline">
                Explore the Services
              </CTAButton>
            </div>
            <p
              className="reveal is-visible mt-6 text-sm text-[var(--color-text-muted)]"
              style={{ animationDelay: "360ms" }}
            >
              Branding &middot; Websites &middot; Social Media &middot; Print &amp; Signage
            </p>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <Section className="border-b border-[var(--color-border)] !py-10 overflow-hidden">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
          Brands We&rsquo;ve Built For
        </p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-x-12">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <div key={`${logo}-${i}`} className="flex h-14 w-28 flex-shrink-0 items-center justify-center">
                <Image
                  src={`/clients/${logo}`}
                  alt="Client logo"
                  width={112}
                  height={56}
                  className="max-h-12 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PAIN POINTS */}
      <Section className="border-b border-[var(--color-border)]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Is Your Business{" "}
            <span className="text-[var(--color-primary)]">Invisible</span> Online?
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Most small businesses don&rsquo;t lose customers because their
            product or service is bad — they lose them because people can&rsquo;t
            find them, trust them, or convert on their site.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {painPoints.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 80}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-transform hover:-translate-y-1 hover:border-[var(--color-primary)]"
            >
              <p.icon className="h-8 w-8 text-[var(--color-primary)]" />
              <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="border-b border-[var(--color-border)]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything Your Business Needs to{" "}
            <span className="text-gradient">Get Found &amp; Get Customers</span>
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            One agency for branding, websites, and marketing — so everything
            works together instead of looking like it was made by five
            different people.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_-10px_var(--color-primary)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/15 transition-transform group-hover:scale-110">
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
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="border-b border-[var(--color-border)] bg-[var(--color-bg-soft)]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Simple, straightforward, and built around getting you real
            results — not just deliverables.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 100}>
              <span className="text-5xl font-extrabold text-[var(--color-primary)]/30">
                {s.number}
              </span>
              <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHY US / LOCAL */}
      <Section className="border-b border-[var(--color-border)]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Edmonton Roots.{" "}
              <span className="text-gradient">Clients Across Canada.</span>
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              PreetSidhuDesigns is a one-person, hands-on design and marketing
              studio based in Edmonton, Alberta — working with tradespeople,
              restaurants, clinics, retail shops, and service businesses
              across Canada who are tired of being invisible online and ready
              to look like the go-to choice in their industry.
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
              <CTAButton href="/about">More About PreetSidhuDesigns</CTAButton>
            </div>
          </Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
            <div
              className="animate-aurora-2 pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full opacity-15 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
            />
            <div className="relative grid grid-cols-2 gap-8">
              <StatCounter end={50} suffix="+" label="Brands Built" sub="Across every industry" />
              <StatCounter end={100} suffix="+" label="Projects Delivered" sub="On time, on brand" />
              <StatCounter end={5} suffix="+" label="Years of Experience" sub="Design & marketing" />
              <StatCounter end={10} suffix="+" label="Provinces Served" sub="Coast to coast" />
            </div>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="border-b border-[var(--color-border)] bg-[var(--color-bg-soft)]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            What Clients Say
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 80}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex gap-0.5 text-[var(--color-primary)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-bold">{t.name}</p>
              <p className="text-xs text-[var(--color-text-muted)]">{t.location}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-b border-[var(--color-border)]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <FAQAccordion items={faqItems} />
        <FAQSchema items={faqItems} />
      </Section>

      {/* FINAL CTA */}
      <Section>
        <Reveal className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-14 text-center sm:px-12">
          <div
            className="animate-blob pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
          />
          <div className="relative">
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
        </Reveal>
      </Section>
    </>
  );
}
