'use client';

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-16 flex items-center">
          {/* Logo */}
          <div className="flex items-center flex-1">
            <Link
              href="/"
              className="inline-flex items-center text-white no-underline text-lg font-medium"
            >
              <span className="h-8 w-8 flex items-center justify-center mr-3 font-bold tracking-wider">
                LOGO
              </span>
            </Link>
          </div>

          {/* Center Nav */}
          <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex space-x-8">
            <Link href="#whoweare" className="text-sm hover:opacity-80">Who We Are</Link>
            <Link href="#technology" className="text-sm hover:opacity-80">Technology</Link>
            <Link href="#solutions" className="text-sm hover:opacity-80">Solutions</Link>
            <Link href="#newsroom" className="text-sm hover:opacity-80">Newsroom</Link>
            <Link href="#careers" className="text-sm hover:opacity-80">Careers</Link>
          </nav>

          {/* Right buttons */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block">
              <Link
                href="#get-started"
                className="inline-flex items-center gap-2 border border-white rounded-full px-4 py-2 text-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <span>Get Started</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M5 12h14M13 5l6 7-6 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-expanded={open}
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                className={`h-6 w-6 transition-transform ${open ? "rotate-90" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-white/5 bg-transparent`}
      >
        <div className="px-4 pt-3 pb-4 space-y-1">
          <Link href="#whoweare" className="block px-3 py-2 text-base">Who We Are</Link>
          <Link href="#technology" className="block px-3 py-2 text-base">Technology</Link>
          <Link href="#solutions" className="block px-3 py-2 text-base">Solutions</Link>
          <Link href="#newsroom" className="block px-3 py-2 text-base">Newsroom</Link>
          <Link href="#careers" className="block px-3 py-2 text-base">Careers</Link>
          <div className="pt-2">
            <Link
              href="#get-started"
              className="w-full inline-flex items-center justify-center gap-2 border border-white rounded-full px-4 py-2 text-sm"
            >
              <span>Get Started</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M5 12h14M13 5l6 7-6 7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
