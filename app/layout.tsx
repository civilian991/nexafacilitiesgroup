import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://nexafacilitiesgroup.com'),
  title: "Nexa Facilities Group - Expert HVAC/R Maintenance Services",
  description: "Expert HVAC/R maintenance for commercial stores across multiple states. Fast, reliable, and professional service that keeps your business fully operational.",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/nexa-logo.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: "Nexa Facilities Group - Expert HVAC/R Maintenance Services",
    description: "Expert HVAC/R maintenance for commercial stores across multiple states.",
    images: ['/nexa-logo.png'],
    type: 'website',
    locale: 'en_US',
    siteName: 'Nexa Facilities Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nexa Facilities Group - Expert HVAC/R Maintenance Services",
    description: "Expert HVAC/R maintenance for commercial stores across multiple states.",
    images: ['/nexa-logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/nexa-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}