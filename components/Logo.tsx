import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center shrink-0 group">
      <Image
        src="/contentlablogo.png" // Make sure this matches your file name exactly (e.g., .jpg)
        alt="ContentLab Logo"
        width={220} // You can adjust this width to make the logo bigger or smaller
        height={60}
        className="object-contain transition-transform duration-300 group-hover:scale-105"
        priority // Tells Next.js to load this immediately since it's in the navbar
      />
    </Link>
  );
}