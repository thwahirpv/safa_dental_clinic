"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-teal-700">Safa Dental</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/treatments"
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            Treatments
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            Smile Gallery
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm text-slate-600">
            <Phone className="h-4 w-4" />
            <span>+91 97474 55869</span>
          </div>
          <Button
            size="sm"
            className="hidden md:inline-flex bg-teal-600 hover:bg-teal-700"
          >
            Book Appointment
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-white overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-teal-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/treatments"
                className="text-sm font-medium hover:text-teal-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Treatments
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-teal-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-medium hover:text-teal-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Smile Gallery
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-teal-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone className="h-4 w-4" />
                  <span>+91 97474 55869</span>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Book Appointment
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
