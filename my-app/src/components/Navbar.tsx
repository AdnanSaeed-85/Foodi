"use client";
import { useState } from "react";
import Link from "next/link";

const linkClass = "border border-black hover:bg-green-500/[0.1] rounded-lg px-4 py-1";
const linkClass2 = "border border-black hover:bg-green-500/[0.1] rounded-lg px-2 py-1 text-[12px] bg-gray-100";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-10 p-6 text-black">
      {/* Desktop */}
      <div className="hidden lg:flex gap-6 justify-center">
        <Link href="/" className={linkClass}>Home</Link>
        <Link href="/about_us" className={linkClass}>About us</Link>
        <Link href="/blog" className={linkClass}>Blog</Link>
        <Link href="/cart" className={linkClass}>Cart</Link>
        <Link href="/contact_us" className={linkClass}>Contact us</Link>
        <Link href="/faq" className={linkClass}>FAQ</Link>
        <Link href="/signup" className={linkClass}>Signup</Link>
        <Link href="/user_profile" className={linkClass}>User Profile</Link>
      </div>

      {/* Hamburger button */}
      <div className="lg:hidden flex justify-end relative">
        <button onClick={() => setOpen(!open)} className="text-2xl text-green-500">☰</button>

        {/* Dropdown - right below the button */}
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