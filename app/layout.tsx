import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zane Priddle — Software, publishing systems and digital projects",
  description:
    "Zane Priddle is based in Melbourne and works on practical digital projects across software, publishing and commercial operations.",
  applicationName: "Zane Priddle",
  authors: [{ name: "Zane Priddle", url: "https://zanepriddle.com" }],
  creator: "Zane Priddle",
  publisher: "Zane Priddle",
  metadataBase: new URL("https://zanepriddle.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://zanepriddle.com",
    title: "Zane Priddle — Software, publishing systems and digital projects",
    description:
      "Zane Priddle is based in Melbourne and works on practical digital projects across software, publishing and commercial operations.",
    siteName: "Zane Priddle",
  },
  twitter: {
    card: "summary",
    title: "Zane Priddle — Software, publishing systems and digital projects",
    description:
      "Zane Priddle is based in Melbourne and works on practical digital projects across software, publishing and commercial operations.",
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
  ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
