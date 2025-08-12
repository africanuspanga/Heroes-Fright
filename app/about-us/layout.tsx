import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Heroes Freight Forwarders Ltd. | Leading Logistics Company in Tanzania",
  description:
    "Learn about Heroes Freight Forwarders Ltd., a leading logistics and freight forwarding company in Tanzania. Our vision, mission, values, and commitment to excellence in supply chain management.",
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
