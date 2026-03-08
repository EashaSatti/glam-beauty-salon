import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: "Sana Khan",
    date: "2 months ago",
    text: "Absolutely loved my bridal makeup! Zahra is a magician. She understood exactly what I wanted. The glow was natural and lasted all night. Highly recommended!",
    rating: 5
  },
  {
    name: "Ayesha Malik",
    date: "1 month ago",
    text: "Got my hair keratin treatment done here. The results are amazing. My hair feels so soft and healthy. The staff is very professional and hygiene is 10/10.",
    rating: 5
  },
  {
    name: "Zainab Bibi",
    date: "3 weeks ago",
    text: "Best salon in Misrial Road area. Their facials are so relaxing. I've been a regular customer for 3 years now. Love the environment!",
    rating: 5
  },
  {
    name: "Fatima Ahmed",
    date: "2 weeks ago",
    text: "The bridal package is very affordable and premium. They use high-end imported products. My sister's wedding makeup was flawless.",
    rating: 5
  },
  {
    name: "Hina Gul",
    date: "5 days ago",
    text: "Very professional team. Zahra personally supervises everything. The nail art was so creative. Definitely coming back!",
    rating: 5
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 bg-blush/20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Quote className="absolute -top-10 -left-10 w-64 h-64 text-primary rotate-12" />
        <Quote className="absolute -bottom-10 -right-10 w-64 h-64 text-primary -rotate-12" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-4">
            Real Stories from <span className="text-primary">Real Brides</span>
          </h2>
          <div className="flex items-center justify-center gap-1 text-accent">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
            <span className="ml-2 text-ink/60 font-semibold">4.9/5 based on 100+ reviews</span>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-primary/5 text-center relative"
            >
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-8" />
              <p className="text-xl md:text-2xl text-ink/80 font-serif italic leading-relaxed mb-10">
                "{reviews[currentIndex].text}"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blush rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-4 border-2 border-white shadow-lg">
                  {reviews[currentIndex].name[0]}
                </div>
                <h4 className="text-xl font-bold text-ink">{reviews[currentIndex].name}</h4>
                <span className="text-sm text-ink/40 font-medium">{reviews[currentIndex].date}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-10">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="https://www.google.com/maps"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all"
          >
            See all on Google Reviews
          </motion.a>
        </div>
      </div>
    </section>
  );
}
