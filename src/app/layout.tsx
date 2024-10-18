import type { Metadata } from "next";
import { Noto_Sans, Pacifico } from "next/font/google";
import "@/styles/main.css";
import { cn } from "@/lib/utils/cn";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
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
      <body className={cn(noto_sans.variable, pacifico.variable)}>
        {children}
      </body>
    </html>
  );
}
