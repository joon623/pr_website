import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jun.",
  description: "Welcome jun website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="NC7GcDou7AVKZfJeP30oZ-MJSVSrur3VS0Fkjfku9Ww" />
      </head>
      <body className={notoSansKr.className}>
        {children}
        {/* Cloudflare Web Analytics */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "7e305ccf18974a6e818a2c9a4f56b73b"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
