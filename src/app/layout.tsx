import type { Metadata } from "next";
// import { poppins } from "@/utils/fonts";

import "./globals.css";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
  title: "Vivek Kumar | Full Stack Developer - MERN",
  description: "A Full Stack - Frontend & Backend Developer from India",
  icons: "@/app/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <body className={`${poppins.className} antialiased`}> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
