import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acme Digital Services ? Modern Web Solutions",
  description:
    "We design, build, and scale digital products. Websites, apps, and growth for ambitious teams.",
  openGraph: {
    title: "Acme Digital Services ? Modern Web Solutions",
    description:
      "We design, build, and scale digital products. Websites, apps, and growth for ambitious teams.",
    url: "https://agentic-10db2d18.vercel.app",
    siteName: "Acme Digital Services",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Acme Digital Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://agentic-10db2d18.vercel.app"),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
