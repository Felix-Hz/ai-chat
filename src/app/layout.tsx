import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header } from "./components/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Element[X] | AI Chatbot Experience",
  description: "This is a pet project realized for Element[x].",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/robot.ico" sizes="any" />
      <body className={inter.className}>
        <Header />
        {children}
        <section className="flex justify-center">
          <Footer />
        </section>
      </body>
    </html>
  );
}
