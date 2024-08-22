import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Powerfull Encryption Decryption Tool || Shipsar Developers",
  description:
    "This tools helps to encrypt or decrypt any data. We Use Powerfull encryption methods like AES ENCRYPTION, SHA1, Publick Key etc. It is Developed by Shipsar Developers. Visit us at shipsar.in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
