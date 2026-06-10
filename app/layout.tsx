import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haseki-restaurant.de"),
  title: {
    default: "Haseki Restaurant Berlin | Japanisch - Vietnamesische Küche",
    template: "%s | Haseki Restaurant"
  },
  description:
    "Haseki Restaurant in Berlin-Bohnsdorf: Sushi, Pho, Ramen, Bowls, Reisgerichte und hausgemachte Getränke in warmer moderner Atmosphäre.",
  keywords: [
    "Haseki Restaurant",
    "Sushi Berlin",
    "Pho Berlin",
    "Japanisch Vietnamesisch Berlin",
    "Restaurant Waltersdorfer Straße"
  ],
  openGraph: {
    title: "Haseki Restaurant Berlin",
    description: "Japanisch - Vietnamesische Küche in Berlin.",
    images: ["/images/demo/WhatsApp Image 2026-06-08 at 14.09.51.jpeg"],
    locale: "de_DE",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
