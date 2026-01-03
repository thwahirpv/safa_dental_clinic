import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Bio */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Safa Dental Clinic
            </h2>
            <p className="text-sm text-slate-400">
              Advanced dental care with a personal touch. Creating beautiful
              smiles in Palakkad with expert treatments and modern technology.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-teal-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments"
                  className="hover:text-teal-400 transition-colors"
                >
                  Treatments
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-teal-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-teal-400 transition-colors"
                >
                  Smile Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-teal-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-teal-500 shrink-0" />
                <span>
                  Mars Corner, Shornur Road,
                  <br />
                  Opp Mothi Mahal, Noorani,
                  <br />
                  Palakkad - 678004
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-teal-500 shrink-0" />
                <span>+91 97474 55869 / +91 79079 92784</span>
              </li>
              {/* Email if available, otherwise omitted or placeholder */}
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Opening Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span>9:30 AM - 7:30 PM</span>
              </li>
              <li className="flex justify-between text-slate-500">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Safa Dental Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
