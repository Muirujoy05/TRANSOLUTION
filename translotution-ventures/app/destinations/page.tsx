import React from 'react';
import Link from 'next/link';

const locations = [
  {
    tier: '01 / Kenya Sights',
    description: 'Our primary home ground. The quintessential safari territory.',
    items: [
      {
        name: 'The Maasai Mara Reserve',
        focus: 'Wildlife migration & luxury camps',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600'
      },
      {
        name: 'Amboseli Ecosystem',
        focus: 'Large elephant herds under Kilimanjaro backdrop',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=600'
      },
      {
        name: 'Lamu Archipelago',
        focus: 'Historical Swahili towns & dhow sailing',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
      }
    ]
  },
  {
    tier: '02 / East African Community',
    description: 'Crossing paths through the majestic Great Lakes and volcanic highlands.',
    items: [
      {
        name: 'Serengeti & Ngorongoro (Tanzania)',
        focus: 'Classic endless plains & volcanic calderas',
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=600'
      },
      {
        name: 'Volcanoes National Park (Rwanda)',
        focus: 'Intimate mountain gorilla sanctuary walks',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600'
      },
      {
        name: 'Bwindi Impenetrable Canopy (Uganda)',
        focus: 'Deep forest tracking & bird life',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=600'
      }
    ]
  },
  {
    tier: '03 / Mainland African Destinations',
    description: 'Discovering desert landscapes, clean delta lagoons, and southern coastal routes.',
    items: [
      {
        name: 'Okavango Delta (Botswana)',
        focus: 'Mokoro safaris through clear water lagoons',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
      },
      {
        name: 'The Namib Dunes (Namibia)',
        focus: 'Stargazing, desert exploration & red sands',
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=600'
      },
      {
        name: 'Kruger Wilderness (South Africa)',
        focus: 'Exceptional private reserve tracking of Big Five',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600'
      }
    ]
  }
];

export default function Destinations() {
  return (
    <div className="py-16">
      {/* Banner */}
      <section className="bg-luxury-dark text-luxury-white py-24 text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-luxury-accent mb-4 font-semibold">Our Geography</p>
        <h1 className="font-serif text-4xl md:text-6xl font-light max-w-4xl mx-auto leading-tight">
          Destinations curated for <span className="italic">exceptional travel.</span>
        </h1>
      </section>

      {/* Main Geographic Sections */}
      <section className="max-w-6xl mx-auto px-4 py-20 space-y-24">
        {locations.map((section) => (
          <div key={section.tier} className="border-t border-luxury-border pt-12">
            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest text-luxury-accent font-semibold block mb-2">{section.tier}</span>
              <p className="text-sm font-light text-luxury-medium font-serif">{section.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.items.map((item) => (
                <div key={item.name} className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" 
                    />
                  </div>
                  <h3 className="font-serif text-xl font-light text-luxury-dark group-hover:text-luxury-medium transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-luxury-medium font-light font-serif mt-1">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center pb-24 px-4">
        <h2 className="font-serif text-2xl md:text-4xl font-light mb-6">Choose your destination map</h2>
        <Link 
          href="/contact"
          className="bg-luxury-dark text-luxury-white hover:bg-luxury-accent hover:text-luxury-dark px-10 py-4 text-xs tracking-widest uppercase transition-colors font-semibold inline-block"
        >
          Begin Consultations
        </Link>
      </section>
    </div>
  );
}