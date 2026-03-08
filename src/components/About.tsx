import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Star } from 'lucide-react';
import { IMAGES } from '../constants';

const stats = [
  { label: 'Happy Brides', value: '5000+', icon: Users },
  { label: 'Years of Excellence', value: '6+', icon: Award },
  { label: '5-Star Reviews', value: '100+', icon: Star },
  { label: 'Expert Artists', value: '12', icon: CheckCircle },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={IMAGES.aboutInterior}
                alt="Salon Interior"
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blush rounded-full -z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-4 border-accent/20 rounded-2xl -z-0" />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-5 -left-5 z-20 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center p-4 border border-blush"
            >
              <img src={IMAGES.aboutOwnerIcon} alt="Icon" className="w-full h-full opacity-20" />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-8 leading-tight">
              Crafting Dreams Since <span className="text-primary">2018</span>
            </h2>
            <div className="space-y-6 text-lg text-ink/70 leading-relaxed">
              <p>
                Since 2018, Glam & Beauty Salon has been turning dreams into reality for brides across Rawalpindi. 
                Led by our passionate owner Zahra, every service is done with love, premium products and complete hygiene.
              </p>
              <p>
                We believe that every woman deserves to feel like a queen on her special day. Our team of certified 
                experts specializes in blending traditional Pakistani bridal aesthetics with modern luxury techniques.
              </p>
              <p className="font-serif italic text-ink font-medium">
                "Your comfort and satisfaction is our only priority. We don't just provide services; we create memories."
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-3xl font-serif font-bold text-primary mb-1">{stat.value}</span>
                  <span className="text-sm font-semibold text-ink/50 uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
