export default function GalleryPage() {
  const images = [
    {
      src: "/placeholder-1.jpg",
      caption: "Smile Makeover",
      category: "Cosmetic",
    },
    {
      src: "/placeholder-2.jpg",
      caption: "Invisalign Results",
      category: "Orthodontics",
    },
    {
      src: "/placeholder-3.jpg",
      caption: "Ceramic Veneers",
      category: "Cosmetic",
    },
    {
      src: "/placeholder-4.jpg",
      caption: "Reception Area",
      category: "Clinic",
    },
    { src: "/placeholder-5.jpg", caption: "Dental Chair", category: "Clinic" },
    {
      src: "/placeholder-6.jpg",
      caption: "Sterilization Room",
      category: "Clinic",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-teal-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Smile Gallery</h1>
        <p className="mt-4 text-teal-100 max-w-2xl mx-auto px-4">
          Witness the transformations and see our modern facilities.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-xl bg-slate-200 aspect-square"
          >
            {/* Placeholder for actual image */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
              Image: {img.caption}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <p className="text-white font-bold text-lg">{img.caption}</p>
                <p className="text-teal-400 text-sm">{img.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-slate-600 mb-4">Real results from real patients.</p>
      </div>
    </div>
  );
}
