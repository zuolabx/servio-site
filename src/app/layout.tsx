import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://servio.zuolabs.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Servio by Zuo Labs",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
      },
      sameAs: [
        "https://twitter.com/zuolabs",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Servio",
      description:
        "Restaurant software built for cafés. Manage orders, kitchen operations, inventory, payroll, billing, employees, and analytics from a single platform.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#software`,
      name: "Servio",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/pricing`,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      description:
        "All-in-one restaurant and café management software for orders, kitchen operations, inventory, payroll, billing, and analytics.",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Servio - Restaurant & Café Management Software",
    template: "%s | Servio",
  },

  description:
    "Servio is the all-in-one operating system for cafés and restaurants. Streamline orders, kitchen operations, inventory, payroll, billing, employee management, and analytics from a single beautiful platform.",

  applicationName: "Servio",

  keywords: [
    "restaurant software",
    "café management software",
    "coffee shop POS",
    "restaurant operating system",
    "restaurant inventory management",
    "kitchen display system",
    "KDS software",
    "restaurant analytics",
    "restaurant payroll software",
    "billing software for restaurants",
    "employee management restaurant",
    "café POS system",
    "restaurant billing",
    "food service management",
    "online ordering system",
    "Servio",
    "Zuo Labs",
  ],

  authors: [{ name: "Zuo Labs", url: BASE_URL }],
  creator: "Zuo Labs",
  publisher: "Zuo Labs",

  // Canonical URL
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
    },
  },

  openGraph: {
    title: "Servio - Restaurant & Café Management Software",
    description:
      "The all-in-one operating system for cafés and restaurants. Orders, kitchen ops, inventory, payroll, billing, and analytics - unified.",
    url: BASE_URL,
    siteName: "Servio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Servio - Restaurant & Café Management Software",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Servio - Restaurant & Café Management Software",
    description:
      "The all-in-one operating system for cafés and restaurants. Orders, kitchen ops, inventory, payroll, billing, and analytics - unified.",
    creator: "@zuolabs",
    site: "@zuolabs",
    images: [`${BASE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1a1a1a" },
    ],
  },

  manifest: "/site.webmanifest",

  category: "Technology",

  // Search engine verification (replace with your actual codes)
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // yandex: "YOUR_YANDEX_TOKEN",
    // bing: "YOUR_BING_TOKEN",
  },

  other: {
    "theme-color": "#1a1a1a",
    "color-scheme": "light",
    "msapplication-TileColor": "#1a1a1a",
    "msapplication-config": "/browserconfig.xml",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="min-h-screen bg-[#f8f6f2] text-neutral-900">
        {children}
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
