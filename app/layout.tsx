import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif-source",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cassandra-id.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cassandra.ID — Portal Komunitas, Riset & Inovasi",
    template: "%s | Cassandra.ID",
  },
  description: "Official portal and living archive documenting ideas, research papers, technology experiments, and community discussions born from our core community.",
  keywords: [
    "Cassandra.ID",
    "Anime Research",
    "Otaku Subculture",
    "Komunitas Anime Indonesia",
    "Innovation Lab",
    "CloverOtaku.ID",
    "AI Animation",
    "Research Papers",
  ],
  authors: [{ name: "Cassandra.ID Team" }],
  creator: "Cassandra.ID Community",
  publisher: "Cassandra.ID",
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Cassandra.ID — Portal Komunitas, Riset & Inovasi",
    description: "Where Anime Passion Meets Rigorous Research & Creative Innovation.",
    url: SITE_URL,
    siteName: "Cassandra.ID",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 800,
        height: 800,
        alt: "Cassandra.ID Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cassandra.ID — Portal Komunitas, Riset & Inovasi",
    description: "Where Anime Passion Meets Rigorous Research & Creative Innovation.",
    creator: "@CassandraID",
    images: [`${SITE_URL}/logo.png`],
  },
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
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "googleae0726c51150f2d4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cassandra.ID",
    url: SITE_URL,
    description: "Official portal and living archive documenting ideas, research papers, technology experiments, and community discussions.",
    publisher: {
      "@type": "Organization",
      name: "Cassandra.ID Community",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };

  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface-pure text-on-surface font-body selection:bg-primary-container selection:text-white">
        <Navbar />
        <main className="flex-1 w-full pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
