import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/query-provider";

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "منصة تدرب - دورات تدريبية عن بعد | تعلم مع أفضل المدربين",
    template: "%s | منصة تدرب",
  },
  description:
    "منصة تدرب الرائدة في مجال التدريب في الخليج والوطن العربي منذ أكثر من 10 سنوات. دورات تدريبية عن بعد في مختلف المجالات مع أفضل المدربين.",
  keywords: [
    "دورات تدريبية",
    "تعلم عن بعد",
    "تدريب",
    "تعليم",
    "مهارات",
    "تطوير الذات",
    "برمجة",
    "تسويق",
    "أعمال",
  ],
  authors: [{ name: "منصة تدرب" }],
  creator: "منصة تدرب",
  publisher: "منصة تدرب",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tadarab.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://tadarab.com",
    title: "منصة تدرب - دورات تدريبية عن بعد | تعلم مع أفضل المدربين",
    description:
      "منصة تدرب الرائدة في مجال التدريب في الخليج والوطن العربي منذ أكثر من 10 سنوات. دورات تدريبية عن بعد في مختلف المجالات مع أفضل المدربين.",
    siteName: "منصة تدرب",
    images: [
      {
        url: "/assets/hero-section/hero-model.webp",
        width: 1200,
        height: 630,
        alt: "منصة تدرب - دورات تدريبية عن بعد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "منصة تدرب - دورات تدريبية عن بعد",
    description:
      "منصة تدرب الرائدة في مجال التدريب في الخليج والوطن العربي منذ أكثر من 10 سنوات.",
    images: ["/assets/hero-section/hero-model.webp"],
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
  verification: {
    google: "your-google-verification-code",
  },
  category: "education",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/assets/nav-bar/logo.svg" />
        <meta name="theme-color" content="#00040D" />
        <meta name="color-scheme" content="dark" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="تدرب" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="تدرب" />
      </head>
      <body className={`${almarai.variable} antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
