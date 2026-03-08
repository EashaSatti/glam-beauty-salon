import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Youtube, Instagram, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Construct WhatsApp Message with proper encoding
    const messageBody = `*New Inquiry from Glam & Beauty Website*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Subject:* ${subject}\n` +
      `*Message:* ${message}`;

    const encodedMessage = encodeURIComponent(messageBody);
    const phoneNumber = '923365082953';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    setStatus('success');
    form.reset();
    
    // Reset status after a few seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-ink"
          >
            Visit the <span className="text-primary">Glam House</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left: Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-ink mb-8">Contact Information</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blush flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ink mb-1">Our Location</h4>
                  <p className="text-ink/60 leading-relaxed">
                    Misrial Road, Friends Colony, Rawalpindi, 46000<br />
                    Serving Chour Harpal & surrounding areas.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blush flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ink mb-1">Call / WhatsApp</h4>
                  <p className="text-ink/60 leading-relaxed">
                    0336 5082953<br />
                    Available for instant booking & consultation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blush flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ink mb-1">Business Hours</h4>
                  <p className="text-ink/60 leading-relaxed">
                    Daily: 10:00 AM – 8:00 PM<br />
                    <span className="text-primary font-semibold">Closed on last Sunday of every month.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <h4 className="text-sm uppercase tracking-widest font-bold text-ink/40 mb-6">Follow Our Journey</h4>
            <div className="flex items-center gap-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://www.instagram.com/glambeautysalonbyzee"
                target="_blank"
                className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-lg"
              >
                <Instagram size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://www.youtube.com/@glambeautysalonbyzee"
                target="_blank"
                className="w-14 h-14 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-lg"
              >
                <Youtube size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://wa.me/923365082953"
                target="_blank"
                className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg"
              >
                <MessageCircle size={28} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blush/30 p-8 md:p-10 rounded-[40px] border border-blush"
          >
            <h3 className="text-2xl font-serif font-bold text-ink mb-2">Send a Message</h3>
            <p className="text-ink/60 mb-8">Fill the form to chat with us on WhatsApp instantly.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink/70 ml-1">Full Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white border border-blush rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink/70 ml-1">Email Address</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 bg-white border border-blush rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-ink/70 ml-1">Subject</label>
                <select
                  name="subject"
                  className="w-full px-6 py-4 bg-white border border-blush rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Bridal Package Quote</option>
                  <option>Appointment Reschedule</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-ink/70 ml-1">Your Message</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 bg-white border border-blush rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                />
              </div>

              <button
                disabled={status === 'loading' || status === 'success'}
                type="submit"
                className="w-full py-5 bg-[#25D366] text-white rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={24} />
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <MessageCircle size={20} />
                    Send via WhatsApp
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-500 text-sm text-center font-medium">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Full Width Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-blush"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.123456789!2d73.0123456789!3d33.6123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df947c9435f731%3A0x60330147708f2902!2sMisrial%20Rd%2C%20Rawalpindi!5e0!3m2!1sen!2spk!4v1620000000000!5m2!1sen!2spk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl flex items-center justify-between max-w-md">
            <div>
              <h5 className="font-bold text-ink">Find us on Maps</h5>
              <p className="text-xs text-ink/60">Misrial Road, Friends Colony, Rawalpindi</p>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank"
              className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}