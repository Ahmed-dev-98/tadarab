import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/query-provider";

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "دورات تدريبية عن بعد | منصة تدرب",
  description: "دورات تدريبية عن بعد | منصة تدرب",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${almarai.variable} antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
