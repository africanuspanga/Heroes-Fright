import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Globe, Lightbulb, Shield } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              About Heroes Freight Forwarders Ltd.
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Your Reliable Logistics Partner in Tanzania and Beyond
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600 text-base sm:text-lg">
                <p>
                  At Heroes Freight Forwarders Ltd., we pride ourselves on being a leading logistics and freight
                  forwarding company dedicated to providing exceptional service across Tanzania and beyond. Located in
                  the bustling heart of Dar es Salaam, at the Feykatt Tower on Ali Hassan Mwinyi Rd, we are
                  strategically positioned to serve your global and local logistics needs.
                </p>
                <p>
                  Our journey is built on a foundation of integrity, reliability, and an unwavering commitment to our
                  clients' success. We understand the complexities of modern supply chains and the critical role
                  efficient logistics plays in your business operations.
                </p>
                <p>
                  With years of expertise and a deep understanding of local and international regulations, our team of
                  dedicated professionals ensures your cargo moves smoothly, securely, and on time, every time. We are
                  more than just a service provider; we are your strategic partner.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/dar-es-salaam-skyline.jpeg"
                alt="Modern Dar es Salaam skyline showing the commercial district"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Vision */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  To be the most trusted and innovative freight forwarding and logistics provider in East Africa,
                  consistently exceeding client expectations through exceptional service and cutting-edge solutions.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  To deliver comprehensive, reliable, and cost-effective logistics solutions that empower businesses to
                  thrive in the global marketplace, ensuring transparency, efficiency, and customer satisfaction at
                  every step.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Values</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Integrity, Reliability, Innovation, and Customer Focus drive everything we do, ensuring we build
                  lasting partnerships based on trust and excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Detail */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our every action and decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We uphold transparency and honesty in every operation, building trust with our clients and partners
                  through ethical business practices.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Your cargo arrives on time, every time, through meticulous planning and execution that you can depend
                  on.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We embrace continuous improvement through cutting-edge technology and adaptive solutions to meet
                  evolving logistics demands.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Customer Focus</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We provide tailored solutions, clear communication, and dedicated support for your success, making
                  your needs our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Image */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Strategically Located</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Based in the heart of Dar es Salaam, Tanzania's commercial capital
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <Image
              src="/images/dar-es-salaam-sunset-skyline.jpeg"
              alt="Dar es Salaam sunset skyline showing the modern commercial district"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
