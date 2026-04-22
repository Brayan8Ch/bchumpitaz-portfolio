import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio - Brayan Chumpitaz",
  description: "Systems Engineer & Frontend Developer building impactful tech in Peru.",
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${geistSans.variable} ${spaceGrotesk.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
