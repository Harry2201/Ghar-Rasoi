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
    "Ghar Rasoi Enterprises — mustard oil, cooking oils, masalas and atta from Varanasi, Uttar Pradesh.",

  keywords: [
    "Ghar Rasoi Enterprises",
    "Ghar Rasoi",
    "mustard oil",
    "cold pressed mustard oil",
    "mustard oil Varanasi",
    "masala",
    "atta",
    "cooking oil",
    "Varanasi",
    "Uttar Pradesh",
  ],

  authors: [{ name: "Ghar Rasoi Enterprises" }],

  creator: "Ghar Rasoi Enterprises",

  metadataBase: new URL("https://theexactdomain.com"),

  openGraph: {
    title: "Ghar Rasoi Enterprises — शुद्धता की एक पहचान",
    description:
      "Mustard oil, cooking oils, masalas and atta from Ghar Rasoi Enterprises, Varanasi.",
    locale: "en_IN",
    type: "website",
    siteName: "Ghar Rasoi Enterprises",
  },

  robots: {
    index: true,
    follow: true,
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