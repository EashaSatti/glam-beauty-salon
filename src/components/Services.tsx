import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Heart, Palette, Wand2, Gem } from 'lucide-react';
import { IMAGES } from '../constants';

const services = [
  {
    title: 'Bridal Makeup',
    description: 'Full bridal transformations & trials for your big day.',
    price: '25,000',
    icon: Sparkles,
    image: IMAGES.serviceBridal,
  },
  {
    title: 'Hair Transformations',
    description: 'Keratin, Protein, Balayage, Global Color & Rebonding.',
    price: '8,000',
    icon: Scissors,
    image: IMAGES.serviceHair,
  },
  {
    title: 'Premium Facials',
    description: 'Advanced skin treatments for a natural bridal glow.',
    price: '4,500',
    icon: Wand2,
    image: IMAGES.serviceFacial,
  },
  {
    title: 'Hair Spa',
    description: 'Deep conditioning and therapeutic scalp treatments.',
    price: '3,000',
    icon: Heart,
    image: IMAGES.serviceSpa,
  },
  {
    title: 'Nail Art & Mani-Pedi',
    description: 'Luxury hand and foot care with artistic nail designs.',
    price: '2,500',
    icon: Gem,
    image: IMAGES.serviceNails,
  },
  {
    title: 'Mehndi Art',
    description: 'Exquisite bridal Mehndi patterns and packages.',
    price: '5,000',
    icon: Palette,
    image: IMAGES.serviceMehndi,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-blush/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Our Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6"
          >
            Signature <span className="text-primary">Services</span>
          </motion.h2>
          <p className="text-ink/60 max-w-2xl mx-auto text-lg">
            Experience the pinnacle of beauty and relaxation with our curated selection of premium salon services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-ink/5 border border-white"
            >
              {/* Image Overlay on Hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="relative z-10 p-8">
                <div className="w-14 h-14 rounded-2xl bg-blush flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-ink mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-ink/60 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-blush">
                  <span className="text-sm font-bold text-accent uppercase tracking-wider">
                    Starts from Rs. {service.price}
                  </span>
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
                    className="text-primary font-bold text-sm hover:underline underline-offset-4"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
