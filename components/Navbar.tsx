"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    /* Removed the bottom border and kept the white background */
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* 3-column grid: Logo Left, Nav Center, Empty Right */}
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-5">
        
        {/* Left: Logo */}
        <div className="flex justify-start">
          <Logo />
        </div>

        {/* Center: Circular pill nav */}
        <div className="flex justify-center">
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-2 py-1.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
          >
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 ${
                    active
                      ? "bg-brand-gold/10 text-brand-gold" // Subtle gold background and text for active
                      : "text-brand-charcoal hover:bg-neutral-100" // Black text for inactive, light grey hover
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: Empty div to keep the Navbar perfectly centered */}
        <div className="flex justify-end">
          {/* You can add a "Log In" button here later if you want */}
        </div>

      </div>
    </header>
  );
}