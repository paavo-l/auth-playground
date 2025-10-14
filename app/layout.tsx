import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Auth Playground",
  description: "Simple app for testing Better Auht features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-md mx-auto p-4">
            <h1 className=" text-4xl font-extrabold">
              Better Auth Sample App
            </h1>
            <p className="my-6">
              Playground for testing different auth methods
            </p>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
