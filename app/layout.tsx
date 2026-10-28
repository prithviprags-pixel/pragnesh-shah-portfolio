import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Pragnesh Shah | Founder @ sehaaonline.com & GM @ Neoshine Healthcare",
  description:
    "Healthcare solutions and Assisted Aid Technology (AAT) professional across the globe, with 17 years experience in Home Healthcare, Rehabilitation, and business strategy in Dubai, UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hanken.variable} js`}>
      <body>{children}</body>
    </html>
  );
}
