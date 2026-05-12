"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `hover:text-green-700 hover:font-semibold transition-colors
    p-1
    text-[9px]
    sm:text-[12px]
    lg:text-[14px]
    ${href === pathname ? "font-bold text-[#396C03]" : "font-normal"}
    ${pathname === "/about_us" ? "text-white" : "text-black"}`;
  return (
    <div className="absolute top-0 left-0 w-full z-10 text-black
      px-3 py-3
      sm:px-5 sm:py-4
      lg:px-6 lg:py-6">

      <div className="flex items-center justify-between w-full">

      {pathname === "/about_us" ? (
        <span className="absolute font-semibold
          text-[10px] top-4 left-4
          sm:text-[15px] sm:top-4 sm:left-8
          md:text-[18px] md:top-4 md:left-22
          lg:text-[22px] lg:top-6 lg:left-[170px]">
          <span className="text-white">Food</span>
          <span style={{ color: "#396C03" }}>tuck</span>
        </span>
      ) : (
        <Image src="/for_home/logo.png" alt="" width={80} height={40}
          className="absolute
            w-[40px] top-4 left-8.5  
            sm:top-5 sm:left-8 sm:w-[60px] 
            md:w-[80px] md:top-5 md:left-22
            lg:top-[27px] lg:left-[170px]" />
      )}

        <div className="flex items-center
          gap-1
          sm:gap-3
          lg:gap-6
          flex-1 justify-center">
          <Link href="/" className={linkClass("/")}style={pathname === "/" ? { color: "#396C03" } : undefined}>Home</Link>
          <Link href="/about_us" className={linkClass("/about_us")} style={pathname === "/about_us" ? { color: "#396C03" } : undefined}>About us</Link>
          <Link href="/blog" className={linkClass("/blog")} style={pathname === "/blog" ? { color: "#396C03" } : undefined}>Blog</Link>
          <Link href="/faq" className={linkClass("/faq")} style={pathname === "/faq" ? { color: "#396C03" } : undefined}>FAQ</Link>
          <Link href="/contact_us" className={linkClass("/contact_us")} style={pathname === "/contact_us" ? { color: "#396C03" } : undefined}>Contact us</Link>
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