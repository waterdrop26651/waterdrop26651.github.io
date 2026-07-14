import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Zihao Wang — AI Researcher";
const description =
  "Zihao Wang explores speech language models, representation learning, real-time interaction, and agent memory.";

export const metadata: Metadata = {
  metadataBase: new URL("https://waterdrop26651.github.io"),
  title,
  description,
  keywords: [
    "Zihao Wang",
    "AI research",
    "speech language models",
    "representation learning",
    "real-time interaction",
    "agent memory",
  ],
  authors: [{ name: "Zihao Wang", url: "https://github.com/waterdrop26651" }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Zihao Wang / Waterdrop",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
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
