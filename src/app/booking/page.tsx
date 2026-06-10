import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Section from "@/components/Section";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book Your Free 15-Minute Business Visibility Review",
  description:
    "Book a free 15-minute Business Visibility Review with PreetSidhuDesigns. We'll review your branding, website, and online presence and give you 3 practical improvements.",
  alternates: { canonical: "/booking" },
};

const checklist = [
  "A quick look at your branding, website & signage",
  "How you currently show up on Google",
  "3 practical improvements you can act on right away",
  "No pressure, no obligation — just useful feedback",
];

export default function BookingPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Get a Free 15-Minute{" "}
            <span className="text-gradient">Business Visibility Review</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-text-muted)]">
            I&rsquo;ll review your branding, website, signage, and online
            presence and give you 3 practical improvements — for free.
          </p>
          <ul className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]" />
                <span className="text-[var(--color-text-muted)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Quick form */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 sm:p-8">
            <h2 className="text-xl font-bold">Tell Us About Your Business</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Takes less than a minute. We&rsquo;ll use this to prep for your
              free review.
            </p>
            <form
              action={BUSINESS.formEndpoint}
              method="POST"
              className="mt-6 space-y-4"
            >
              <div>
                <label htmlFor="name" className="text-sm font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-semibold">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="business" className="text-sm font-semibold">
                  Business Name &amp; Website (if you have one)
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              <div>
                <label htmlFor="help" className="text-sm font-semibold">
                  What do you need the most help with?
                </label>
                <select
                  id="help"
                  name="help"
                  className="mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                >
                  <option>Branding / Logo</option>
                  <option>Website</option>
                  <option>Social Media &amp; Marketing</option>
                  <option>Not sure — review everything</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] hover:bg-[var(--color-primary-dark)]"
              >
                Send &amp; Pick a Time
              </button>
              <p className="text-center text-xs text-[var(--color-text-muted)]">
                After submitting, choose a time that works for you below.
              </p>
            </form>
          </div>

          {/* Calendly */}
          <div>
            <h2 className="mb-4 text-xl font-bold">Pick a Time</h2>
            <CalendlyEmbed />
          </div>
        </div>
      </Section>
    </>
  );
}
