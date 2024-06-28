import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Molly Brace",
  description: "Molly Brace development portfolio",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '400', '200', '300', '500'],
  style: ['normal', 'italic'],
  variable: '--font-'
 })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}min-h-screen`}>{children}
      </body>
    </html>
  );
}
