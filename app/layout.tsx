import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageDocument from "./LanguageDocument";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { metadataFor } from "./lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = metadataFor("home", "th");

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageDocument>{children}</LanguageDocument>
        {googleAnalyticsId ? <GoogleAnalytics measurementId={googleAnalyticsId} /> : null}
      </body>
    </html>
  );
}
