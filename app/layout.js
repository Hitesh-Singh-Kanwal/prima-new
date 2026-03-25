import Script from "next/script";
import Providers from "./components/Providers";
import "./globals.css";

export const metadata = {
  title: "PrimaLabs — The Virtual Rack",
  description:
    "PrimaLabs unlocks idle AI infrastructure capacity as a virtual rack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400&family=Instrument+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Script
          id="primalabs-theme-boot"
          strategy="beforeInteractive"
          src="/primalabs-theme-init.js"
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
