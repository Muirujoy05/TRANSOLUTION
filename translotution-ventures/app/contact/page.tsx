import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-16">
      <section className="bg-luxury-dark text-luxury-white py-24 text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-luxury-accent mb-4 font-semibold">Transolution</p>
        <h1 className="font-serif text-4xl md:text-6xl font-light max-w-4xl mx-auto leading-tight">
          Ready to serve <span className="italic">African itinerary.</span>
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-light">Office & Inquiries</h3>
            <p className="text-xs text-luxury-medium font-serif font-light leading-relaxed">
              We look forward to speaking with you. Our travel design specialists will reach out directly to evaluate your travel preferences and desired timeline.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="text-luxury-accent shrink-0 mt-1" size={18} />
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-semibold text-luxury-medium">Telephone</h4>
                <p className="text-xs text-luxury-dark font-sans mt-1">+254 20 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-luxury-accent shrink-0 mt-1" size={18} />
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-semibold text-luxury-medium">Inquiries Email</h4>
                <p className="text-xs text-luxury-dark font-sans mt-1">Transolutionventures@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-luxury-accent shrink-0 mt-1" size={18} />
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-semibold text-luxury-medium">location</h4>
                <p className="text-xs text-luxury-dark font-serif font-light mt-1">felma bulding</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 bg-luxury-white border border-luxury-border p-8 md:p-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-widest text-luxury-medium mb-2 font-semibold">Your Name</label>
                <input 
                  type="text" 
                  className="bg-transparent border-b border-luxury-border focus:border-luxury-dark py-2 text-xs outline-none transition-colors"
                  placeholder="Elena Rostova"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-widest text-luxury-medium mb-2 font-semibold">Email Address</label>
                <input 
                  type="email" 
                  className="bg-transparent border-b border-luxury-border focus:border-luxury-dark py-2 text-xs outline-none transition-colors"
                  placeholder="elena@domain.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-widest text-luxury-medium mb-2 font-semibold">Desired Destination</label>
                <select className="bg-transparent border-b border-luxury-border focus:border-luxury-dark py-2 text-xs outline-none transition-colors text-luxury-medium">
                  <option value="kenya">Kenya</option>
                  <option value="east-africa">East Africa (Tanzania/Rwanda/Uganda)</option>
                  <option value="africa">Mainland Africa Wide</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-widest text-luxury-medium mb-2 font-semibold">Package Framework</label>
                <select className="bg-transparent border-b border-luxury-border focus:border-luxury-dark py-2 text-xs outline-none transition-colors text-luxury-medium">
                  <option value="single">Single Packages</option>
                  <option value="couple">Couple Packages</option>
                  <option value="family">Family Packages</option>
                  <option value="group">Group Packages</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-[9px] uppercase tracking-widest text-luxury-medium mb-2 font-semibold">Preferred Departure Period</label>
              <input 
                type="text" 
                className="bg-transparent border-b border-luxury-border focus:border-luxury-dark py-2 text-xs outline-none transition-colors"
                placeholder="e.g. October or June"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[9px] uppercase tracking-widest text-luxury-medium mb-2 font-semibold">Describe your vision</label>
              <textarea 
                rows={4} 
                className="bg-transparent border-b border-luxury-border focus:border-luxury-dark py-2 text-xs outline-none transition-colors resize-none"
                placeholder="Details of your ideal landscape, pacing, and visual focus..."
              />
            </div>

            {/* FIXED: Removed the inline "onClick" event handler to allow Server Component compilation */}
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