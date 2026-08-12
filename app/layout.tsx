import type { Metadata } from "next";
import "./globals.css";


import { ThemeProvider } from "@/components/theme-provider"

const siteUrl = "https://alefsander.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alefsander.DEV — Programação & Automação | Porto Velho",
    template: "%s — Alefsander.DEV",
  },
  description:
    "Alefsander.DEV é uma empresa pessoal de programação e automação sediada em Porto Velho - RO. Desenvolvimento web, automações de processos, inteligência artificial, APIs e integrações sob medida para negócios de todos os tamanhos, atendendo clientes em todo o Brasil.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Alefsander.DEV — Programação & Automação | Porto Velho",
    description:
      "Desenvolvimento web, automações, IA e APIs sob medida. Soluções inteligentes para o seu negócio, com sede em Porto Velho - RO.",
    url: siteUrl,
    siteName: "Alefsander.DEV",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Alefsander.DEV — Programação & Automação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alefsander.DEV — Programação & Automação | Porto Velho",
    description:
      "Desenvolvimento web, automações, IA e APIs sob medida. Soluções inteligentes para o seu negócio.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="pt" suppressHydrationWarning className="smooth-scroll">
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