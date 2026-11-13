import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 md:pt-20">
        <div className="flex flex-col items-start gap-8">
          <span className="rounded-full border border-brand-gold/30 bg-brand-gold/5 px-4 py-1.5 text-sm font-bold tracking-widest uppercase text-brand-gold">
            Creative Content Studio
          </span>
          
          <h1 className="text-5xl font-black tracking-tighter md:text-7xl leading-[1.05]">
            WHERE IDEAS <br />
            BECOME <span className="text-brand-gold">CONTENT.</span>
          </h1>
          
          <p className="max-w-lg text-lg font-medium text-brand-charcoal/70 leading-relaxed">
            We are a premium production studio specializing in high-impact video, modeling photography, podcasts, and social media strategy. 
          </p>

          <div className="flex items-center gap-4 mt-2">
            <Link 
              href="/gallery" 
              className="rounded-full bg-brand-charcoal px-8 py-4 text-sm font-bold text-brand-white transition-transform hover:scale-105 hover:bg-brand-charcoal/90"
            >
              View Our Work
            </Link>
            <Link 
              href="/contact" 
              className="rounded-full border-2 border-brand-charcoal/10 px-8 py-4 text-sm font-bold text-brand-charcoal transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              Book a Session
            </Link>
          </div>
        </div>

        {/* Hero Image - Camera Silhouette */}
        <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src="/camera.jpg" 
            alt="Content Lab Production Setup"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </section>

      {/* QUICK SERVICES GRID */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-neutral-200 pb-6">
          <h2 className="text-3xl font-black tracking-tight">What We Do</h2>
          <Link href="/services" className="text-sm font-bold text-brand-gold hover:underline">
            View All Packages &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Reels & Video", desc: "High-end video production for social media.", icon: "🎬" },
            { title: "Modeling", desc: "Professional studio and outdoor photoshoots.", icon: "📸" },
            { title: "Podcast", desc: "Multi-cam podcast recording and editing.", icon: "🎙️" },
            { title: "Rentals", desc: "Premium studio locations for your next project.", icon: "📍" },
          ].map((srv, i) => (
            <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-brand-gold/30 transition-colors">
              <span className="text-3xl">{srv.icon}</span>
              <h3 className="font-bold text-lg">{srv.title}</h3>
              <p className="text-sm text-neutral-500">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STUDIO TEASER SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-[400px] rounded-3xl overflow-hidden group">
           <Image src="/orange-chair.jpg" alt="Studio Setup" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
           <div className="absolute inset-0 bg-black/20 flex items-end p-8">
             <h3 className="text-white text-2xl font-black">Premium Sets</h3>
           </div>
        </div>
        <div className="relative h-[400px] rounded-3xl overflow-hidden group">
           <Image src="/two-chairs.jpg" alt="Studio Setup 2" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
           <div className="absolute inset-0 bg-black/20 flex items-end p-8">
             <h3 className="text-white text-2xl font-black">Cinematic Lighting</h3>
           </div>
        </div>
      </section>
    </div>
  );
}