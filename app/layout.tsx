import type React from "react"
import type { ReactNode } from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import RandomImagesBackground from "@/components/random-images-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "La Grande Récré - Programme de Fidélité",
  description: "Suivez vos points de fidélité et vos récompenses",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const contentWrapperStyle = {
    backgroundColor: `hsla(var(--background), 0.6)`, // Content background with 60% opacity
    minHeight: '100vh',
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <RandomImagesBackground />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div style={contentWrapperStyle}>
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
