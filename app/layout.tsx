import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  weight: '400',
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Narain Farms | Farm to Kitchen | Organic Produce & Heritage Farming",
  description:
    "Narain Farms bridges tradition and innovation in sustainable farming. Rooted in family legacy and agricultural research, we grow chemical-free produce with care. Explore our Farm to Kitchen journey, seasonal offerings, and upcoming subscription boxes.",
  keywords: [
    "Narain Farms",
    "Organic farming",
    "Farm to kitchen",
    "Sustainable agriculture",
    "Chemical-free produce",
    "Punjab farms",
    "Local produce delivery",
    "Subscription farm box",
    "Seasonal fruits and vegetables"
  ],
  authors: [{ name: "Narain Farms Team", url: "https://narainfarms.com" }],
  creator: "Narain Farms",
  publisher: "Narain Farms",
  openGraph: {
    title: "Narain Farms | From Soil to Soul",
    description:
      "Discover organic, sustainable farming at Narain Farms. Grown with love, rooted in legacy. Coming soon: Subscription boxes and seasonal produce calendar.",
    url: "https://narainfarms.com",
    siteName: "Narain Farms",
    images: [
      {
        url: "/og-img.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Narain Farms organic produce and family farming legacy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Narain Farms | Organic Farming in Punjab",
    description:
      "Rooted in family legacy, Narain Farms brings you fresh, ethical, chemical-free produce straight from farm to kitchen.",
    images: ["https://narainfarms.com/og-image.jpg"], // same or different image
    creator: "@NarainFarms", // replace if you have a Twitter handle
  },
  metadataBase: new URL("https://narainfarms.com"),
  alternates: {
    canonical: "https://narainfarms.com",
  },
  category: "Organic Farming",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmMono.className}`}
      >
        {children}
      </body>
    </html>
  );
}
