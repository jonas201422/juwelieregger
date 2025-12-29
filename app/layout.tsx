import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { site } from "@/content/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: `${site.name} – Uhren & Schmuck in Linz`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  openGraph: {
    title: `${site.name} – Uhren & Schmuck in Linz`,
    description: site.description,
    url: site.baseUrl,
    siteName: site.name,
    locale: "de_AT",
    type: "website"
  },
  alternates: {
    canonical: site.baseUrl
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-ink text-ivory">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(214,181,110,0.12),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_30%)]" aria-hidden />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
