import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center shrink-0 group">
      <Image
        src="/contentlablogo.png" 
        alt="ContentLab Logo"
        width={260} // Made it bigger
        height={70}
        // mix-blend-multiply removes the white box background
        className="w-auto h-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        priority 
      />
    </Link>
  );
}