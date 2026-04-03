import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura fresh+",
  description:
    "Aura fresh+ is an oral wellness and hydration drink mix designed to support fresher breath, cleaner teeth, and daily confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
