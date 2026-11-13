import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 shrink-0 group">
      {/* Icon */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        {/* Charcoal Camera/Aperture shape */}
        <path d="M 50 5 C 25 5 5 25 5 50 C 5 75 25 95 50 95 C 62 95 74 90 82 82 L 60 60 L 50 95 Z" fill="#1A1A1A" />
        <path d="M 5 50 C 5 25 25 5 50 5 L 30 30 Z" fill="#1A1A1A" />
        <path d="M 50 5 C 75 5 95 25 95 50 L 70 50 Z" fill="#1A1A1A" />
        <path d="M 95 50 C 95 75 75 95 50 95 L 50 70 Z" fill="#1A1A1A" />
        <path d="M 5 50 C 5 75 25 95 50 95 L 30 70 Z" fill="#1A1A1A" />
        
        {/* Gold Play Button & Soundwaves */}
        <polygon points="35,35 35,65 65,50" fill="#C5A059" />
        <rect x="75" y="40" width="4" height="20" rx="2" fill="#C5A059" />
        <rect x="83" y="35" width="4" height="30" rx="2" fill="#C5A059" />
        <rect x="91" y="30" width="4" height="40" rx="2" fill="#C5A059" />
      </svg>

      {/* Text */}
      <div className="flex flex-col justify-center">
        <span className="text-2xl font-black tracking-tight leading-none text-brand-charcoal">
          CONTENT<span className="ml-1 font-light text-brand-charcoal">LAB</span>
        </span>
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-brand-gold mt-1">
          Creative Content Production Studio
        </span>
      </div>
    </Link>
  );
}