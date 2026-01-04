import { Button } from "@/components/ui/button";
import { Users, Clock, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          About Safa Dental Clinic
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Founded with a mission to provide world-class dental care in Palakkad,
          we pride ourselves on our patient-centric approach, modern technology,
          and highly skilled team.
        </p>
      </div>

      {/* Values */}
      <div className="bg-teal-50 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-teal-600">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Patient-First Care
            </h3>
            <p className="text-slate-600">
              We listen to your concerns and customize treatments to ensure your
              comfort and satisfaction.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-teal-600">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Expert Team</h3>
            <p className="text-slate-600">
              Our doctors are specialists in their fields, continuously trained
              in the latest dental advancements.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-teal-600">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Timely Service</h3>
            <p className="text-slate-600">
              We respect your time. Efficient scheduling means minimal waiting
              times for your appointments.
            </p>
          </div>
        </div>
      </div>

      {/* Doctors */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Meet Our Specialists
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Dr. Natheer */}
          <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-64 bg-slate-200 w-full flex items-center justify-center text-slate-400">
              {/* Placeholder for Doctor Image */}
              <span>Photo</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">Dr. Natheer</h3>
              <p className="text-teal-600 font-medium mb-4">
                Root Canal Specialist
              </p>
              <p className="text-slate-600 text-sm">
                Known for his gentle approach and expertise in complex root
                canal treatments. Patients praise his ability to explain
                procedures clearly.
              </p>
            </div>
          </div>

          {/* Dr. Silpa */}
          <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-64 bg-slate-200 w-full flex items-center justify-center text-slate-400">
              {/* Placeholder for Doctor Image */}
              <span>Photo</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Dr. Silpa Saseendrakumar
              </h3>
              <p className="text-teal-600 font-medium mb-4">Dental Surgeon</p>
              <p className="text-slate-600 text-sm">
                Professional and caring, Dr. Silpa specializes in restorative
                dentistry and ensuring patient comfort during procedures.
              </p>
            </div>
          </div>

          {/* General Team */}
          <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-64 bg-slate-200 w-full flex items-center justify-center text-slate-400">
              {/* Placeholder for Doctor Image */}
              <span>Photo</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">Support Team</h3>
              <p className="text-teal-600 font-medium mb-4">
                Hygienists & Assistants
              </p>
              <p className="text-slate-600 text-sm">
                Our friendly staff ensures a welcoming environment and smooth
                experience from the moment you walk in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
