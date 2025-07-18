import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Heroes Freight Forwarder Ltd."
              width={200}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Your trusted partner in global logistics and supply chain solutions in Tanzania.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:info@heroes.co.tz" className="text-gray-300 hover:text-blue-400">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-blue-400">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>Feykatt Tower, 8th Floor</p>
                  <p>Morocco, Ali Hassan Mwinyi Rd</p>
                  <p>Dar es Salaam, Tanzania</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">+255 752 223 4292</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">info@heroes.co.tz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Heroes Freight Forwarder Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
