import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";

const kanit = Kanit({
  weight: ['200','300','400','500','600','700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Sportify | ⚽🏈🏀",
  description: "Don't Miss Out On The Sports Fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
        </body>
    </html>
  );
}
