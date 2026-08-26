import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

// Custom inline SVG for Instagram (bypasses the deprecated lucide-react import)
function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  return (
    <div className="py-16 bg-luxury-cream text-luxury-dark">
      
      {/* 1. HEADER BANNER */}
      <section className="bg-luxury-dark text-luxury-white py-24 text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-luxury-accent mb-4 font-semibold">Direct Concierge</p>
        <h1 className="font-serif text-4xl md:text-6xl font-light max-w-4xl mx-auto leading-tight">
          Compose your custom <span className="italic">African itinerary.</span>
        </h1>
      </section>

      {/* 2. CONTACT CHANNELS & INQUIRY FORM */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Direct Communication Channels */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl md:text-3xl font-light">Office & Inquiries</h3>
            <p className="text-xs text-luxury-medium font-serif font-light leading-relaxed">
              We look forward to speaking with you. Our travel design specialists will reach out directly to evaluate your travel preferences and desired timeline.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Call / WhatsApp */}
            <div className="flex items-start gap-4">
              <Phone className="text-luxury-accent shrink-0 mt-1" size={18} />
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-semibold text-luxury-medium">Call / WhatsApp</h4>
                <div className="flex flex-col space-y-1 mt-1 font-sans text-xs text-luxury-dark">
                  <a 
                    href="https://wa.me/254714036800" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-luxury-accent transition-colors"
                  >
                    +254 714 036800
                  </a>
                  <a 
                    href="https://wa.me/254722861427" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-luxury-accent transition-colors"
                  >
                    +254 722 861427
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-luxury-accent shrink-0 mt-1" size={18} />
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-semibold text-luxury-medium">Inquiries Email</h4>
                <a 
                  href="mailto:curator@translotution.com"
                  className="text-xs text-luxury-dark font-sans mt-1 hover:text-luxury-accent transition-colors block"
                >
                  Transolutionventures@gmail.com
                </a>
              </div>
            </div>

            {/* Instagram (Rendered with the custom SVG component) */}
            <div className="flex items-start gap-4">
              <InstagramIcon className="text-luxury-accent shrink-0 mt-1" size={18} />
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-semibold text-luxury-medium">Instagram</h4>
                <a 
                  href="https://www.instagram.com/transolutionventuresltd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-luxury-dark font-sans mt-1 hover:text-luxury-accent transition-colors block"
                >
                  @transolutionventuresltd
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <MapPin className="text-luxury-accent shrink-0 mt-1" size={18} />
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-semibold text-luxury-medium">Concierge Desk</h4>
                <p className="text-xs text-luxury-dark font-serif font-light mt-1">Felma Building,Kahawa Sukari</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Custom Inquiry Form Connected to Web3Forms */}
        <div className="lg:col-span-7 bg-luxury-white border border-luxury-border p-8 md:p-12 shadow-sm">
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            className="space-y-6"
          >
            {/* Web3Forms Access Key */}
            <input 
              type="hidden" 
              name="access_key" 
              value="2209899c-f61a-4b4b-a967-ad4aacf00362" 
            />
            
            {/* Custom Subject for Email Notification */}
            <input 
              type="hidden" 
              name="subject" 
              value="New Consultation Request - Translotution Ventures" 
            />
            
            <input 
              type="hidden" 
              name="from_name" 
              value="Translotution Ventures Website" 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-widest text-luxury-medium mb-2 font-semibold">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="bg-transparent border-b border-luxury-border focus:border-luxury-dark py-2 text-xs outline-none transition-colors text-luxury-dark"
                  placeholder="Elena Rostova"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-widest text-luxury-medium mb-2 font-semibold">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="bg-transparent border-b border-luxury-border focus:border-luxury-dark py-2 text-xs outline-none transition-colors text-luxury-dark"
                  placeholder="elena@domain.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-widest text-luxury-medium mb-2 font-semibold">Desired Geography</label>
                <select 
                  name="geography" 
                  className="bg-transparent border-b border-luxury-border focus:border-luxury-dark py-2 text-xs outline-none transition-colors text-luxury-medium"
                >
                  <option value="Kenya Sights">Kenya Sights</option>
                  <option value="East Africa">East Africa (Tanzania / Rwanda / Uganda)</option>
                  <option value="Mainland Africa">Mainland Africa (Zimbabwe / South Africa)</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-widest text-luxury-medium mb-2 font-semibold">Travel Focus</label>
                <select 
                  name="travel_focus" 
                  className="bg-transparent border-b border-luxury-border focus:border-luxury-dark py-2 text-xs outline-none transition-colors text-luxury-medium"
                >
                  <option value="Wildlife & Big Five Safaris">Wildlife & Big Five Safaris</option>
                  <option value="Mountain Gorilla Trekking">Mountain Gorilla Trekking</option>
                  <option value="Coastal & Island Relaxation">Coastal & Island Relaxation</option>
                  <option value="Cultural & Heritage Routes">Cultural & Heritage Routes</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-[9px] uppercase tracking-widest text-luxury-medium mb-2 font-semibold">Preferred Departure Period</label>
              <input 
                type="text" 
                name="departure_period"
                className="bg-transparent border-b border-luxury-border focus:border-luxury-dark py-2 text-xs outline-none transition-colors text-luxury-dark"
                placeholder="e.g. October or June"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[9px] uppercase tracking-widest text-luxury-medium mb-2 font-semibold">Describe your vision</label>
              <textarea 
                rows={4} 
                name="vision_details"
                required
                className="bg-transparent border-b border-luxury-border focus:border-luxury-dark py-2 text-xs outline-none transition-colors resize-none text-luxury-dark"
                placeholder="Details of your ideal landscape, pacing, and visual focus..."
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-luxury-dark text-luxury-white hover:bg-luxury-accent hover:text-luxury-dark transition-colors text-xs tracking-widest uppercase font-semibold py-4 cursor-pointer"
            >
              Submit Consultation Request
            </button>
          </form>
        </div>

      </section>
    </div>
  );
}