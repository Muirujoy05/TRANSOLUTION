import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, Shield, Heart } from 'lucide-react';

// Curated African experiences matching our editorial luxury theme
const featuredJourneys = [
  {
    id: 1,
    title: 'The Great Migration of the Serengeti',
    destination: 'Tanzania',
    duration: '10 Days',
    cost: 'From $14,200 pp',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200',
    description: 'Witness the raw, unfiltered cycle of life in the plains from a mobile luxury canvas camp.'
  },
  {
    id: 2,
    title: 'Silent Wilderness of the Namib Dunes',
    destination: 'Namibia',
    duration: '8 Days',
    cost: 'From $11,500 pp',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200',
    description: 'Sleep under an unpolluted canopy of desert stars at an architectural eco-lodge.'
  },
  {
    id: 3,
    title: 'Navigating the Okavango by Mokoro',
    destination: 'Botswana',
    duration: '12 Days',
    cost: 'From $16,800 pp',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200',
    description: 'Drift silently past resting elephants in crystal-clear waters guided by local conservationists.'
  }
];

export default function Home() {
  return (
    <div className="bg-luxury-cream text-luxury-dark font-sans">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1920" 
            alt="African Savanna Sunset" 
            className="w-full h-full object-cover filter brightness-[0.45]"
          />
        </div>
        
        <div className="relative z-10 text-center text-luxury-white px-4 max-w-4xl mt-12">
          <p className="text-xs tracking-[0.3em] uppercase text-luxury-accent mb-4">Tailor-Made African Expeditions</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-6">
            Travel designed to leave <br/>
            <span className="italic font-normal">an enduring imprint.</span>
          </h1>
          <p className="text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto mb-8 opacity-90 leading-relaxed font-serif">
            We reject the checklist approach to travel. Translotution Ventures crafts highly customized journeys across Africa, designed entirely around how you wish to feel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/destinations" 
              className="border border-luxury-white hover:bg-luxury-white hover:text-luxury-dark px-8 py-3.5 text-xs tracking-widest uppercase transition-all duration-300 w-full sm:w-auto"
            >
              Explore Destinations
            </Link>
            <Link 
              href="/services" 
              className="bg-luxury-accent text-luxury-dark hover:bg-luxury-white px-8 py-3.5 text-xs tracking-widest uppercase transition-all duration-300 font-semibold w-full sm:w-auto text-center"
            >
              Begin Planning
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CURATED JOURNEYS GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-luxury-border">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-luxury-accent mb-4 font-semibold">Inspirational Sights</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">Featured African Journeys</h2>
          <p className="text-sm text-luxury-medium font-light font-serif">
            These springboards represent starting configurations to inspire your custom itinerary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {featuredJourneys.map((exp) => (
            <div key={exp.id} className="group cursor-pointer flex flex-col h-full bg-luxury-white border border-luxury-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[11px] tracking-widest uppercase text-luxury-accent font-semibold block">{exp.destination}</span>
                    <span className="text-[10px] text-luxury-medium font-light">{exp.duration} &bull; {exp.cost}</span>
                  </div>
                  <h3 className="font-serif text-xl font-light mb-3 leading-snug group-hover:text-luxury-medium transition-colors">{exp.title}</h3>
                  <p className="text-xs text-luxury-medium font-light leading-relaxed mb-6 font-serif">{exp.description}</p>
                </div>
                <Link 
                  href="/contact" 
                  className="flex items-center text-xs tracking-widest uppercase font-semibold text-luxury-dark group-hover:text-luxury-accent transition-colors"
                >
                  Discover Journey <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              A bespoke curation of <br />
              <span className="italic">exceptional moments</span>.
            </h2>
            <p className="text-sm font-light leading-relaxed mb-6 opacity-80 font-serif">
              We travel differently. Our team designs each journey from the ground up, linking high-end ecological architecture with deeply immersive encounters. Whether it is tracking endangered species alongside wildlife biologists or meeting traditional communities on their terms, we craft travel that supports conservation.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Compass className="text-luxury-accent shrink-0 mt-1" size={18} />
                <p className="text-xs tracking-wide"><strong className="text-luxury-white font-medium uppercase block">Bespoke Design</strong> Tailored exclusively to your pacing, interests, and emotional needs.</p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-luxury-accent shrink-0 mt-1" size={18} />
                <p className="text-xs tracking-wide"><strong className="text-luxury-white font-medium uppercase block">Seamless Execution</strong> Around-the-clock support during your transition between locations.</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 md:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200" 
              alt="Bespoke luxury safari camp"
              className="w-full h-full object-cover filter brightness-90 shadow-2xl"
            />
          </div>
        </div>
      </section>

      
  </div>

        );
      }