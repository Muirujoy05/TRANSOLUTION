import React from 'react';
import { Compass, Shield, Heart, Play } from 'lucide-react';

const teamMembers = [
  {
    name: "David Kangethe",
    role: "Chief Executive Officer & Founder",
    bio: "Dedicated to shifting luxury travel from consumption to conservation, David directs our vision and builds high-end partnerships across the continent.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder video - replace with your .mp4 file
  },
  {
    name: "Sarah Gichuru",
    role: "Director of Wilderness Expeditions",
    bio: "With over fifteen years mapping remote terrains, Sarah coordinates our complex overland safaris, mobile fly-camping logistics, and private flight logs.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    name: "Michael Kamau",
    role: "Head of Guest Experience & Concierge",
    bio: "Managing detailed custom requests, Michael secures exclusive private estate takeovers, personal chef setups, and fluid border transitions.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    name: "Dr. Elizabeth Naiputari",
    role: "Chief Conservation Liaison",
    bio: "A researcher in savannah ecology, Elizabeth audits our wilderness lodge partners to guarantee absolute environmental preservation and fair local wages.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    name: "Jackson Ole-Saitoti",
    role: "Senior Naturalist & Lead Safari Guide",
    bio: "Jackson leads our premier private tracking safaris in the Mara and Amboseli, translating the flora and fauna through ancestral Maasai perspectives.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

export default function About() {
  return (
    <div className="py-16">
      
      {/* 1. HEADER BANNER */}
      <section className="bg-luxury-dark text-luxury-white py-24 text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-luxury-accent mb-4 font-semibold">About Translotution Ventures</p>
        <h1 className="font-serif text-4xl md:text-6xl font-light max-w-3xl mx-auto leading-tight">
          We believe travel should be an <span className="italic">act of inspiration.</span>
        </h1>
      </section>

      {/* 2. CORE NARRATIVE */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 font-serif text-sm md:text-base text-luxury-medium leading-relaxed font-light">
            <p>
              Translotution Ventures was founded on a simple insight: luxury is not determined by gold fixtures, but by silence, space, and privileged access to untouched nature.
            </p>
            <p>
              We avoid traditional itinerary planning in favor of a deeper, more intentional process. By nurturing strong roots with local communities, park rangers, and private conservancy landholders across Kenya and beyond, we unlock experiences that remain invisible to ordinary travelers.
            </p>
            <p>
              Whether it is tracking gorillas in the cloud-forests of Rwanda, listening to conservation tales from Maasai elders, or relaxing on private coastal escapes in Lamu, our routes reflect a balanced alignment of pristine preservation and tailored luxury.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury safari viewing deck" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. KEY VALUES */}
      <section className="bg-luxury-white border-t border-b border-luxury-border py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <span className="font-serif text-3xl font-light text-luxury-accent">01</span>
            <h3 className="text-xs uppercase tracking-widest font-semibold mt-3 mb-2 text-luxury-dark">Uncompromised Design</h3>
            <p className="text-xs text-luxury-medium font-light leading-relaxed font-serif">Every transfer, guide choice, and private villa alignment is vetted directly by our team to fit your exact specifications.</p>
          </div>
          <div>
            <span className="font-serif text-3xl font-light text-luxury-accent">02</span>
            <h3 className="text-xs uppercase tracking-widest font-semibold mt-3 mb-2 text-luxury-dark">Conservation Stewardship</h3>
            <p className="text-xs text-luxury-medium font-light leading-relaxed font-serif">We exclusively support low-impact, high-benefit eco-lodges that directly provide stable employment and preserve regional fauna.</p>
          </div>
          <div>
            <span className="font-serif text-3xl font-light text-luxury-accent">03</span>
            <h3 className="text-xs uppercase tracking-widest font-semibold mt-3 mb-2 text-luxury-dark">Unfettered Access</h3>
            <p className="text-xs text-luxury-medium font-light leading-relaxed font-serif">Our deep local network allows us to secure access to private reserves, closed-door museum viewings, and conservation sites.</p>
          </div>
        </div>
      </section>

      {/* 4. MEET THE TEAM SECTION (5 People with Video Intros) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-luxury-accent mb-4 font-semibold">Our Custodians</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-dark">Meet Our Team</h2>
          <p className="text-sm text-luxury-medium font-light font-serif mt-2">
            The travel designers, logisticians, and naturalists framing your customized routes.
          </p>
        </div>

        {/* 5-Member Grid (Adapts to 3 columns on desktop, centering the bottom 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col h-full border border-luxury-border bg-luxury-white p-6 justify-between shadow-sm">
              <div>
                
                {/* Immersive Video/Poster Card */}
                <div className="relative overflow-hidden aspect-[4/5] bg-luxury-dark mb-6 group">
                  <video 
                    className="w-full h-full object-cover absolute inset-0 z-10" 
                    poster={member.image} 
                    controls
                    preload="none"
                  >
                    <source src={member.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Visual Overlay indicator matching Black Tomato aesthetic */}
                  <div className="absolute inset-0 bg-luxury-dark bg-opacity-20 group-hover:bg-opacity-40 transition-all z-0 pointer-events-none flex items-center justify-center">
                    <div className="bg-luxury-cream bg-opacity-95 rounded-full p-4 shadow-lg text-luxury-dark hover:scale-105 transition-transform">
                      <Play size={20} fill="#1E140F" className="ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Profile Meta details */}
                <h3 className="font-serif text-2xl font-light text-luxury-dark mb-1">{member.name}</h3>
                <span className="text-[10px] tracking-widest uppercase text-luxury-accent font-semibold block mb-4">
                  {member.role}
                </span>
                <p className="text-xs text-luxury-medium font-light leading-relaxed font-serif">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}