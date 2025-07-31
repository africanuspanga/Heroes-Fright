import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Pill, Shirt, Car, Wine, Hammer, Fuel, Apple, Factory, Smartphone } from "lucide-react"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Industries We Serve</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Delivering tailored logistics solutions across key industries with specialized expertise and dedicated
              service
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Specialized Solutions for Every Industry
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Heroes Freight Forwarder Ltd. is proud to be the logistics partner for industry-leading brands across
              diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Pharma & Health */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Pill className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  Pharma & Health
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Compliance-driven, temperature-controlled shipping for vital medical supplies, pharmaceuticals, and
                  sensitive healthcare equipment, ensuring product integrity and strict regulatory adherence.
                </p>
              </CardContent>
            </Card>

            {/* Fashion and Lifestyle */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Shirt className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  Fashion & Lifestyle
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Fast, reliable logistics for fashion brands, textiles, and lifestyle products. We understand seasonal
                  demands and ensure your products reach markets on time for maximum impact.
                </p>
              </CardContent>
            </Card>

            {/* Automotive and Aviation */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Car className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  Automotive & Aviation
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Specialized handling of automotive parts, vehicles, and aviation components. Our expertise ensures
                  safe transport of high-value, precision-engineered products.
                </p>
              </CardContent>
            </Card>

            {/* Wine and Beverages */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Wine className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  Wine & Beverages
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Temperature-controlled logistics for wines, spirits, and beverages. We maintain optimal conditions to
                  preserve quality and ensure compliance with import regulations.
                </p>
              </CardContent>
            </Card>

            {/* Mining */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Hammer className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Mining</h3>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  End-to-end transport solutions for mining operations, from exploration equipment and ore extraction to
                  the export of raw materials and heavy mining machinery, even to remote sites.
                </p>
              </CardContent>
            </Card>

            {/* Oil and Gas */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Fuel className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Oil & Gas</h3>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Specialized logistics for the energy sector, handling equipment, materials, and products with the
                  highest safety standards and regulatory compliance requirements.
                </p>
              </CardContent>
            </Card>

            {/* Food and Perishables */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Apple className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  Food & Perishables
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Specialized temperature-controlled shipping and timely delivery for sensitive products such as fruits,
                  vegetables, dairy products, and processed foods, preserving freshness and quality.
                </p>
              </CardContent>
            </Card>

            {/* Industrial Logistics */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Factory className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  Industrial Logistics
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Comprehensive logistics solutions for heavy machinery, industrial equipment, and manufacturing
                  components. We handle oversized loads and complex project logistics.
                </p>
              </CardContent>
            </Card>

            {/* Consumer Electronics */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  Consumer Electronics
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Secure, efficient logistics for electronics, technology products, and consumer devices. We ensure
                  proper handling and protection of sensitive electronic equipment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Image Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Serving Industries Across East Africa</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              From pharmaceuticals to consumer electronics, we provide specialized logistics solutions
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <Image
              src="/images/port-sunset.jpeg"
              alt="Industrial port operations"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us for Your Industry */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Industries Choose Heroes</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to "Your Cargo, Our Mission" ensures specialized solutions for every industry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Industry Expertise</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Deep understanding of sector-specific requirements and regulations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Tailored Solutions</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Customized logistics strategies designed for your specific industry needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Compliance Focus</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Ensuring all shipments meet industry-specific regulatory requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Proven Track Record</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Successfully serving industry leaders across diverse sectors
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
