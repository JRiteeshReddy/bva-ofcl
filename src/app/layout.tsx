import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BVA | Bangalore Vibecoders Association",
  description: "A student-led tech community focused on building real-world projects and fostering innovation.",
  keywords: ["tech community", "Bangalore", "Vibecoders", "BVA", "student developers", "hackathons", "projects"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
