import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  //metadataBase: new URL("https://daandonders.dev"),

  title: {
    default: "Daan Donders",
    template: "%s | Daan Donders",
  },
  description:
    "Portfolio of Daan Donders — software developer focused on scalable backend systems, backend architecture, and interactive web applications.",

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "Daan Donders",
    description:
      "Portfolio of Daan Donders — software developer focused on scalable backend systems and full-stack architecture.",
    images: ["/og-image.png"],
    siteName: "Daan Donders",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
