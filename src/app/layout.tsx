import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import prisma from "../../lib/prisma";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: 'Movie App',
    template: "%s | Movie App "
  },
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [allData] = await prisma.$transaction([
    prisma.mediaContent.findMany({
      include: {
        genre: true,
        category: true,
        downloadLink: true,
        language: true,
        subtitle: true
      },
    })
  ])
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-screen overflow-hidden">
          <Header allData={allData} />

          {children}
          <Footer />

        </div>
      </body>
    </html>
  );
}
