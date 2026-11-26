import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SM Universe — Sriya Meenakshi Chalamalasetty",
    template: "%s | SM Universe",
  },
  description:
    "Engineer. Researcher. Builder. Photographer. Artist. Explore the two sides of Sriya Meenakshi Chalamalasetty.",
  openGraph: {
    title: "SM Universe — One Identity. Two Universes.",
    description:
      "A personal portfolio spanning intelligent systems, research, photography, and art.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05090f",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
