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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4">
        
        <div className="flex justify-start">
          <Logo />
        </div>

        <div className="flex justify-center">
          <nav className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2 py-1.5 shadow-sm">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
                    active
                      ? "bg-brand-charcoal text-brand-gold shadow-sm" 
                      : "text-brand-charcoal hover:bg-neutral-100" 
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex justify-end">
          {/* Optional: Add phone number or social icons here */}
        </div>
      </div>
    </header>
  );
}