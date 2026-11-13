import Image from "next/image";

const galleryImages = [
  { src: "/camera.jpg", alt: "Film Camera Setup", className: "md:col-span-2 md:row-span-2" },
  { src: "/orange-chair.jpg", alt: "Orange Chair Setup", className: "col-span-1 row-span-2" },
  { src: "/red-box.jpg", alt: "Red Silhouette", className: "col-span-1" },
  { src: "/film-strip.jpg", alt: "Film Strip Spiral", className: "col-span-1 row-span-2" },
  { src: "/two-chairs.jpg", alt: "Studio Chairs Setup", className: "md:col-span-2" },
  { src: "/blue-chair.jpg", alt: "Blue Light Chair", className: "col-span-1 row-span-2" },
  { src: "/podcast-sofa.jpg", alt: "Podcast Sofa Setup", className: "md:col-span-2" },
  { src: "/wall-art.jpg", alt: "Wall Art Setup", className: "col-span-1 row-span-2" },
];

export default function GalleryPage() {
  return (
    <div className="py-16 md:py-24 flex flex-col gap-12">
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Our Portfolio</h1>
        <p className="text-lg text-neutral-500 font-medium">
          A glimpse into the worlds we create. From high-fashion shoots to cinematic studio setups.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {galleryImages.map((img, i) => (
          <div 
            key={i} 
            className={`relative group overflow-hidden rounded-2xl bg-neutral-100 ${img.className}`}
          >
            <Image
  src={img.src}
  alt={img.alt}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add this line
  className="object-cover transition-transform duration-700 group-hover:scale-105"
/>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-bold text-sm tracking-widest uppercase">{img.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}