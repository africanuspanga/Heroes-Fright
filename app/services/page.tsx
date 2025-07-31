import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Ship, Plane, Truck, Shield, Globe, Package, FileText, Warehouse, MapPin, Building } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Comprehensive Logistics Solutions
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Streamline your supply chain with our integrated logistics services designed for efficiency, security, and
              timely delivery
            </p>
          </div>
        </div>
      </section>

      {/* Freight Forwarding */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Freight Forwarding</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive transport solutions connecting you to the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Ship className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Sea Freight</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Efficient and cost-effective ocean transport solutions for all cargo sizes, connecting you to major
                  ports worldwide. Vessels depart weekly to all continents, ensuring consistent global reach.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Plane className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Air Freight</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Our air freight experts understand the critical need for safety, security, and swift handling of your
                  time-sensitive shipments, ensuring fast and reliable delivery globally.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Road Freight</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We work closely with trusted partners to provide robust road transport solutions across Tanzania and
                  East Africa, ensuring seamless last-mile delivery and regional connectivity.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <Image
              src="/images/air-freight.jpeg"
              alt="Air freight operations"
              width={1200}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Customs Clearance */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Customs Clearance</h2>
              <div className="space-y-4 text-gray-600 text-base sm:text-lg">
                <p>
                  Our licensed clearing agents possess deep knowledge of Tanzania Revenue Authority (TRA) and global
                  customs regulations. We streamline complex processes for fast, compliant imports and exports,
                  minimizing delays and ensuring smooth cargo release.
                </p>
                <p>
                  We have been progressively consolidating our Customs clearance services in the general cargo business
                  space, building expertise that ensures your shipments move through customs efficiently and
                  compliantly.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">Licensed & Compliant</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Fully licensed agents ensuring regulatory compliance
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/container-ship.jpeg"
                alt="Container ship operations"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Management */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/warehouse-logistics.avif"
                alt="Warehouse and logistics operations"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Supply Chain Management</h2>
              <div className="space-y-4 text-gray-600 text-base sm:text-lg">
                <p>
                  We provide end-to-end logistics management, from meticulous documentation and secure warehousing to
                  efficient distribution and last-mile delivery. Our tailored approach optimizes your entire supply
                  chain for maximum efficiency and cost-effectiveness.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">Documentation</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Meticulous handling of all logistics documentation
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">End-to-End Solutions</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Complete supply chain optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to complete your logistics needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Warehouse className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Warehousing</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Secure, modern warehousing facilities with comprehensive inventory management systems. Our
                      climate-controlled storage ensures optimal conditions for your goods with 24/7 security
                      monitoring.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Packaging & Storage</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Professional packaging services to ensure the safety and integrity of your goods during transit.
                      Our storage facilities provide secure and flexible options for your inventory management needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Inland Transport</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Comprehensive inland transportation services across Tanzania and East Africa. Our fleet and
                      partner network ensure reliable door-to-door delivery with real-time tracking and updates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Distribution Services</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Efficient distribution networks designed to get your products to market quickly and
                      cost-effectively. We handle everything from order fulfillment to last-mile delivery across the
                      region.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
