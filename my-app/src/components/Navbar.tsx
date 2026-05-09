"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `hover:text-green-700 hover:font-semibold transition-colors
    p-1
    text-[10px]
    sm:text-[12px]
    lg:text-[14px]
    ${pathname === href ? "text-green-700 font-bold" : "text-black font-normal"}`;

  return (
    <div className="absolute top-0 left-0 w-full z-10 text-black
      px-3 py-3
      sm:px-5 sm:py-4
      lg:px-6 lg:py-6">

      <div className="flex items-center justify-between w-full">

      <Image src="/for_home/logo.png" alt="" width={80} height={40}
              className="absolute
                w-[35px] top-4.5 left-8  
                sm:top-5 sm:left-8 sm:w-[60px] 
                md:w-[80px] md:top-5 md:left-22
                lg:top-[27px] lg:left-[170px]" />

        {/* Links */}
        <div className="flex items-center
          gap-1
          sm:gap-3
          lg:gap-6
          flex-1 justify-center">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about_us" className={linkClass("/about_us")}>About us</Link>
          <Link href="/blog" className={linkClass("/blog")}>Blog</Link>
          <Link href="/faq" className={linkClass("/faq")}>FAQ</Link>
          <Link href="/contact_us" className={linkClass("/contact_us")}>Contact us</Link>
        </div>

        {/* Signup */}
        <Link href="/signup"
          className="bg-green-700 text-white rounded-2xl shrink-0
            px-2 py-1 text-[9px]
            sm:px-4 sm:py-1.5 sm:text-[11px]
            lg:px-5 lg:py-2 lg:text-[13px]">
          Signup
        </Link>

      </div>

    </div>
  );
}