import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Bebas_Neue, Cormorant_Garamond, Montserrat } from "next/font/google";
import SiteChrome from "@/components/site-chrome";
import { resolveAsset } from "@/lib/assets";
import { navLinks, siteAssets, siteContact, siteUrl } from "@/lib/site-data";
import "./globals.css";

const logoSrc = resolveAsset(siteAssets.logo, siteAssets.logoFallback);

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const description =
  "Wadhwa Institute is a premium IB coaching centre in Gurugram for English, French, Business Management, Economics, and Mathematics — mentor-led, results-driven learning.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wadhwa Institute — Premium IB Coaching in Gurugram",
    template: "%s | Wadhwa Institute",
  },
  description,
  applicationName: "Wadhwa Institute",
  keywords: [
    "Wadhwa Institute",
    "IB coaching Gurugram",
    "IB tuition Gurgaon",
    "IB tutor Sector 55",
    "best IB coaching in Gurugram",
    "IB Economics tutor",
    "IB Business Management tutor",
    "IB Mathematics tutor",
    "IB English tutor",
    "IB French tutor",
    "IB HL SL coaching",
    "IB Internal Assessment help",
    "IB Extended Essay help",
    "IB online classes India",
    "score 7 in IB",
  ],
  authors: [{ name: "Wadhwa Institute" }],
  creator: "Wadhwa Institute",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Wadhwa Institute",
    title: "Wadhwa Institute — Premium IB Coaching in Gurugram",
    description,
    // og:image is provided by the generated app/opengraph-image.tsx (1200x630).
  },
  twitter: {
    card: "summary_large_image",
    title: "Wadhwa Institute — Premium IB Coaching in Gurugram",
    description,
    // twitter:image falls back to the generated opengraph-image.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Optional: set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel to add the
  // Search Console verification meta tag automatically.
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Wadhwa Institute",
      description,
      url: siteUrl,
      email: siteContact.email,
      telephone: `+${siteContact.phoneHref.replace(/^\+/, "")}`,
      image: `${siteUrl}${siteAssets.logo}`,
      logo: `${siteUrl}${siteAssets.logo}`,
      hasMap: siteContact.mapsUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: "A1/29, HUDA, Sushant Lok II",
        addressLocality: siteContact.addressLocality,
        addressRegion: siteContact.addressRegion,
        postalCode: siteContact.postalCode,
        addressCountry: siteContact.addressCountry,
      },
      areaServed: "Gurugram, Haryana, India",
      knowsAbout: [
        "IB Economics",
        "IB Business Management",
        "IB Mathematics",
        "IB English",
        "IB French",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Wadhwa Institute",
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${cormorant.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteChrome />
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-5 sm:px-6 lg:px-8">
          <header className="flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-2)]/85 px-5 py-4 backdrop-blur">
            <Link href="/" className="flex items-center gap-3" aria-label="Wadhwa Institute home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoSrc} alt="Wadhwa Institute logo" className="h-10 w-auto" />
              <span className="hidden text-sm font-medium uppercase tracking-[0.2em] text-[var(--white)] sm:inline">
                Wadhwa Institute
              </span>
            </Link>
            <nav className="flex flex-wrap items-center gap-1 text-xs uppercase tracking-[0.18em] text-[var(--white-dim)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-2 transition hover:bg-[var(--green-faint)] hover:text-[var(--green)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </header>

          <main className="flex-1 pt-8">{children}</main>

          <footer className="mt-10 rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-2)]/85 px-6 py-7 text-sm text-[var(--white-dim)]">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logoSrc} alt="Wadhwa Institute logo" className="h-[50px] w-auto" />
                <p className="max-w-sm text-[13px] leading-7">
                  Premium IB coaching in Gurugram — mentor-led guidance across
                  English, French, Business Management, Economics, and Mathematics.
                </p>
              </div>

              <div className="space-y-3">
                <p className="eyebrow">Get in touch</p>
                <div className="space-y-2 text-[13px]">
                  <a
                    href={`mailto:${siteContact.email}`}
                    className="block transition hover:text-[var(--green)]"
                  >
                    {siteContact.email}
                  </a>
                  <a
                    href={`tel:${siteContact.phoneHref}`}
                    className="block transition hover:text-[var(--green)]"
                  >
                    {siteContact.phone}
                  </a>
                  <a
                    href={siteContact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block max-w-xs leading-6 transition hover:text-[var(--green)]"
                  >
                    {siteContact.address}
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <p className="eyebrow">Quick links</p>
                <div className="flex flex-col gap-2 text-[13px]">
                  <Link href="/contact" className="transition hover:text-[var(--green)]">
                    Enrol / Enquire
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="transition hover:text-[var(--green)]"
                  >
                    Privacy Policy &amp; Legal
                  </Link>
                  <a
                    href={siteContact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-[var(--green)]"
                  >
                    Find us on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-2 border-t border-[var(--white-faint)] pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Wadhwa Institute. All rights reserved.</p>
              <p>Built for ambitious IB learners and families.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
