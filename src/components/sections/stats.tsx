import { Star, ShieldCheck, Microscope } from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "577+",
    label: "5-Star Reviews",
    description: "Rated 4.9/5 on Google",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Safety Protocols",
    description: "Sterilized & Hygienic",
  },
  {
    icon: Microscope,
    value: "Modern",
    label: "Technology",
    description: "Latest Dental Tech",
  },
];

export function StatsSection() {
  return (
    <section className="bg-teal-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-700">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
