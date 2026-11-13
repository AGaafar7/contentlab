import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-start gap-8 py-24 md:py-32">
      <span className="rounded-full border border-brand-gold/30 bg-brand-gold/5 px-4 py-1.5 text-sm font-bold tracking-widest uppercase text-brand-gold">
        Marketing Agency
      </span>
      
      <h1 className="max-w-4xl text-6xl font-black tracking-tighter md:text-7xl lg:text-8xl leading-[1.05]">
        WE BUILD CONTENT <br />
        <span className="text-brand-charcoal/30">THAT DRIVES</span> <br />
        <span className="text-brand-gold">REAL GROWTH.</span>
      </h1>
      
      <p className="max-w-2xl text-xl font-medium text-brand-charcoal/70 leading-relaxed">
        ContentLab is a premium creative production studio. We help forward-thinking brands scale through high-impact video, design, and strategy.
      </p>

      <div className="flex items-center gap-4 mt-4">
        <Link 
          href="/contact" 
          className="rounded-full bg-brand-charcoal px-8 py-4 text-sm font-bold text-brand-white transition-transform hover:scale-105 hover:bg-brand-charcoal/90"
        >
          Start a Project
        </Link>
        <Link 
          href="/gallery" 
          className="rounded-full border-2 border-brand-charcoal/10 px-8 py-4 text-sm font-bold text-brand-charcoal transition-colors hover:border-brand-gold hover:text-brand-gold"
        >
          View Our Work
        </Link>
      </div>
    </section>
  );
}