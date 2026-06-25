import type { Metadata } from "next";
import { Poppins, Fraunces } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kidus Clean | Residential & Commercial Cleaning in Edmonton, AB",
  description:
    "Kidus Clean provides trusted, detail-oriented residential and commercial cleaning services in Edmonton, Alberta. Book your free quote today.",
  keywords: [
    "cleaning service Edmonton",
    "house cleaning Edmonton",
    "commercial cleaning Edmonton",
    "Kidus Clean",
    "move in move out cleaning",
  ],
  openGraph: {
    title: "Kidus Clean | Edmonton's Trusted Cleaning Service",
    description:
      "Spotless homes and offices across Edmonton, AB. Reliable, insured, and detail-obsessed. Get your free quote today.",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fffaf0] text-[#2a2312]">
        {children}
      </body>
    </html>
  );
}
