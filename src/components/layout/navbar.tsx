import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-teal-700">Safa Dental</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-teal-600">
            Home
          </Link>
          <Link
            href="/treatments"
            className="text-sm font-medium hover:text-teal-600"
          >
            Treatments
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-teal-600"
          >
            About Us
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium hover:text-teal-600"
          >
            Smile Gallery
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-teal-600"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm text-slate-600">
            <Phone className="h-4 w-4" />
            <span>+91 97474 55869</span>
          </div>
          <Button size="sm" className="hidden md:inline-flex">
            Book Appointment
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
