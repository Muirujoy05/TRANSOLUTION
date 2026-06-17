import React from 'react';
import Link from 'next/link';
// Fixed: Included all used icons in the named import
import { Compass, Sparkles, Heart, Users } from 'lucide-react';

const packages = [
  {
    category: 'Single Packages',
    tagline: 'The Path of the Solitary Explorer',
    description: 'Designed for individuals seeking clarity, wild encounters, photography focus, or deep-wilderness introspection.',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800',
    details: [
      'Tailored private photo-safaris with professional guides.',
      'Wellness and deep-wilderness yoga retreats in remote lodges.',
      'Unstructured exploration timelines mapped around individual pacing.'
    ]
  },
  {
    category: 'Couple Packages',
    tagline: 'Intimate Horizons under African Skies',
    description: 'Crafted for honeymooners, romantic escapes, and shared anniversaries in romantic, low-impact private sanctuaries.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
    details: [
      'Private fly-camping options directly under clear night skies.',
      'Sundowners on classic wooden dhow boats off the coast of Lamu.',
      'Candlelit private bush dinners surrounded by the savannah winds.'
    ]
  },
  {
    category: 'Family Packages',
    tagline: 'Generations on the Savannah',
    description: 'Curated for multi-generational travel, combining rich, comfortable lodging with educational conservation encounters for children.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    details: [
      'Exclusive-use family villas featuring a private host and bush vehicle.',
      'Tracking workshops, wildlife footprint identification, and bird walks.',
      'Bespoke culinary menus fully customized for all age levels.'
    ]
  },
  {
    category: 'Group Packages',
    tagline: 'The Explorers Guild Gathering',
    description: 'Arranged for private takeovers, photography clubs, and groups of close friends seeking a completely shared private safari circuit.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800',
    details: [
      'Private charter logistics across select private conservation nodes.',
      'Coordinated private discussions with regional conservation lead officers.',
      'Full lodge takeovers for absolute exclusivity and secure privacy.'
    ]
  }
];

export default function Services() {
  return (
    <div className="py-16">
      {/* Banner */}
      <section className="bg-luxury-dark text-luxury-white py-24 text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-luxury-accent mb-4 font-semibold font-sans">Transolution</p>
        <h1 className="font-serif text-4xl md:text-6xl font-light max-w-4xl mx-auto leading-tight">
          Custom Tiers tailored for <span className="italic">every combination of journey.</span>
        </h1>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center font-serif text-sm md:text-base font-light text-luxury-medium">
        <p className="leading-relaxed">
          While we formulate each track from zero, the categories below represent basic structural springboards to guide your configuration. Let our travel design team craft your ultimate package.
        </p>
      </section>

      {/* Packages Loop */}
      <section className="max-w-6xl mx-auto px-4 pb-24 space-y-24">
        {packages.map((pkg, idx) => {
          const IconComponent = pkg.icon;
          return (
            <div 
              key={pkg.category} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={pkg.image} alt={pkg.category} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <IconComponent className="text-luxury-accent" size={24} />
                  <span className="text-xs uppercase tracking-widest text-luxury-accent font-semibold">{pkg.category}</span>
                </div>
                
                <h3 className="font-serif text-2xl md:text-4xl font-light text-luxury-dark">{pkg.tagline}</h3>
                <p className="text-xs text-luxury-medium font-serif leading-relaxed font-light">{pkg.description}</p>
                
                <div className="h-[1px] bg-luxury-border w-24"></div>
                
                <ul className="space-y-3">
                  {pkg.details.map((item, index) => (
                    <li key={index} className="text-xs text-luxury-medium font-light flex items-start gap-2">
                      <span className="text-luxury-accent select-none font-serif">•</span>
                      <span className="font-serif">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link 
                    href="/contact"
                    className="border border-luxury-dark text-luxury-dark hover:bg-luxury-dark hover:text-luxury-white px-6 py-3 text-xs tracking-widest uppercase transition-colors inline-block"
                  >
                    Select Framework
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}