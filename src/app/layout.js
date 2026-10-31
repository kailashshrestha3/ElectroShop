import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Electro Shop",
  description: "Buy latest electronics products at best price.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
