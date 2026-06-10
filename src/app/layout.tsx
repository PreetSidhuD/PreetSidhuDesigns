import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Branding, Web Design & Marketing Agency in Edmonton`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Edmonton-based branding, website design, and marketing agency helping small businesses across Canada look credible, get found on Google, and win more customers.",
  keywords: [
    "branding agency Edmonton",
    "design agency near me",
    "branding agency near me",
    "website design Edmonton",
    "web design agency Canada",
    "social media marketing Edmonton",
    "small business branding Canada",
    "logo design Edmonton",
    "marketing agency near me",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Branding, Web Design & Marketing Agency in Edmonton`,
    description:
      "Branding, websites, and marketing for Canadian small businesses — built to bring in customers. Start with a free 15-minute Business Visibility Review.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Branding, Web Design & Marketing Agency in Edmonton`,
    description:
      "Get a free 15-minute Business Visibility Review for your business.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${montserrat.variable}`}>
      <body className="flex min-h-screen flex-col bg-[var(--color-bg)] font-sans text-[var(--color-text)] antialiased">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
