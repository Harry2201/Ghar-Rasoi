import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ghar Rasoi Enterprises — शुद्धता की एक पहचान",
    template: "%s | Ghar Rasoi Enterprises",
  },
  description:
    "Ghar Rasoi Enterprises — oils, masalas and grains from Varanasi, Uttar Pradesh.",
  openGraph: {
    title: "Ghar Rasoi Enterprises — शुद्धता की एक पहचान",
    description:
      "Oils, masalas and grains from a Varanasi kitchen brand rooted in family farming.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
