import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industries We Serve - Specialized Logistics Solutions | Heroes Freight Forwarder",
  description:
    "Tailored logistics solutions for Manufacturing, Retail & E-Commerce, Agriculture, Mining, Construction, and Pharmaceutical industries across Tanzania and East Africa.",
}

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
