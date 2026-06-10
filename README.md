# PreetSidhuDesigns — psdsns.ca

Next.js site for PreetSidhuDesigns: branding, web design, and marketing for
small businesses in Edmonton and across Canada. Built for SEO (local
business + FAQ structured data, sitemap, metadata) with a free "Business
Visibility Review" booking funnel.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before going live — update these placeholders

All editable in `src/lib/constants.ts`:

- `phone` / `phoneDisplay` — your real business phone number
- `email` — your contact email
- `calendlyUrl` — your real Calendly scheduling link (free at calendly.com).
  This powers the booking widget on `/booking`.
- `formEndpoint` — create a free form at [Formspree](https://formspree.io)
  and paste the endpoint URL. This is where the quick intake form on
  `/booking` submits to (delivers to your email).
- `social.instagram` / `linkedin` / `facebook` — your real profile URLs

Also:

- Replace `public/og-image.jpg` (1200x630) with a real social-share image —
  referenced in `src/app/layout.tsx` metadata.
- `src/components/LocalBusinessSchema.tsx` has approximate Edmonton
  coordinates — update `geo` if you want a precise location.

## SEO setup checklist (to actually rank)

1. Verify the domain in [Google Search Console](https://search.google.com/search-console)
   and submit `https://psdsns.ca/sitemap.xml`.
2. Create/claim your **Google Business Profile** for Edmonton, AB and link
   it to this site.
3. Get a few Google reviews — review count/quality strongly affects local
   "near me" rankings.
4. Build local citations/backlinks (directories, partners, local press).
5. Targeted keywords already baked into page titles/descriptions:
   - "branding agency Edmonton" / "branding agency near me"
   - "design agency near me" / "web design agency Canada"
   - "social media marketing Edmonton"

## Deploy

Recommended: [Vercel](https://vercel.com/new) — connect this repo and it
will build automatically. Set the production domain to `psdsns.ca`.
