'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, Shield } from 'lucide-react';

// Slideshow of verified, plate-free African scenery
const heroImages = [
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1920", // Savannah Sunset
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1920", // Serengeti Grasslands
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1920", // Diani Beach Palms
  "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1920"  // Victoria Falls twilight
];

// The Solstice Calendar dataset (Seasonal Curations)
const seasonalCurations = [
  {
    id: 1,
    tag: "The Solstice Selection / Kenya",
    title: "Amboseli, Maasai Mara & Diani Beach Signature",
    duration: "10 Days",
    highlights: "Mount Kilimanjaro Views • Elephant Tracking • Kongo River Canoe Experience • Diani Beach Relaxation",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=600",
    description: "Witness Amboseli's giant elephant herds under Mt. Kilimanjaro, explore the Mara, and conclude with pristine coastal relaxation."
  },
  {
    id: 2,
    tag: "The Solstice Selection / East Africa",
    title: "Kenya & Tanzania Migration Safari",
    duration: "8 Days",
    highlights: "Maasai Mara National Reserve • endless Serengeti Plains • Ngorongoro Crater Descent • Black Rhino Search",
    image: "car image.jpg",
    description: "Trace predator prides and massive herds across the borders of the Mara and Serengeti before descending the crater floor."
  },
  {
    id: 3,
    tag: "The Solstice Selection / Africa Wide",
    title: "Great Africa Ocean & Wilderness Safari",
    duration: "14 Days",
    highlights: "Maasai Mara Game Drives • Victoria Falls Sunset Cruise • Table Mountain • Cape Peninsula Penguin Colony",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=600",
    description: "The ultimate three-nation voyage spanning East Africa's grasslands, the roaring Victoria Falls, and Cape Town's coastlines."
  }
];

export default function Home() {
  const [currentImg, setCurrentImage] = useState(0);

  // Auto-rotate background pictures every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-luxury-cream text-luxury-dark font-sans overflow-x-hidden">

      {/* 1. CINEMATIC BACKGROUND SLIDESHOW HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* Render overlapping images with transitions */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          {heroImages.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt="African Expedition" 
              className={`absolute inset-0 w-full h-full object-cover filter brightness-[0.85] transition-opacity duration-1000 ease-in-out ${
                idx === currentImg ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Shading vignette for text clarity */}
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/65 via-transparent to-luxury-dark/45" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-luxury-white px-4 max-w-4xl mt-12 drop-shadow-sm">
          <p className="text-xs tracking-[0.3em] uppercase text-luxury-accent mb-4 font-semibold">Tailor-Made African Expeditions</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-6">
            Travel designed to leave <br/>
            <span className="italic font-normal">an enduring imprint.</span>
          </h1>
          <p className="text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto mb-8 opacity-95 leading-relaxed font-serif">
            We reject the checklist approach to travel. Translotution Ventures crafts highly customized journeys across Africa, designed entirely around how you wish to feel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/destinations" 
              className="border border-luxury-white hover:bg-luxury-white hover:text-luxury-dark px-8 py-3.5 text-xs tracking-widest uppercase transition-all duration-300 w-full sm:w-auto"
            >
              Explore Sights
            </Link>
            <Link 
              href="/services" 
              className="bg-luxury-accent text-luxury-dark hover:bg-luxury-white px-8 py-3.5 text-xs tracking-widest uppercase transition-all duration-300 font-semibold w-full sm:w-auto text-center"
            >
              Our Packages
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-luxury-white opacity-60 flex flex-col items-center gap-2">
          
          <div className="w-[1px] h-10 bg-luxury-white bg-opacity-40 animate-pulse"></div>
        </div>
      </section>

      {/* 2. THE SOLSTICE CALENDAR (Seasonal Curations) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-luxury-border">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-luxury-accent mb-4 font-semibold">The Solstice Calendar</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">Seasonal Curations</h2>
          <p className="text-sm text-luxury-medium font-light font-serif">
            Our dynamically updated select. Hand-crafted itineraries timed perfectly with migrations, climate pockets, and optimal wilderness windows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {seasonalCurations.map((curation) => (
            <div key={curation.id} className="group cursor-pointer flex flex-col h-full bg-luxury-white border border-luxury-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              
              {/* Photo Frame */}
              <div className="relative overflow-hidden h-64 bg-luxury-dark">
                <img 
                  src={curation.image} 
                  alt={curation.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
              </div>

              {/* Text Area */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[10px] tracking-widest uppercase text-luxury-accent font-semibold block">{curation.tag}</span>
                    <span className="text-[10px] text-luxury-medium font-light">{curation.duration}</span>
                  </div>
                  <h3 className="font-serif text-xl font-light mb-3 leading-snug group-hover:text-luxury-medium transition-colors">{curation.title}</h3>
                  <p className="text-xs text-luxury-medium font-light leading-relaxed mb-4 font-serif">{curation.description}</p>
                  
                  {/* Highlights Bullet List */}
                  <div className="border-t border-luxury-border border-opacity-60 pt-3 mb-6">
                    <span className="text-[9px] uppercase tracking-widest text-luxury-accent font-semibold block mb-1">Key Highlights</span>
                    <p className="text-[10px] text-luxury-medium font-serif font-light leading-relaxed">
                      {curation.highlights}
                    </p>
                  </div>
                </div>
                
                <Link 
                  href="/services" 
                  className="flex items-center text-xs tracking-widest uppercase font-semibold text-luxury-dark group-hover:text-luxury-accent transition-colors"
                >
                  Explore Seasonal Itinerary <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. BRAND STORYTELLING / PHILOSOPHY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-luxury-dark text-luxury-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-luxury-accent mb-3 font-semibold">Our Core Philosophy</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 leading-tight">
              A custom curation of <br />
              <span className="italic">exceptional moments</span>.
            </h2>
            <p className="text-sm font-light leading-relaxed mb-6 opacity-80 font-serif">
              We travel differently. Our team designs each journey from the ground up, linking high-end ecological architecture with deeply immersive encounters. Whether it is tracking endangered species alongside wildlife biologists or meeting traditional communities on their terms, we craft travel that supports conservation.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Compass className="text-luxury-accent shrink-0 mt-1" size={18} />
                <p className="text-xs tracking-wide"><strong className="text-luxury-white font-medium uppercase block">Custom Design</strong> Tailored exclusively to your pacing, interests, and emotional needs.</p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-luxury-accent shrink-0 mt-1" size={18} />
                <p className="text-xs tracking-wide"><strong className="text-luxury-white font-medium uppercase block">Seamless Execution</strong> Around-the-clock support during your transition between locations.</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 md:h-[500px]">
            <img 
              src="car image.jpg" 
              alt="Curated luxury safari camp"
              className="w-full h-full object-cover filter brightness-90 shadow-2xl"
            />
          </div>
        </div>
      </section>

    </div>
  );
}