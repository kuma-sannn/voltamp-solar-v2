import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#047857", // Voltamp's signature green
};

export const metadata: Metadata = {
  metadataBase: new URL("https://voltamppanacea.com"), 
  title: {
    default: "Voltamp Solar Panacea | Best Solar EPC & Industrial Solutions in Mumbai",
    template: "%s | Voltamp Solar Panacea",
  },
  description:
    "Voltamp Solar Panacea Pvt Ltd provides expert Solar EPC, Industrial Power Plants, and Solar Electric Fencing in Mumbai. Engineered for high ROI and energy independence.",
  keywords: [
    "Voltamp Solar Panacea",
    "Solar EPC Mumbai",
    "Industrial Solar Installation Mumbai",
    "Solar Electric Fencing India",
    "Commercial Solar Solutions",
    "Solar Panel Installation Malad",
  ],
  authors: [{ name: "Voltamp Solar Panacea Pvt Ltd" }],
  icons: {
    icon: "/logo.svg", // Matches your renamed file
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://voltamppanacea.com", 
    siteName: "Voltamp Solar Panacea",
    images: [
      {
        url: "/logo.svg", // Uses your logo for social previews until you have a photo
        width: 512,
        height: 512,
        alt: "Voltamp Solar Panacea Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Voltamp Solar Panacea | Industrial Solar Solutions",
    description: "Expert Solar EPC and Industrial Power Solutions in Mumbai.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-foreground bg-background flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppButton /> 
        <Footer />
      </body>
    </html>
  );
}