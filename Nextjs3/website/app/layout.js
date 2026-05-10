import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/cmponents/Navbar";
import Footer from "@/cmponents/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Facebook - connect with others",
  description: "This is facebook's website - connect with people",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="container mx-auto min-h-[85vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
