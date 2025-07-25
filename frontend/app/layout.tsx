import type React from "react"
import type { Metadata } from "next"
import "./globals.css" // Import global styles

export const metadata: Metadata = {
  title: "My To-Do List App",
  description: "A clean, modern, and responsive To-Do List Web App built with Next.js and Tailwind CSS.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
