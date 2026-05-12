import type { Metadata } from "next";
import "./globals.css";


import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Alefsander.DEV — Programação & Automação",
  description: "Soluções inteligentes para o seu negócio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="pt" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}