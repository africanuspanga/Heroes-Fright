import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Globe, Zap, Heart, Shield, Clock, Award, CheckCircle } from "lucide-react"

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Why Partner with Heroes Freight Forwarder?</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Choosing the right logistics partner is crucial for your business's success. Discover the distinct
              advantages that set us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Distinct Advantages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your cargo is in the safest hands with our commitment to "Your Cargo, Our Mission"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Expertise */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Expertise</h3>
                    <p className="text-gray-600 text-lg">
                      Our team comprises licensed agents with profound knowledge of Tanzanian (TRA) and global customs
                      regulations. We navigate complex procedures with ease, ensuring compliance and efficiency for
                      every shipment, minimizing delays and maximizing smooth transit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Global Reach */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h3>
                    <p className="text-gray-600 text-lg">
                      Leverage our vast network of trusted international partners. This extensive reach ensures seamless
                      shipments and connectivity to virtually any destination worldwide, expanding your market access
                      and simplifying your global trade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Technology */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Technology</h3>
                    <p className="text-gray-600 text-lg">
                      We employ cutting-edge technology for real-time tracking and automated notifications at every
                      stage of your shipment. Stay informed and in control from pick-up to delivery, with complete
                      visibility over your cargo's journey.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Focus */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Unrivaled Customer Focus</h3>
                    <p className="text-gray-600 text-lg">
                      Your needs are our priority. We are committed to providing tailored solutions, clear and proactive
                      communication, and dedicated support. Our goal is your complete satisfaction and business success,
                      building long-term partnerships based on trust.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proven Reliability */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Reliability</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Our track record speaks for itself. We are dedicated to ensuring your cargo arrives on time, every
                  time, through meticulous planning, secure handling, and proactive problem-solving. You can rely on us
                  to deliver on our promise.
                </p>
                <p>
                  We have differentiated ourselves in the marketplace by adopting a culture of excellence in handling
                  and protecting your cargo, ensuring that every shipment receives the attention and care it deserves.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">On-time delivery guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Secure cargo handling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Proactive problem-solving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Meticulous planning</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/container-ship.jpeg"
                alt="Reliable container shipping"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Benefits of Partnering with Heroes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that comes with choosing a truly dedicated logistics partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Compliant</h3>
              <p className="text-gray-600">Fully licensed clearing agents ensuring complete regulatory compliance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Complete visibility and automated notifications throughout your shipment journey
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
              <p className="text-gray-600">Trusted by industry-leading brands across diverse sectors</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">Extensive international partnerships for worldwide connectivity</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals with deep logistics and customs knowledge</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p className="text-gray-600">Personalized service and support tailored to your specific needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Experience the Heroes Difference</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the industry leaders who trust Heroes Freight Forwarder for their logistics needs
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
