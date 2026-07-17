import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
      <body>
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
