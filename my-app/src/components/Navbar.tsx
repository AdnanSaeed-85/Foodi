"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linkClass2 = "border border-black hover:bg-green-500/[0.1] rounded-lg px-2 py-1 text-[12px] bg-gray-100";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  
  const linkClass = (href: string) =>
    `p-2 hover:text-green-700 hover:font-semibold transition-colors ${pathname === href ? "text-green-700 font-bold" : "text-black font-normal"}`;

  return (
    <div className="absolute top-0 left-0 w-full z-10 p-6 text-black">

      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-between">
        <div className="flex gap-6 justify-center flex-1">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about_us" className={linkClass("/about_us")}>About us</Link>
          <Link href="/blog" className={linkClass("/blog")}>Blog</Link>
          <Link href="/faq" className={linkClass("/faq")}>FAQ</Link>
          <Link href="/contact_us" className={linkClass("/contact_us")}>Contact us</Link>
        </div>
        <Link href="/signup" className="absolute right-[210px] p-1 px-5 bg-green-700 rounded-2xl text-white lg:text-[13px]">Signup</Link>
      </div>

      {/* Hamburger button */}
      <div className="lg:hidden flex justify-end relative">
        <button onClick={() => setOpen(!open)} className="text-2xl text-green-500">☰</button>

        {/* Dropdown */}
        {open && (
          <div className="absolute top-10 right-0 flex flex-col gap-2 bg-white p-2 rounded-lg shadow-lg border border-green-500 w-36">
            <Link href="/" className={linkClass2} onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about_us" className={linkClass2} onClick={() => setOpen(false)}>About us</Link>
            <Link href="/blog" className={linkClass2} onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/cart" className={linkClass2} onClick={() => setOpen(false)}>Cart</Link>
            <Link href="/contact_us" className={linkClass2} onClick={() => setOpen(false)}>Contact us</Link>
            <Link href="/faq" className={linkClass2} onClick={() => setOpen(false)}>FAQ</Link>
            <Link href="/signup" className={linkClass2} onClick={() => setOpen(false)}>Signup</Link>
            <Link href="/user_profile" className={linkClass2} onClick={() => setOpen(false)}>User Profile</Link>
          </div>
        )}
      </div>

    </div>
  );
}