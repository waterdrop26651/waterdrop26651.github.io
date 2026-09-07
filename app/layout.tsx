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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1a1a" },
  ],
  colorScheme: "light dark",
};

// Runs before paint so the saved/system theme applies without a flash.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          precedence="default"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        {children}
      </body>
    </html>
  );
}
