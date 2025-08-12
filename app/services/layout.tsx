import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - Freight Forwarding & Logistics Solutions | Heroes Freight Forwarders",
  description:
    "Comprehensive logistics services including sea freight, air freight, road freight, customs clearance, supply chain management, and warehousing solutions across Tanzania and East Africa.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
