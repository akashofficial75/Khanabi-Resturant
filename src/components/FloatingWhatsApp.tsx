import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/8801327240031"
      target="_blank"
      rel="noreferrer"
      title="Chat with Khanabi on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#1ebd57] rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.8)] transition-all duration-300 group"
    >
      <div className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 animate-ping bg-[#25D366]" />
      <span className="relative z-10 flex items-center justify-center w-full h-full">
        <MessageCircle size={28} />
      </span>
    </motion.a>
  );
}
