import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center shrink-0 group">
      <Image
        src="/contentlablogo.png" 
        alt="ContentLab Logo"
        width={220} 
        height={60}
        className="w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105" // Added w-auto h-auto
        priority 
      />
    </Link>
  );
}