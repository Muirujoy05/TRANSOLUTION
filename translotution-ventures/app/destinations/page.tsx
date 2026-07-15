'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, BookOpen, ChevronDown, ChevronUp, Compass } from 'lucide-react';

// Comprehensive dataset containing all 54+ activities & definitions from your document
const destinationData = [
  {
    id: "nairobi",
    name: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200",
    tagline: "Where metropolitan sophistication meets the wilderness, serving as the gateway to East Africa's premier wildlife circuits.",
    activities: [
      {
        name: "Breakfast overlooking Nairobi National Park",
        definition: "Enjoy breakfast with panoramic views of Nairobi National Park and wildlife on the horizon."
      },
      {
        name: "Nairobi National Park Game Drive",
        definition: "Experience Africa's only national park within a capital city, home to lions, rhinos, giraffes and more."
      },
      {
        name: "David Sheldrick Elephant Orphanage",
        definition: "Visit the world-renowned elephant rescue and rehabilitation centre caring for orphaned elephants."
      },
      {
        name: "Giraffe Centre Visit",
        definition: "Feed and interact with the endangered Rothschild's giraffes while learning about conservation efforts."
      },
      {
        name: "Tamarind Restaurant Experience",
        definition: "Enjoy fine dining featuring fresh seafood and international cuisine at one of Nairobi's iconic restaurants."
      },
      {
        name: "Carnivore Restaurant Experience",
        definition: "Dine at Kenya's legendary restaurant renowned for its authentic African barbecue experience."
      },
      {
        name: "Shopping Experience",
        definition: "Explore local markets, shopping malls and artisan centres for authentic African crafts and souvenirs."
      },
      {
        name: "Nairobi City Tour",
        definition: "Discover Nairobi's historical, cultural and modern attractions."
      }
    ]
  },
  {
    id: "mara",
    name: "Maasai Mara, Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
    tagline: "The world's stage for raw predator action, sweeping golden grasslands, and the legendary Great Wildebeest Migration.",
    activities: [
      {
        name: "Scenic Flight to Maasai Mara",
        definition: "Fly over the Great Rift Valley and Kenya's spectacular landscapes en route to Maasai Mara."
      },
      {
        name: "Afternoon Game Drive",
        definition: "An afternoon safari in search of Africa's iconic wildlife as temperatures cool and animals become active."
      },
      {
        name: "Sunrise Big Five Game Drive",
        definition: "Early morning safari to search for Africa's Big Five during peak wildlife activity."
      },
      {
        name: "Full-Day Maasai Mara Safari",
        definition: "Spend the day exploring different regions of the Maasai Mara with unlimited wildlife viewing."
      },
      {
        name: "Evening Game Drive",
        definition: "Observe wildlife during the golden hours before sunset when many animals are most active."
      },
      {
        name: "Sunset Safari Experience",
        definition: "Witness breathtaking African sunsets while enjoying wildlife viewing across the savannah."
      },
      {
        name: "Big Five Safari",
        definition: "Search for lion, leopard, elephant, buffalo and rhino during expertly guided game drives."
      },
      {
        name: "Hot Air Balloon Safari (Optional)",
        definition: "Enjoy spectacular aerial views of the Maasai Mara at sunrise followed by a champagne breakfast."
      },
      {
        name: "Maasai Cultural Village Visit",
        definition: "Experience Maasai traditions, music, dance, architecture and community life."
      },
      {
        name: "Mara River Experience",
        definition: "Visit the famous Mara River, home to hippos, crocodiles and dramatic migration crossings."
      },
      {
        name: "Hippo & Crocodile Viewing",
        definition: "Observe hippos and Nile crocodiles in their natural river habitats."
      },
      {
        name: "Wildlife Photography Experience",
        definition: "Capture unforgettable images of Africa's wildlife and spectacular landscapes."
      },
      {
        name: "Bush Sundowner",
        definition: "Relax with refreshments in the wilderness while watching the African sunset."
      }
    ]
  },
  {
    id: "naivasha",
    name: "Naivasha & Hell's Gate, Kenya",
    image: "https://images.unsplash.com/photo-1551632879-c8611f89406a?auto=format&fit=crop&q=80&w=1200",
    tagline: "Dramatic volcanic gorges, towering cliffs, freshwater lake boat cruises, and lush highlands tea estates.",
    activities: [
      {
        name: "Lake Naivasha Boat Safari",
        definition: "Cruise among hippos and diverse birdlife on one of Kenya's freshwater lakes."
      },
      {
        name: "Hell's Gate National Park",
        definition: "Explore one of Kenya's most unique parks, famous for dramatic cliffs, gorges and geothermal activity."
      },
      {
        name: "Cycling Safari",
        definition: "Cycle among zebras, giraffes and antelopes in a predator-free national park."
      },
      {
        name: "Hell's Gate Gorge Walk",
        definition: "Walk through spectacular volcanic gorges with towering rock formations."
      },
      {
        name: "Olkaria Geothermal Spa",
        definition: "Relax in naturally heated geothermal pools within Hell's Gate National Park."
      },
      {
        name: "Tea Plantation Tour",
        definition: "Visit Kenya's lush tea estates and learn how tea is grown, harvested and processed."
      },
      {
        name: "Coffee Plantation Experience",
        definition: "Discover Kenya's world-famous coffee farms and enjoy guided coffee tasting sessions."
      }
    ]
  },
  {
    id: "amboseli",
    name: "Amboseli National Park, Kenya",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200",
    tagline: "Gaze upon giant free-ranging elephant herds set against the snow-capped, towering backdrop of Mount Kilimanjaro.",
    activities: [
      {
        name: "Amboseli National Park Safari",
        definition: "Explore Amboseli's vast plains, famous for large elephant herds and stunning scenery."
      },
      {
        name: "Mount Kilimanjaro Views",
        definition: "Enjoy panoramic views of Africa's highest mountain from Amboseli National Park."
      },
      {
        name: "Elephant Tracking",
        definition: "Observe Amboseli's famous free-ranging elephant families with expert guides."
      },
      {
        name: "Bird Watching",
        definition: "Discover hundreds of resident and migratory bird species across East Africa."
      },
      {
        name: "Nature Photography",
        definition: "Capture dramatic landscapes, wildlife and iconic African scenery."
      }
    ]
  },
  {
    id: "tsavo",
    name: "Tsavo East & West, Kenya",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=1200",
    tagline: "A vast, ancient wilderness of black volcanic lava flows, crystal springs, and the famous dust-red elephants.",
    activities: [
      {
        name: "Tsavo West Game Drive",
        definition: "Discover volcanic landscapes, abundant wildlife and scenic wilderness in Tsavo West National Park."
      },
      {
        name: "Shetani Lava Flow",
        definition: "Explore dramatic volcanic lava fields formed by ancient eruptions."
      },
      {
        name: "Mzima Springs",
        definition: "Visit crystal-clear springs famous for underwater hippo and crocodile viewing."
      },
      {
        name: "Rhino Sanctuary Visit",
        definition: "Experience Kenya's protected sanctuary dedicated to black rhino conservation."
      },
      {
        name: "Tsavo East Safari",
        definition: "Explore one of Kenya's largest national parks, home to the famous red elephants."
      },
      {
        name: "Aruba Dam Wildlife Viewing",
        definition: "Observe abundant wildlife gathering around one of Tsavo East's most productive waterholes."
      },
      {
        name: "Red Elephant Experience",
        definition: "Witness Tsavo's iconic elephants covered in distinctive red volcanic dust."
      }
    ]
  },
  {
    id: "diani",
    name: "Diani Beach & Coast, Kenya",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1200",
    tagline: "Tropical white sand beaches, tranquil mangrove canoe excursions, and rich marine coral reef snorkelling.",
    activities: [
      {
        name: "SGR Train Experience",
        definition: "Travel aboard Kenya's modern Standard Gauge Railway between the savannah and the coast."
      },
      {
        name: "Kongo River Canoe Experience",
        definition: "Paddle through the tranquil mangrove-lined Kongo River before entering the Indian Ocean."
      },
      {
        name: "Diani Beach Relaxation",
        definition: "Unwind on one of Africa's finest white-sand beaches along the Indian Ocean."
      },
      {
        name: "Wasini Island Dolphin Excursion",
        definition: "Cruise to Wasini Island while searching for wild dolphins in the Indian Ocean."
      },
      {
        name: "Snorkelling Experience",
        definition: "Explore colourful coral reefs and tropical marine life in crystal-clear waters."
      },
      {
        name: "Seafood Experience",
        definition: "Enjoy freshly prepared Swahili seafood cuisine overlooking the ocean."
      }
    ]
  },
  {
    id: "rwanda",
    name: "Kigali & Volcanoes, Rwanda",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
    tagline: "Explore Rwanda's clean, rolling capital before ascending the mist-shrouded rain forests to meet endangered mountain gorillas.",
    activities: [
      {
        name: "Mountain Gorilla Trekking",
        definition: "Trek through rainforest to spend one unforgettable hour with endangered mountain gorillas."
      },
      {
        name: "Kigali City Tour",
        definition: "Explore Rwanda's clean, vibrant capital and its cultural landmarks."
      },
      {
        name: "Twin Lakes Experience",
        definition: "Visit the scenic Twin Lakes of Burera and Ruhondo near Volcanoes National Park."
      }
    ]
  },
  {
    id: "tanzania",
    name: "Serengeti & Ngorongoro, Tanzania",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
    tagline: "Traverse the endless plains of the Serengeti and descend into the world's largest intact volcanic caldera.",
    activities: [
      {
        name: "Ngorongoro Crater Safari",
        definition: "Descend into the world's largest intact volcanic caldera for exceptional wildlife viewing."
      },
      {
        name: "Serengeti Safari",
        definition: "Explore Africa's most famous plains, home to the Great Migration and abundant predators."
      }
    ]
  },
  {
    id: "vicfalls",
    name: "Victoria Falls, Zimbabwe",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200",
    tagline: "Experience the smoke that thunders—one of the Seven Natural Wonders of the World along the roaring Zambezi River.",
    activities: [
      {
        name: "Victoria Falls Experience",
        definition: "Explore one of the Seven Natural Wonders of the World through guided walks and viewpoints."
      },
      {
        name: "Zambezi Sunset Cruise",
        definition: "Cruise the Zambezi River while enjoying spectacular sunsets and wildlife sightings."
      }
    ]
  },
  {
    id: "capetown",
    name: "Cape Town & Winelands, South Africa",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200",
    tagline: "Scale dramatic seaside peaks, walk alongside wild penguin colonies, and sample exceptional culinary reserves.",
    activities: [
      {
        name: "Cape Town City Tour",
        definition: "Discover South Africa's Mother City, including Table Mountain and the V&A Waterfront."
      },
      {
        name: "Cape Peninsula Tour",
        definition: "Visit Cape Point, Cape of Good Hope and Boulders Penguin Colony."
      },
      {
        name: "Cape Winelands Experience",
        definition: "Tour renowned vineyards while enjoying wine tasting and gourmet cuisine."
      }
    ]
  },
  {
    id: "zanzibar",
    name: "Zanzibar Archipelago, Tanzania",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1200",
    tagline: "UNESCO-listed spice-scented alleyways, historic Swahili-Arab architecture, and traditional dhow sailing.",
    activities: [
      {
        name: "Stone Town Heritage Tour",
        definition: "Explore Zanzibar's UNESCO-listed historic town rich in Swahili and Arab heritage."
      },
      {
        name: "Spice Farm Tour",
        definition: "Visit Zanzibar's famous spice plantations and sample aromatic spices and tropical fruits."
      },
      {
        name: "Dhow Sunset Cruise",
        definition: "Sail on a traditional dhow while enjoying the Indian Ocean sunset."
      }
    ]
  }
];

// Grouping mappings for the accordion directory
const regions = [
  {
    id: "kenya",
    title: "Kenya Sights",
    destinations: ["nairobi", "mara", "naivasha", "amboseli", "tsavo", "diani"]
  },
  {
    id: "east-africa",
    title: "East Africa",
    destinations: ["rwanda", "tanzania"]
  },
  {
    id: "africa",
    title: "Africa",
    destinations: ["vicfalls", "capetown", "zanzibar"]
  }
];

export default function Destinations() {
  const [activeTab, setActiveTab] = useState("nairobi");
  const [expandedRegion, setExpandedRegion] = useState<string | null>("kenya");

  const currentDestination = destinationData.find((dest) => dest.id === activeTab) || destinationData[0];

  const handleRegionClick = (regionId: string) => {
    setExpandedRegion(expandedRegion === regionId ? null : regionId);
  };

  const getDestinationName = (id: string) => {
    const dest = destinationData.find((d) => d.id === id);
    return dest ? dest.name.split(',')[0] : id;
  };

  return (
    <div className="py-16 bg-luxury-cream">
      
      {/* 1. HEADER BANNER */}
      <section className="bg-luxury-dark text-luxury-white py-24 text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-luxury-accent mb-4 font-semibold">Our Geographies</p>
        <h1 className="font-serif text-4xl md:text-6xl font-light max-w-4xl mx-auto leading-tight">
          Sights curated for <span className="italic">extraordinary private travel.</span>
        </h1>
      </section>

      {/* 2. DUAL-COLUMN EXPLORATION LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN (65% width on desktop) - Displays Selected Destination Sights */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Visual Cover Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-luxury-border bg-luxury-dark shadow-sm">
              <img 
                src={currentDestination.image} 
                alt={currentDestination.name} 
                className="w-full h-full object-cover filter brightness-95 animate-fade-in"
              />
            </div>

            {/* Title Block */}
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-luxury-dark tracking-wide">
                {currentDestination.name}
              </h2>
              <div className="w-12 h-[1px] bg-luxury-accent"></div>
              <p className="text-sm font-light font-serif text-luxury-medium leading-relaxed italic">
                {currentDestination.tagline}
              </p>
            </div>

            {/* Experiences Grid */}
            <div className="bg-luxury-white border border-luxury-border p-6 md:p-10 space-y-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-luxury-border pb-4">
                <BookOpen size={18} className="text-luxury-accent" />
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-luxury-dark">
                  Curated Activities & Experiences
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-8 max-h-[700px] overflow-y-auto pr-2">
                {currentDestination.activities.map((act, index) => (
                  <div key={index} className="border-b border-luxury-border border-opacity-65 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-start gap-3">
                      <MapPin size={14} className="text-luxury-accent shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif text-base font-semibold text-luxury-dark leading-snug">
                          {act.name}
                        </h4>
                        <p className="text-xs text-luxury-medium font-serif font-light mt-2 leading-relaxed">
                          {act.definition}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (35% width on desktop) - Expandable Vertical Regional Directory */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-luxury-white border border-luxury-border p-6 md:p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-2 border-b border-luxury-border pb-4">
                <Compass size={16} className="text-luxury-accent" />
                <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-luxury-dark">
                  Expedition Directory
                </h3>
              </div>

              {/* Collapsible Regional Menus */}
              <div className="space-y-4">
                {regions.map((region) => {
                  const isExpanded = expandedRegion === region.id;
                  return (
                    <div key={region.id} className="border-b border-luxury-border border-opacity-60 last:border-0 pb-4 last:pb-0">
                      
                      {/* Region Header Trigger */}
                      <button
                        onClick={() => handleRegionClick(region.id)}
                        className="w-full flex justify-between items-center text-xs tracking-widest uppercase font-semibold text-luxury-dark hover:text-luxury-accent py-2 transition-colors"
                      >
                        <span>{region.title}</span>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>

                      {/* Region Sub-Destinations List */}
                      {isExpanded && (
                        <div className="mt-2 pl-4 space-y-1.5 animate-fade-in">
                          {region.destinations.map((destId) => {
                            const isCurrent = activeTab === destId;
                            return (
                              <button
                                key={destId}
                                onClick={() => setActiveTab(destId)}
                                className={`w-full text-left text-xs font-serif font-light py-2 px-3 border transition-colors block ${
                                  isCurrent
                                    ? 'bg-luxury-dark text-luxury-white border-luxury-dark'
                                    : 'text-luxury-medium border-transparent hover:border-luxury-border'
                                }`}
                              >
                                {getDestinationName(destId)}
                              </button>
                            );
                          })}
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. TAILORED CUSTOMIZATION BLOCK */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-luxury-border">
        <div className="text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-luxury-accent font-semibold block">The Tailored Promise</span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-luxury-dark">Compose Your Itinerary</h2>
          <p className="text-xs text-luxury-medium font-serif leading-relaxed font-light max-w-2xl mx-auto">
            These activities represent our verified signature arrangements. During our planning discussions, you maintain full authority to weave any of these custom parameters into your target route to fit your timeline.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact"
              className="bg-luxury-dark text-luxury-white hover:bg-luxury-accent hover:text-luxury-dark px-10 py-4 text-xs tracking-widest uppercase transition-colors font-semibold inline-block"
            >
              Consult with Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}