import Link from "next/link";
import {
  ArrowRight,
  Activity,
  Smile,
  Scissors,
  HeartPulse,
} from "lucide-react";

const treatments = [
  {
    title: "Root Canal Therapy",
    description:
      "Save your natural tooth with our painless root canal treatments using modern rotary endodontics.",
    icon: Activity,
    link: "/treatments#root-canal",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with veneers, teeth whitening, and digital smile design.",
    icon: Smile,
    link: "/treatments#cosmetic",
  },
  {
    title: "Orthodontics",
    description:
      "Fix gaps and misalignment with metal braces, ceramic braces, or invisible aligners.",
    icon: Scissors, // Placeholder icon
    link: "/treatments#orthodontics",
  },
  {
    title: "Dental Implants",
    description:
      "Permanent, natural-looking solution for missing teeth. Restore your confidence to eat and smile.",
    icon: HeartPulse, // Placeholder icon
    link: "/treatments#implants",
  },
];

export function FeaturedTreatments() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6 space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive Dental Care
          </h2>
          <p className="text-lg text-slate-600">
            From routine checkups to complex surgeries, we provide a full range
            of dental services under one roof.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="group relative rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-teal-200"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <treatment.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {treatment.title}
              </h3>
              <p className="mb-4 text-sm text-slate-500 leading-relaxed">
                {treatment.description}
              </p>
              <Link
                href={treatment.link}
                className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-800"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/treatments"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50 hover:text-teal-700"
          >
            View All Treatments
          </Link>
        </div>
      </div>
    </section>
  );
}
