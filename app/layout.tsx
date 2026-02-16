import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Stravex - Predict trends, compete on trading skill, not luck.",
    template: "%s | Stravex"
  },
  description: "Compete in real-time with first ever gamified crypto prediction market. Build portfolios and rank by performance.",
  keywords: [
    "crypto prediction market",
    "crypto prediction competition",
    "crypto prediction platform",
    "crypto prediction game",
    "crypto prediction competition",
    "crypto prediction simulation",
    "crypto prediction training",
    "crypto prediction practice",
    "crypto prediction education",
    "crypto prediction skill",
    "crypto prediction luck",
    "crypto prediction competition",
    "crypto prediction platform",
    "crypto prediction game",
    "crypto prediction competition",
    "crypto prediction simulation",
    "crypto prediction training",
    "crypto prediction practice",
    "crypto prediction education",
    "crypto prediction skill",
    "crypto prediction luck",
  ],
  authors: [{ name: "Stravex Team" }],
  creator: "Stravex",
  publisher: "Stravex",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stravex.com",
    siteName: "Stravex",
    title: "Stravex - Predict trends, compete on trading skill, not luck.",
    description: "Compete in real-time with first ever gamified crypto prediction market. Build portfolios and rank by performance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stravex - Predict trends, compete on trading skill, not luck.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
      title: "Stravex - Predict trends, compete on trading skill, not luck.",
    description: "Compete in real-time with first ever gamified crypto prediction market. Build portfolios and rank by performance.",
    images: ["/og-image.png"],
    creator: "@stravex",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://stravex.com"),
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#0a0a0f]">
        {children}
      </body>
    </html>
  );
}
