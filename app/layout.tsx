import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

import { BridgeProvider } from "@/components/bridge-provider";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { SiteFooter } from "@/components/site-footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const appName = "Nomad VPN";

export const metadata: Metadata = {
  title: appName,
  description: appName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={cn("dark font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen bg-background flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <BridgeProvider />
          <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-14 flex items-center">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold tracking-tight"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f595d] shadow-[0_0_14px] shadow-[#0f595d]/50">
                  <span className="font-bold text-xl leading-none text-white">
                    N
                  </span>
                </div>
                {appName}
              </Link>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
