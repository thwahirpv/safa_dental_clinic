import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { FeaturedTreatments } from "@/components/sections/featured-treatments";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <StatsSection />
      <FeaturedTreatments />

      {/* Why Choose Us Section - simplified for now */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Your Smile is Our Priority
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 mb-8">
            At Safa Dental Clinic, we combine years of experience with modern
            technology to provide the best dental care in Palakkad.
          </p>
        </div>
      </section>
    </main>
  );
}
