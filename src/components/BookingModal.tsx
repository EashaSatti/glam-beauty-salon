import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar, User, Phone, Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BookingFormData>();

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-booking', handleOpen);
    return () => window.removeEventListener('open-booking', handleOpen);
  }, []);

  const onSubmit = (data: BookingFormData) => {
    const whatsappMessage = `Hello Glam & Beauty Salon! I'd like to book an appointment.\n\nName: ${data.name}\nPhone: ${data.phone}\nService: ${data.service}\nPreferred Date: ${data.date}\nMessage: ${data.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/923365082953?text=${encodedMessage}`, '_blank');
    
    // Save to local storage for persistence
    const bookings = JSON.parse(localStorage.getItem('salon_bookings') || '[]');
    bookings.push({ ...data, timestamp: new Date().toISOString() });
    localStorage.setItem('salon_bookings', JSON.stringify(bookings));
    
    setIsOpen(false);
    reset();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="pink-gradient p-8 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <Sparkles className="w-10 h-10 mb-4 opacity-80" />
              <h2 className="text-3xl font-serif font-bold mb-2">Book Your Glow-Up</h2>
              <p className="text-white/80">Fill in the details and we'll get back to you instantly.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-5">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-ink/50 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                  <input
                    {...register('name', { required: true })}
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-3.5 bg-blush/30 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-ink/50 ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                  <input
                    {...register('phone', { required: true })}
                    placeholder="03xx xxxxxxx"
                    className="w-full pl-12 pr-4 py-3.5 bg-blush/30 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-ink/50 ml-1">Service</label>
                  <select
                    {...register('service', { required: true })}
                    className="w-full px-4 py-3.5 bg-blush/30 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl outline-none transition-all appearance-none"
                  >
                    <option value="Bridal Makeup">Bridal Makeup</option>
                    <option value="Hair Treatment">Hair Treatment</option>
                    <option value="Facial">Premium Facial</option>
                    <option value="Mani-Pedi">Mani-Pedi</option>
                    <option value="Mehndi">Mehndi Art</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-ink/50 ml-1">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 pointer-events-none" size={18} />
                    <input
                      type="date"
                      {...register('date', { required: true })}
                      className="w-full pl-12 pr-4 py-3.5 bg-blush/30 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-ink/50 ml-1">Message (Optional)</label>
                <textarea
                  {...register('message')}
                  placeholder="Any special requests?"
                  rows={3}
                  className="w-full px-4 py-3.5 bg-blush/30 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl outline-none transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl pink-gradient flex items-center justify-center gap-3 mt-4"
              >
                <Send size={20} />
                Send Request via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
