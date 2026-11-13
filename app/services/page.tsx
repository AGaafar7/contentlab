import Link from "next/link";

export default function ServicesPage() {
  const packages = [
    {
      title: "Modeling Photography",
      tag: "تصوير مودلينج",
      items: [
        { name: "10 Edited Photos", price: "1,200 EGP" },
        { name: "20 Edited Photos", price: "2,000 EGP" },
        { name: "30 Edited Photos", price: "2,800 EGP" },
      ],
      note: "Includes studio, photographer, and basic editing. Model fee, makeup, and styling not included."
    },
    {
      title: "Podcast Studio",
      tag: "تصوير بودكاست",
      items: [
        { name: "1 Hour", price: "1,000 EGP" },
        { name: "2 Hours", price: "1,800 EGP" },
      ],
      note: "Professional editing priced separately based on episode length. Advanced graphics/VFX on request."
    },
    {
      title: "Reels Production",
      tag: "تصوير ريلز",
      items: [
        { name: "1 Studio Reel", price: "800 EGP" },
        { name: "2 Studio Reels", price: "1,500 EGP" },
        { name: "3 Reels", price: "2,200 EGP" },
        { name: "4 Reels ⭐", price: "2,800 EGP" },
        { name: "5 Reels", price: "3,500 EGP" },
        { name: "6 Reels", price: "4,000 EGP" },
        { name: "8 Reels", price: "5,000 EGP" },
        { name: "10 Reels", price: "6,000 EGP" },
        { name: "12 Reels", price: "7,000 EGP" },
        { name: "15 Reels", price: "8,500 EGP" },
      ],
      note: "Outdoor reels priced separately. Includes professional shooting, video editing, social media ready format, and high quality delivery."
    },
    {
      title: "Outdoor Photography",
      tag: "تصوير خارجي",
      items: [
        { name: "1 Hour (up to 10 photos)", price: "1,200 EGP" },
        { name: "2 Hours (up to 20 photos)", price: "2,200 EGP" },
        { name: "4 Hours (up to 40 photos)", price: "4,000 EGP" },
        { name: "Outdoor Reels", price: "From 1,200 EGP" },
      ],
      note: "Prices do not include model fees, location entry fees, or standard travel outside our zone."
    },
    {
      title: "Social Interactive Board",
      tag: "سبورة تفاعلية",
      items: [
        { name: "1 Hour", price: "600 EGP" },
        { name: "2 Hours", price: "1,100 EGP" },
      ],
      note: "Designed for lectures and educational content. Reels cannot be added to board packages. Extra editing quoted on request."
    },
    {
      title: "Location Rental",
      tag: "تأجير لوكيشن",
      items: [
        { name: "Location 1 (Premium)", price: "1,500 EGP/hr" },
        { name: "Location 2", price: "800 EGP/hr" },
        { name: "Location 3", price: "1,000 EGP/hr" },
        { name: "Location 4", price: "1,000 EGP/hr" },
      ],
      note: "Setup time and extra services can be added upon request."
    }
  ];

  return (
    <div className="py-16 md:py-24 flex flex-col gap-16">
      <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Services & Pricing</h1>
        <p className="text-lg text-neutral-500 font-medium">
          Transparent pricing for premium production. All packages are customizable to fit your brand&apos;s specific needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <div key={i} className="flex flex-col p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6 border-b border-neutral-100 pb-6">
              <h2 className="text-2xl font-black">{pkg.title}</h2>
              <span className="text-sm font-bold text-brand-gold tracking-widest uppercase">{pkg.tag}</span>
            </div>
            
            <ul className="flex flex-col gap-4 mb-8 flex-grow">
              {pkg.items.map((item, j) => (
                <li key={j} className="flex justify-between items-center text-sm">
                  <span className="font-medium text-neutral-600">{item.name}</span>
                  <span className="font-bold text-brand-charcoal whitespace-nowrap pl-4">{item.price}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6 border-t border-neutral-100">
              <p className="text-xs text-neutral-400 leading-relaxed italic">{pkg.note}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services & CTA */}
      <div className="mt-12 rounded-3xl bg-brand-charcoal text-white p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2 max-w-xl">
          <h3 className="text-3xl font-black">Additional Services</h3>
          <p className="text-white/70">Professional video editing, Color Grading, Motion Graphics, Ad Scriptwriting, Product Photography, and Social Media Management.</p>
        </div>
        <Link href="/contact" className="whitespace-nowrap rounded-full bg-brand-gold px-8 py-4 text-sm font-bold text-brand-charcoal transition-transform hover:scale-105">
          Get a Custom Quote
        </Link>
      </div>
    </div>
  );
}