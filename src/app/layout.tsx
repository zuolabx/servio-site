import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://servio.zuolabs.com"),

  title: {
    default: "Servio",
    template: "%s • Servio",
  },

  description:
    "Restaurant software built for cafés. Manage orders, kitchen operations, inventory, payroll, billing, employees, and analytics from a single platform.",

  applicationName: "Servio",

  keywords: [
    "restaurant software",
    "cafe software",
    "coffee shop POS",
    "restaurant operating system",
    "inventory management",
    "kitchen management",
    "restaurant analytics",
    "payroll",
    "billing",
  ],

  authors: [{ name: "Zuo Labs" }],
  creator: "Zuo Labs",
  publisher: "Zuo Labs",

  openGraph: {
    title: "Servio",
    description: "Restaurant software built for cafés, not just restaurants.",
    url: "https://servio.zuolabs.com",
    siteName: "Servio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Servio",
    description: "Restaurant software built for cafés, not just restaurants.",
    creator: "@zuolabs", // Remove if you don't have an X account
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#f8f6f2] text-neutral-900">
        {children}
      </body>
    </html>
  );
}
