import type { Metadata } from "next";
import "./globals.css";
// Import using named curly braces:
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://transolution.africa"),
  title: {
    default: "Transolution Ventures | Kenya Tours & African Safaris",
    template: "%s | Transolution Ventures",
  },
  description:
    "Discover Kenya and Africa with Transolution Ventures. Explore safari adventures, beautiful destinations, and personalized travel experiences.",
  alternates: {
    canonical: "/",
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
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased bg-[#FAF8F5] pt-20 flex flex-col min-h-screen justify-between">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}