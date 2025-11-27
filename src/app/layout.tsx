import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans, Open_Sans ,Manrope} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

// Plus Jakarta Sans
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta", // CSS variable
  subsets: ["latin"],
  display: "swap",
});

// Open Sans
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope", // CSS variable for Manrope
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "The UAE’s Ultimate B2B Tyre Marketplace",
  description: "Connecting verified vendors and retailers with speed, trust, and intelligence.",
  icons: {
    icon: "/etarath_favicon.svg", // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${openSans.variable} ${manrope.variable} antialiased`}
      >
        <Navbar />
        {/* Main content */}
        <div className="mt-[80px] px-5 md:px-10 lg:px-[70px] max-w-[1480px] mx-auto">{children}</div>
        <Footer />

      </body>
    </html>
  );
}
