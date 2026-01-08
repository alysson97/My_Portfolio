import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Urbanist, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Alysson Victoria | Full-Stack Software Engineer",
  description:
    "Portfolio de Alysson Victoria - Desenvolvedor Full-Stack especializado em React, Next.js, TypeScript, PHP e sistemas financeiros. Criando aplicações web escaláveis e modernas.",
  keywords: [
    "Alysson Victoria",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "PHP",
    "Laravel",
    "Software Engineer",
  ],
  authors: [{ name: "Alysson Victoria" }],
  creator: "Alysson Victoria",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Alysson Victoria | Full-Stack Software Engineer",
    description:
      "Portfolio de Alysson Victoria - Desenvolvedor Full-Stack especializado em React, Next.js e sistemas financeiros.",
    siteName: "Alysson Victoria Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alysson Victoria | Full-Stack Software Engineer",
    description:
      "Portfolio de Alysson Victoria - Desenvolvedor Full-Stack especializado em React, Next.js e sistemas financeiros.",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${urbanist.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
