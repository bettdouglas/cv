import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { BlogProvider } from "@/context/blog-context"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Douglas David Bett - Portfolio",
  description: "Senior Software Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BlogProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
            </div>
          </BlogProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

