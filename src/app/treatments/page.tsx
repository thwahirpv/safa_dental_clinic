import { Button } from "@/components/ui/button"
import Link from "next/link"

const treatments = [
  {
    id: "root-canal",
    title: "Painless Root Canal Therapy",
    description: "Don't let tooth pain control your life. Our advanced rotary root canal treatments are faster, more comfortable, and highly effective at saving your natural teeth.",
    details: [
      "Single or multiple sitting options available",
      "Advanced anesthesia for pain-free experience",
      "Microscope-assisted precision",
    ],
    recovery: "Most patients return to normal activities the next day.",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry & Smile Design",
    description: "Achieve the smile of your dreams with our tailored cosmetic solutions.",
    details: [
      "Teeth Whitening",
      "Ceramic Veneers",
      "Composite Bonds (Gap Filling)",
      "Smile Makeovers",
    ],
    recovery: "Varies by procedure. Whitening is instant; veneers take 2 visits.",
  },
  {
    id: "orthodontics",
    title: "Orthodontics (Braces & Aligners)",
    description: "Straighten your teeth at any age. We offer traditional metal braces and modern invisible aligners.",
    details: [
      "Metal & Ceramic Braces",
      "Invisible Aligners (Clear)",
      "Retainers",
    ],
    recovery: "Adjustment period of 3-5 days after tightening/new trays.",
  },
  {
    id: "extraction",
    title: "Surgical Extractions",
    description: "Safe removal of impacted wisdom teeth or damaged teeth with minimal discomfort.",
    details: [
      "Impacted Tooth Extraction",
      "Wisdom Tooth Removal",
      "Post-extraction care guidance",
    ],
    recovery: "3-7 days for full gum healing.",
  },
]

export default function TreatmentsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-teal-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Our Treatments</h1>
        <p className="mt-4 text-teal-100 max-w-2xl mx-auto px-4">
          Expert dental care delivered with precision and compassion. Learn more about our procedures below.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12 space-y-12">
        {treatments.map((item) => (
          <div key={item.id} id={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden md:flex">
            <div className="p-8 md:w-3/4 space-y-4">
              <h2 className="text-2xl font-bold text-slate-800">{item.title}</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{item.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                    <h3 className="font-semibold text-teal-700 mb-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                        {item.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                        ))}
                    </ul>
                </div>
                <div>
                     <h3 className="font-semibold text-teal-700 mb-2">Recovery & Care</h3>
                     <p className="text-slate-600 text-sm italic">{item.recovery}</p>
                </div>
              </div>
            </div>
            <div className="bg-teal-50 p-8 md:w-1/4 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-slate-100">
                <p className="text-center text-sm text-slate-500 mb-4">Have questions about this procedure?</p>
                <Button className="w-full">Book Consultation</Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 mt-16 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Not sure what you need?</h3>
        <p className="text-slate-600 mb-8">Schedule a consultation and let our experts guide you.</p>
        <Link href="/contact">
            <Button size="lg" variant="outline">Contact Us Today</Button>
        </Link>
      </div>
    </div>
  )
}
