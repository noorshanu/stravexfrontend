import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Stravex - Crypto Portfolio Competition Platform",
    template: "%s | Stravex"
  },
  description: "Compete in real-time crypto market prediction matches. Build portfolios, compete against others, and rank by performance. A gamified prediction competition platform for crypto traders.",
  keywords: [
    "crypto competition",
    "portfolio trading",
    "crypto prediction",
    "market strategy",
    "cryptocurrency",
    "trading game",
    "crypto leaderboard",
    "portfolio competition",
    "crypto trading platform"
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
    title: "Stravex - Crypto Portfolio Competition Platform",
    description: "Compete in real-time crypto market prediction matches. Build portfolios and rank by performance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stravex - Crypto Portfolio Competition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stravex - Crypto Portfolio Competition Platform",
    description: "Compete in real-time crypto market prediction matches. Build portfolios and rank by performance.",
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
