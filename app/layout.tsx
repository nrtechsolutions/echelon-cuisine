import type { Metadata } from "next";
import { roboto } from "@/app/ui/fonts";
import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "charminarsd",
  description: "Online Ordering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
