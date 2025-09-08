"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-12 py-12">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-700 pb-8">
        <h2 className="text-2xl font-light mb-6 md:mb-0">LOGO</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm">
          <Link href="mailto:info@brand.com" className="hover:text-white">
            info@brand.com
          </Link>
          <span className="text-white font-medium">+65 8808 2159</span>
        </div>
      </div>

      {/* Middle Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-b border-gray-700">
        {/* About text + social */}
        <div className="space-y-4">
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consectetur adipiscing elit.
          </p>
          <div className="flex space-x-3">
            <Link href="#" className="p-2 bg-gray-800 rounded hover:bg-gray-700">
              <Facebook size={16} />
            </Link>
            <Link href="#" className="p-2 bg-gray-800 rounded hover:bg-gray-700">
              <Twitter size={16} />
            </Link>
            <Link href="#" className="p-2 bg-gray-800 rounded hover:bg-gray-700">
              <Instagram size={16} />
            </Link>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">Reyal</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Luminicell</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">Get Started</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Technology</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Newsroom</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Careers</Link>
            </li>
          </ul>
        </div>

        {/* Who we are */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Who are We</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">Brand at a Glance</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Mission & Vision</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Our Team</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Partnerships</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Sustainability & Social Impact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-6 space-y-4 md:space-y-0">
        <p>© 2025 Brand. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Cookies</Link>
          <Link href="#" className="hover:text-white">
            Designed and Powered by Quixta.
          </Link>
        </div>
      </div>
    </footer>
  );
}
