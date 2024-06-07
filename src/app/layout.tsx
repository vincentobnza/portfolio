import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vincent | Portfolio 🧑🏻‍💻",
  description: "A Creative Web Designer from the Philippines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={space.className}>{children}</body>
    </html>
  );
}
