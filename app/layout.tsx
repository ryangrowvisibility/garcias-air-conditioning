import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Garcia's Air Conditioning | AC Repair & Installation in Fontana, CA | (909) 969-5661",
  description:
    "Family-owned AC repair, central air, mini-split and window unit installation in Fontana, Ontario and the Inland Empire. Javier Garcia and son. 4.5 stars from 37 Google reviews. Open Mon-Sat 7 AM to 6 PM. Call (909) 969-5661.",
  openGraph: {
    title: "Garcia's Air Conditioning | Fontana AC Repair & Installation",
    description: "Family-owned AC service in the Inland Empire. Call Javier at (909) 969-5661.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={nunito.variable}>
      <body>{children}</body>
    </html>
  );
}
