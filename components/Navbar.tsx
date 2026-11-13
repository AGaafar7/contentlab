"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
  { href: "/you", label: "You" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-white/95 backdrop-blur border-b border-brand-charcoal/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <Logo />

        {/* Right: Circular pill nav */}
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-1 rounded-full border border-brand-charcoal/10 bg-brand-white px-2 py-1.5 shadow-sm"
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-5 py-2.5 text-sm font-bold tracking-wide transition-all duration-300 ${
                  active
                    ? "bg-brand-charcoal text-brand-gold shadow-md"
                    : "text-brand-charcoal hover:bg-brand-gold/10 hover:text-brand-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}