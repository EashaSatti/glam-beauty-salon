import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, UserCheck, Clock } from 'lucide-react';

const features = [
  {
    title: '100% Hygiene',
    desc: 'Complete safety & sanitized tools.',
    icon: ShieldCheck
  },
  {
    title: 'Premium Products',
    desc: 'High-end imported brands only.',
    icon: Sparkles
  },
  {
    title: 'Expert Artists',
    desc: 'Certified team led by Zahra.',
    icon: UserCheck
  },
  {
    title: 'Long Lasting',
    desc: 'Guaranteed results that stay.',
    icon: Clock
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-blush mx-auto flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5">
                <f.icon size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold text-ink mb-3">{f.title}</h4>
              <p className="text-ink/60 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
