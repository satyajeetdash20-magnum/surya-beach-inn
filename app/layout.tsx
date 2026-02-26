import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Surya Beach Inn Puri | Beachside Stay Odisha",
  description:
    "Hotel Surya Beach Inn – Your beachside retreat in Puri, Odisha. 29 cozy rooms steps from Golden Beach, near Jagannath Temple. Free WiFi, parking, breakfast. Book your Puri stay today!",
  keywords:
    "Puri beach hotel, Hotel Surya Beach Inn, Puri Odisha hotel, Golden Beach Puri, budget hotel Puri, beachside stay Puri, Jagannath Temple hotel",
  openGraph: {
    title: "Hotel Surya Beach Inn – Beachside Retreat in Puri",
    description:
      "Steps from Golden Beach, near Jagannath Temple. 29 rooms with AC, WiFi, and warm hospitality since 2003.",
    type: "website",
    locale: "en_IN",
    siteName: "Hotel Surya Beach Inn",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
