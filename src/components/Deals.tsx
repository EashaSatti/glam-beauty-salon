import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Sparkles, Scissors, Wand2 } from 'lucide-react';

const deals = [
  {
    id: 1,
    title: "Deal 1: Basic Glow",
    items: ["Mani cure", "Pedicure", "Eyebrows", "Upper Lips", "Face wax"],
    originalPrice: "2500",
    discountedPrice: "1250",
    discount: "50% OFF",
    icon: Sparkles
  },
  {
    id: 3,
    title: "Deal 3: Smooth Skin",
    items: ["Becute Facial", "Half Arms Wax", "Half Legs Wax", "Eyebrows", "Upper Lips"],
    originalPrice: "4000",
    discountedPrice: "2000",
    discount: "50% OFF",
    icon: Wand2
  },
  {
    id: 6,
    title: "Deal 6: All-in-One Special",
    items: ["Glow N Whitening Facial", "Full Face Wax", "Half Arm & Half Leg Wax", "Eyebrows", "Upper Lips", "Hand & Feet Polishing", "Head & Shoulder Massage"],
    originalPrice: "5500",
    discountedPrice: "2800",
    discount: "50% OFF",
    icon: Tag
  },
  {
    id: 12,
    title: "Deal 12: Keratin Magic",
    items: ["Shoulder Length: 7,500 (was 10k)", "Armpit Length: 9,000 (was 12k)", "Waist Length: 12,000 (was 16k)"],
    originalPrice: "10,000+",
    discountedPrice: "7,500+",
    discount: "25% OFF",
    icon: Scissors
  },
  {
    id: 13,
    title: "Deal 13: Hair Rebonding",
    items: ["Shoulder Length: 7,500 (was 10k)", "Armpit Length: 9,000 (was 12k)", "Waist Length: 12,000 (was 16k)"],
    originalPrice: "10,000+",
    discountedPrice: "7,500+",
    discount: "25% OFF",
    icon: Scissors
  },
  {
    id: 16,
    title: "Deal 16: Style & Cut",
    items: ["Hair Cutting / Hair Trimming", "Any Length", "Blow Dry Setting"],
    originalPrice: "1500",
    discountedPrice: "750",
    discount: "50% OFF",
    icon: Scissors
  }
];

export default function Deals() {
  return (
    <section id="deals" className="py-24 bg-ink text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Limited Time Offers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Exclusive <span className="text-primary">Salon Deals</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Grab our most popular packages at unbeatable prices. Perfect for your next glow-up!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group bg-white/5 border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all duration-500"
            >
              <div className="absolute -top-4 -right-4 bg-accent text-ink font-bold px-4 py-2 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                {deal.discount}
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  <deal.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">{deal.title}</h3>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {deal.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-end justify-between pt-6 border-t border-white/10">
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Original Price</p>
                  <p className="text-lg text-white/40 line-through font-medium">Rs. {deal.originalPrice}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-accent uppercase tracking-widest mb-1 font-bold">Deal Price</p>
                  <p className="text-3xl font-serif font-bold text-primary">Rs. {deal.discountedPrice}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
                className="w-full mt-8 py-3 bg-white/10 hover:bg-primary text-white rounded-xl font-bold transition-all border border-white/10"
              >
                Book This Deal
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}