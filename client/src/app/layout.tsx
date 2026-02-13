import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://airesumepro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Resume Pro – Build ATS-Friendly Resumes with AI",
    template: "%s | AI Resume Pro",
  },
  description:
    "Build job-winning, ATS-optimized resumes with AI. Land more interviews with professional templates, ATS scoring, and AI content improvement. Free to start.",
  keywords: [
    "resume builder",
    "ATS resume",
    "AI resume",
    "resume templates",
    "job application",
    "career",
  ],
  authors: [{ name: "AI Resume Pro" }],
  creator: "AI Resume Pro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "AI Resume Pro",
    title: "AI Resume Pro – Build ATS-Friendly Resumes with AI",
    description:
      "Build job-winning, ATS-optimized resumes with AI. Professional templates, ATS scoring, and AI improvement. Free to start.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Resume Pro – Build ATS-Friendly Resumes with AI",
    description: "Build job-winning, ATS-optimized resumes with AI. Free to start.",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Add public/favicon.ico for a custom favicon when hosting.
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4F46E5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Skip to main content
        </a>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
