import React from 'react';
import { Crown, Heart, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Crown className="w-8 h-8 text-primary" />
              <span className="text-2xl font-serif font-bold tracking-tight">Glam & Beauty</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Rawalpindi's premier destination for luxury bridal beauty. We turn your wedding dreams into reality with expert care and premium products.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 font-serif">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 font-serif">Our Services</h4>
            <ul className="space-y-4">
              {['Bridal Makeup', 'Hair Styling', 'Skin Care', 'Nail Art', 'Mehndi Design'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/60 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8 font-serif">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-primary shrink-0" size={20} />
                <span className="text-white/60">Misrial Road, Friends Colony, Rawalpindi</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-primary shrink-0" size={20} />
                <span className="text-white/60">0336 5082953</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-primary shrink-0" size={20} />
                <span className="text-white/60">info@glambeauty.pk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-white/40 text-sm">
            Copyright 2026 © Glam & Beauty Salon. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" /> in Rawalpindi
          </p>
        </div>
      </div>
    </footer>
  );
}
