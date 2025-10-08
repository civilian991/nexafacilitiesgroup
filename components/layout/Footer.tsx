import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/nexa-logo.png"
              alt="Nexa Facilities Group"
              width={200}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400">
              Expert HVAC/R maintenance for commercial stores across multiple states.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#hvac" className="text-gray-400 hover:text-white transition-colors">
                  HVAC Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services#refrigeration" className="text-gray-400 hover:text-white transition-colors">
                  Refrigeration Systems
                </Link>
              </li>
              <li>
                <Link href="/services#emergency" className="text-gray-400 hover:text-white transition-colors">
                  Emergency Service
                </Link>
              </li>
              <li>
                <Link href="/services#project" className="text-gray-400 hover:text-white transition-colors">
                  Project Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">📍 4308 Hudson Street<br />Metairie, LA 70006</li>
              <li className="text-gray-400">📞 1-504-688-2541</li>
              <li className="text-gray-400">✉️ info@nexafacilitiesgroup.com</li>
              <li className="text-gray-400">🕐 24/7 Emergency Service</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Nexa Facilities Group. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}