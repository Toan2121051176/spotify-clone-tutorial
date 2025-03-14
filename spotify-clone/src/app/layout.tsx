import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> {/* Không lồng thêm <html> ở nơi khác */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
      </body>
    </html>
  );
}
