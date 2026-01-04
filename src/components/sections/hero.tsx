"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden md:h-[700px] lg:h-[800px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero-bg.png")' }}
      >
        {/* Darker gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-900/80 to-teal-900/40" />
      </div>

      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center items-center px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-block rounded-full bg-teal-500/20 px-4 py-1.5 text-sm font-medium text-teal-50 backdrop-blur-sm border border-teal-500/30">
            ★ Palakkad's Most Trusted Dental Clinic
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-7xl">
            World-Class Dental Care,
            <br className="hidden md:block" /> Right Here in Palakkad
          </h1>

          <p className="text-lg text-slate-100 md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Pain-free treatments, expert surgeons, and a warm, comforting
            environment. Join 577+ happy patients who trust Safa Dental with
            their smiles.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row justify-center pt-4">
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-teal-900 hover:bg-white/10 hover:text-white h-14 px-8 bg-white/95 rounded-full"
            >
              <Link href="/treatments">View Treatments</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block relative w-[calc(100%+1.3px)] h-[60px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
