import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white py-12 md:py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ready for a healthier smile? Book an appointment or visit us at our
            Palakkad clinic.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Clinic Information
              </h2>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900">Address</h3>
                  <p className="text-slate-600">
                    Mars Corner, Shornur Road,
                    <br />
                    Opp Mothi Mahal, Noorani,
                    <br />
                    Palakkad - 678004
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <p className="text-slate-600">+91 97474 55869</p>
                  <p className="text-slate-600">+91 79079 92784</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Working Hours
                  </h3>
                  <p className="text-slate-600">Mon - Sat: 9:30 AM – 7:30 PM</p>
                  <p className="text-red-500">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-slate-200 rounded-xl overflow-hidden h-64 md:h-80 shadow-sm border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1672314546416!2d76.65476317451744!3d10.771212859068045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86dfa2618953f%3A0xe54261895a987627!2sSafa%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1709462231201!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-teal-100 h-fit">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Book an Appointment
            </h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-teal-500"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-slate-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-teal-500"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="treatment"
                  className="text-sm font-medium text-slate-700"
                >
                  Treatment Interest
                </label>
                <select
                  id="treatment"
                  className="w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-teal-500 bg-white"
                >
                  <option value="">Select a Treatment</option>
                  <option value="consultation">General Consultation</option>
                  <option value="root-canal">Root Canal</option>
                  <option value="braces">Braces/Aligners</option>
                  <option value="cosmetic">Cosmetic Dentistry</option>
                  <option value="extraction">Extraction</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="date"
                  className="text-sm font-medium text-slate-700"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-700"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  className="w-full min-h-[100px] rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-teal-500"
                  placeholder="Tell us more about your dental concern..."
                ></textarea>
              </div>

              <Button
                type="button"
                className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-6"
              >
                Confirm Booking
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
