import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-luxury-dark text-luxury-cream py-16 px-4 sm:px-6 lg:px-8 border-t border-luxury-medium border-opacity-25">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Footer Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img 
            src="/logo.png" 
            alt="Transolution Logo" 
            className="h-16 w-auto object-contain mb-3"
          />
          <p className="text-[10px] text-luxury-accent opacity-60 max-w-sm">
            Crafting custom luxury travel and conservation-minded safaris throughout the African continent.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-[10px] tracking-widest uppercase font-light text-luxury-accent">
          <Link href="/" className="hover:text-luxury-white">Home</Link>
          <Link href="/about" className="hover:text-luxury-white">About Us</Link>
          <Link href="/services" className="hover:text-luxury-white">Packages</Link>
          <Link href="/destinations" className="hover:text-luxury-white">Destinations</Link>
          <Link href="/contact" className="hover:text-luxury-white">Contact</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-luxury-medium border-opacity-10 flex flex-col sm:flex-row justify-between text-[10px] text-luxury-accent opacity-45 text-center sm:text-left">
        <span>&copy; {new Date().getFullYear()} Transolution Ventures. All rights reserved.</span>
        <span>Curated with absolute attention to detail.</span>
      </div>
    </footer>
  );
}