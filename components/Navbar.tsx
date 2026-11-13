"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Left: Logo */}
        <Logo />

        {/* Center: Nav Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-neutral-100/80 p-1.5 border border-neutral-200/50">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  active
                    ? "bg-white text-brand-gold shadow-sm ring-1 ring-black/5" 
                    : "text-brand-charcoal hover:text-brand-gold hover:bg-white/50" 
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Call to Action */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact"
            className="hidden md:inline-flex rounded-full bg-brand-charcoal px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-brand-charcoal/90"
          >
            Book Now
          </Link>
        </div>

      </div>
    </header>
  );
}