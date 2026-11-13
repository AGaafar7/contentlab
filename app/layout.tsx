import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "ContentLab — Creative Content Production Studio",
  description: "ContentLab is a premium marketing agency built for growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* bg-white ensures the page matches the navbar seamlessly */}
      <body className={`${inter.className} bg-white text-brand-charcoal antialiased selection:bg-brand-gold selection:text-white`}>
        <Navbar />
        <main className="mx-auto max-w-7xl px-6">
          {children}
        </main>
      </body>
    </html>
  );
}