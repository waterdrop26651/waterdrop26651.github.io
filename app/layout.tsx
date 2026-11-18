import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Zihao Wang";
const description =
  "Zihao Wang is an M.Phil. student at the School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen. His advisor is Prof. Zhizheng Wu. His research focuses on speech language models (SLM), emotion understanding and generation, and interactive models.";

export const metadata: Metadata = {
  metadataBase: new URL("https://waterdrop26651.github.io"),
  title,
  description,
  keywords: [
    "Zihao Wang",
    "zihaowang",
    "speech language models",
    "SLM",
    "emotion understanding and generation",
    "interactive models",
    "multimodal large language models",
  ],
  authors: [{ name: "Zihao Wang", url: "https://github.com/waterdrop26651" }],
  alternates: { canonical: "/" },
  verification: {
    google: "iqacXh4uWdWwomQ3cM6sr-Ii-Bnp7-z7cTbkZCsDJIY",
  },
  icons: { icon: "/avatar.jpg" },
  openGraph: {
    title: "Zihao Wang — Homepage",
    description,
    url: "/",
    siteName: "Zihao Wang",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zihao Wang — Homepage",
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          precedence="default"
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {children}
      </body>
    </html>
  );
}
