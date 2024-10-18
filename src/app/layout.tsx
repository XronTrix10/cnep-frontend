import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "@/styles/main.css";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "Community need exchange platform",
  description: "Community need exchange platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto_sans.variable}>{children}</body>
    </html>
  );
}
