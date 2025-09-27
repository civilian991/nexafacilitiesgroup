import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Nexa Facilities Group - Expert HVAC/R Maintenance Services",
    template: "%s | Nexa Facilities Group"
  },
  description: "Professional commercial HVAC and refrigeration maintenance services across multiple states. 24/7 emergency support, preventive maintenance, and expert technicians for your facility needs.",
  keywords: "HVAC maintenance, commercial refrigeration, facility management, emergency HVAC repair, preventive maintenance, commercial HVAC services, multi-state facility support",
  authors: [{ name: "Nexa Facilities Group" }],
  creator: "Nexa Facilities Group",
  publisher: "Nexa Facilities Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nexafacilitiesgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Nexa Facilities Group - Expert HVAC/R Maintenance Services",
    description: "Professional commercial HVAC and refrigeration maintenance services across multiple states. Fast, reliable, and professional service that keeps your business fully operational.",
    url: 'https://nexafacilitiesgroup.com',
    siteName: 'Nexa Facilities Group',
    images: [
      {
        url: '/nexa-facilities-logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Nexa Facilities Group Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nexa Facilities Group - Expert HVAC/R Maintenance Services",
    description: "Professional commercial HVAC and refrigeration maintenance services across multiple states.",
    images: ['/nexa-facilities-logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  category: 'business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950 overflow-hidden">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}