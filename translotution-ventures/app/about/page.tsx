import React from 'react';


const teamMembers = [
  {
    name: "Patrick Njiru",
    role: "Chief Executive Officer & Founder",
    image: "patrick.jpg"
  },
  
  {
    name: "Janet Njeri ",
    role: "logistics, planning and booking expert",
    image: "janet.jpg"
  },
  {
    name: "James Mwaura",
    role: "East African expert",
    image: "mwaura.jpg" // Replace with "/images/team-3.jpg"
  },
  {
    name: "Joy Ntokozi",
    role: "Zimbabwe tour leader",
    image: "joy.jpg" // Replace with "/images/team-4.jpg"
  },
  {
    name: "James Boro",
    role: "South Africa tour guide",
    image: "james.jpg" // Replace with "/images/team-5.jpg"
  }
];
// =========================================================================

export default function About() {
  return (
    <div className="py-16 bg-luxury-cream text-luxury-dark">
      
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
          <div className="relative aspect-[3/4] overflow-hidden border border-luxury-border shadow-sm">
            <img 
              src="about.jpg "
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

      {/* 4. MEET THE TEAM SECTION (Clean Grid of Pictures, Names, and Roles) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-luxury-accent mb-4 font-semibold">Our Custodians</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-dark">Meet Our Team</h2>
          <p className="text-sm text-luxury-medium font-light font-serif mt-2">
            The travel designers, logisticians, and naturalists framing your customized routes.
          </p>
        </div>

        {/* 5-Member Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col h-full bg-luxury-white border border-luxury-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              
              {/* Photo Frame with subtle hover scale effect */}
              <div className="relative overflow-hidden aspect-[4/5] bg-luxury-dark">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter brightness-95" 
                />
              </div>

              {/* Profile Details Area */}
              <div className="p-6 text-center border-t border-luxury-border">
                <h3 className="font-serif text-2xl font-light text-luxury-dark mb-1">{member.name}</h3>
                <span className="text-[10px] tracking-widest uppercase text-luxury-accent font-semibold block">
                  {member.role}
                </span>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}