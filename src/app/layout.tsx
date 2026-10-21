import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "@/styles/index.css";
import "./vistal-runtime.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { siteConfig } from "@/data/siteConfig";
import "@/styles/brand.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#202724",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://avenor.example"),
  title: siteConfig.metadata["/"].title,
  description: siteConfig.description,
  robots: { index: false, follow: false },
  icons: {
    icon: "https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581820/wazemtech/avenor/avenor-mark-075486b1116a.png",
    apple: "https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581820/wazemtech/avenor/avenor-mark-075486b1116a.png",
  },
  openGraph: {
    title: siteConfig.metadata["/"].title,
    description: siteConfig.description,
    images: [siteConfig.brand.logo],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
