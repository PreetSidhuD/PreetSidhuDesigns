import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-soft)]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-[var(--color-text-muted)]">
              Branding, web design, and marketing strategy for small
              businesses in Edmonton and across Canada.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href={BUSINESS.social.instagram}
                aria-label="Instagram"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
              >
                <InstagramIcon />
              </a>
              <a
                href={BUSINESS.social.linkedin}
                aria-label="LinkedIn"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
              >
                <LinkedinIcon />
              </a>
              <a
                href={BUSINESS.social.facebook}
                aria-label="Facebook"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
              {NAV_LINKS.filter((l) => l.href !== "/about").map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/booking" className="hover:text-white">
                  Free Visibility Review
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-white">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--color-primary)]" />
                Edmonton, AB &mdash; serving all of Canada
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--color-primary)]" />
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-white">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[var(--color-primary)]" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-white">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-text-muted)] sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>Edmonton Branding &amp; Web Design Agency</p>
        </div>
      </div>
    </footer>
  );
}
