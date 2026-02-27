"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="#home" onClick={closeMenu}>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Dev.Profile
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#about" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">เกี่ยวกับฉัน</Link>
              <Link href="#skills" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">ทักษะ</Link>
              <Link href="#projects" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">ผลงาน</Link>
              <Link href="#experience" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">ประสบการณ์</Link>
              <Link href="#contact" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">ติดต่อ</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" onClick={closeMenu} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">เกี่ยวกับฉัน</Link>
            <Link href="#skills" onClick={closeMenu} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">ทักษะ</Link>
            <Link href="#projects" onClick={closeMenu} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">ผลงาน</Link>
            <Link href="#experience" onClick={closeMenu} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">ประสบการณ์</Link>
            <Link href="#contact" onClick={closeMenu} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">ติดต่อ</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
