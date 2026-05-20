import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, Clock, Facebook, CheckCircle2 } from "lucide-react";
import { SocialGroup } from "./SocialButtons";

const successMessages = [
  "Message sent successfully to Khanabi 🍔",
  "Khanabi will contact you soon.",
  "Thanks for reaching out!",
  "Your message has been received.",
];

export function ContactSection() {
  const [notification, setNotification] = useState({ visible: false, message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = successMessages[Math.floor(Math.random() * successMessages.length)];
    setNotification({ visible: true, message: msg });
    
    (e.target as HTMLFormElement).reset();

    setTimeout(() => {
      setNotification((prev) => ({ ...prev, visible: false }));
    }, 4000);
  };
  return (
    <section id="contact" className="py-24 relative bg-khanabi-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-khanabi-orange font-medium tracking-wider uppercase text-sm mb-4 block">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Drop by or <span className="text-gradient">order now.</span>
            </h2>
            <p className="text-white/60 mb-12">
              We are located in the heart of Kalampur. Find us easily or let us deliver hot food right to your doorstep.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="text-khanabi-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-white/60 text-sm">Kalampur Bazar Rd, Kalampur<br/>Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="text-khanabi-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call for Delivery</h4>
                  <p className="text-white/60 text-sm">01327-240031</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Clock className="text-khanabi-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                  <p className="text-white/60 text-sm">Everyday: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm">
              <a 
                href="https://wa.me/8801327240031" 
                target="_blank" 
                rel="noreferrer" 
                title="Chat with Khanabi on WhatsApp"
                className="px-8 py-4 bg-[#25D366] hover:bg-[#1ebd57] text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.8)] hover:-translate-y-1 relative group overflow-hidden whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10">WhatsApp Us</span>
              </a>
              <SocialGroup />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-khanabi-dark rounded-3xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-white/60 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-khanabi-orange focus:ring-1 focus:ring-khanabi-orange transition-colors"
                  placeholder="AkashProg"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-khanabi-orange focus:ring-1 focus:ring-khanabi-orange transition-colors"
                  placeholder="01XXX-XXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Message</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white h-32 resize-none focus:outline-none focus:border-khanabi-orange focus:ring-1 focus:ring-khanabi-orange transition-colors"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-white hover:bg-gray-200 text-black font-bold rounded-xl transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Live Notification Popup */}
      <AnimatePresence>
        {notification.visible && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            className="fixed top-24 right-6 z-50 bg-khanabi-surface border border-white/10 p-4 rounded-xl glass-panel shadow-2xl flex items-center gap-4 max-w-sm"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 size={20} className="text-green-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Success</p>
              <p className="text-white/70 text-sm mt-0.5">{notification.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
