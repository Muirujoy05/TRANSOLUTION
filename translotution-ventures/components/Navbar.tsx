'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Fixed: Removed the unused 'Phone' import to prevent TypeScript warnings
import { Menu, X } from 'lucide-react'; 

export function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Packages', href: '/services' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-luxury-dark text-luxury-white border-b border-luxury-medium border-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Block */}
          <Link href="/" className="flex flex-col cursor-pointer">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-light uppercase">TRANSOLUTION</span>
            <span className="text-[9px] tracking-[0.45em] text-luxury-accent uppercase font-sans">VENTURES</span>
          </Link>

          {/* Desktop Navigation Links (Now pushed elegantly to the right) */}
          <nav className="hidden lg:flex space-x-8 text-xs tracking-[0.15em] uppercase font-light items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`transition-colors py-2 border-b-2 ${
                  isActive(link.href) 
                    ? 'text-luxury-accent border-luxury-accent' 
                    : 'border-transparent hover:text-luxury-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu trigger */}
          <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden text-luxury-white">
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenu && (
        <div className="lg:hidden bg-luxury-dark border-t border-luxury-medium border-opacity-30 py-6 px-4 space-y-4 text-xs tracking-widest uppercase flex flex-col items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenu(false)}
              className={`block py-2 ${isActive(link.href) ? 'text-luxury-accent' : 'hover:text-luxury-accent'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}