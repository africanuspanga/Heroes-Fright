import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#282828" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/logo-footer-hq.png"
              alt="Heroes Freight Forwarders Ltd."
              width={200}
              height={60}
              className="h-12 w-auto mb-3"
            />
            <p className="text-white text-sm mb-3 max-w-md">
              Your trusted partner in global logistics and supply chain solutions in Tanzania.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-white hover:text-blue-400 transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-white hover:text-blue-400 transition-colors">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="mailto:info@heroes.co.tz" className="text-white hover:text-blue-400 transition-colors">
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/about-us" className="text-white text-sm hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white text-sm hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-white text-sm hover:text-blue-400 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white text-sm hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-white">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-white text-xs">
                  <p>Feykatt Tower, 8th Floor</p>
                  <p>Morocco, Ali Hassan Mwinyi Rd</p>
                  <p>Dar es Salaam, Tanzania</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-white text-xs">+255 752 223 4292</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-white text-xs">info@heroes.co.tz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Heroes Freight Forwarders Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
