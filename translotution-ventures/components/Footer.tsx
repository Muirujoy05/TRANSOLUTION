import React from 'react';
import Link from 'next/link';

// Change "export default" to a named export:
export function Footer() {
  return (
    <footer className="bg-luxury-dark text-luxury-cream py-16 px-4 sm:px-6 lg:px-8 border-t border-luxury-medium border-opacity-25">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="font-serif text-xl tracking-[0.2em] font-light uppercase">TRANSLOTUTION</span>
          <span className="text-[9px] tracking-[0.45em] text-luxury-accent uppercase block mt-1 font-sans">VENTURES</span>
          <p className="text-[10px] text-luxury-accent opacity-60 mt-4 max-w-sm">
            Crafting custom bespoke travel and conservation-minded safaris throughout the African continent.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-[10px] tracking-widest uppercase font-light text-luxury-accent">
          <Link href="/" className="hover:text-luxury-white">Home</Link>
          <Link href="/about" className="hover:text-luxury-white">About Us</Link>
          <Link href="/services" className="hover:text-luxury-white">Packages</Link>
          <Link href="/destinations" className="hover:text-luxury-white">Destinations</Link>
          <Link href="/contact" className="hover:text-luxury-white">Contact</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-luxury-medium border-opacity-10 flex flex-col sm:flex-row justify-between text-[10px] text-luxury-accent opacity-45 text-center sm:text-left">
        <span>&copy; {new Date().getFullYear()} Translotution Ventures. All rights reserved.</span>
        <span>Curated with absolute attention to detail.</span>
      </div>
    </footer>
  );
}