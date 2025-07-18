import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Factory, ShoppingCart, Wheat, Pickaxe, HardHat, Pill } from "lucide-react"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Delivering tailored logistics solutions across key industries with specialized expertise and dedicated
              service
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Solutions for Every Industry</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Heroes Freight Forwarder Ltd. is proud to be the logistics partner for industry-leading brands across
              diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Manufacturing */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Factory className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Manufacturing</h3>
                <p className="text-gray-600 text-center">
                  Comprehensive logistics solutions for production lines, heavy machinery transport, and raw materials
                  management, ensuring uninterrupted operations and timely supply for your manufacturing processes.
                </p>
              </CardContent>
            </Card>

            {/* Retail & E-Commerce */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Retail & E-Commerce</h3>
                <p className="text-gray-600 text-center">
                  Efficient distribution and inventory control strategies to keep your shelves and warehouses stocked.
                  We support rapid turnover and customer satisfaction by ensuring your products reach their destination
                  swiftly.
                </p>
              </CardContent>
            </Card>

            {/* Agriculture */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wheat className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Agriculture & Perishables</h3>
                <p className="text-gray-600 text-center">
                  Specialized temperature-controlled shipping and timely delivery for sensitive products such as fruits,
                  vegetables, and dairy products, preserving freshness, quality, and market value.
                </p>
              </CardContent>
            </Card>

            {/* Mining */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Pickaxe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mining</h3>
                <p className="text-gray-600 text-center">
                  End-to-end transport solutions for mining operations, from exploration equipment and ore extraction to
                  the export of raw materials and heavy mining machinery, even to remote sites.
                </p>
              </CardContent>
            </Card>

            {/* Construction */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HardHat className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Construction & Heavy Equipment</h3>
                <p className="text-gray-600 text-center">
                  Expert project logistics for the transportation of construction materials, cranes, oversized loads,
                  and site machinery to remote and challenging locations, ensuring your projects stay on track.
                </p>
              </CardContent>
            </Card>

            {/* Pharmaceutical */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Pill className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Pharmaceutical & Healthcare</h3>
                <p className="text-gray-600 text-center">
                  Compliance-driven, temperature-controlled shipping for vital medical supplies, pharmaceuticals, and
                  sensitive healthcare equipment, ensuring product integrity and strict regulatory adherence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Serving Industries Across East Africa</h2>
            <p className="text-xl text-gray-600">
              From manufacturing to healthcare, we provide specialized logistics solutions
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <Image
              src="/images/port-sunset.jpeg"
              alt="Industrial port operations"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us for Your Industry */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Industries Choose Heroes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to "Your Cargo, Our Mission" ensures specialized solutions for every industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
              <p className="text-gray-600">Deep understanding of sector-specific requirements and regulations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
              <p className="text-gray-600">Customized logistics strategies designed for your specific industry needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Compliance Focus</h3>
              <p className="text-gray-600">Ensuring all shipments meet industry-specific regulatory requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
              <p className="text-gray-600">Successfully serving industry leaders across diverse sectors</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
