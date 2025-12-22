

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Open_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://etarath.ai"), // 🔥 REQUIRED
  title: "The UAE’s Ultimate B2B Tyre Marketplace",
  description: "Connecting verified vendors and retailers with speed, trust, and intelligence.",
  icons: {
    icon: "/etarath_favicon.svg",
  },
  openGraph: {
    title: "The UAE’s Ultimate B2B Tyre Marketplace",
    description: "Connecting verified vendors and retailers with speed, trust, and intelligence.",
    images: ["/etarath_black.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/etarath_black.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${openSans.variable} ${manrope.variable} antialiased`}
      >
        <Navbar />
        <div className="mt-[80px] px-5 md:px-10 lg:px-[70px] max-w-[1480px] mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
