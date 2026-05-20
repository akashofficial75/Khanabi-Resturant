import { motion } from "motion/react";
import { Facebook, Instagram } from "lucide-react";
import { ReactNode } from "react";

interface SocialButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  glowClass: string;
  iconColorGlow: string;
}

export function SocialButton({ href, icon, label, glowClass, iconColorGlow }: SocialButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.12, y: -2, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
      className="relative group w-12 h-12 rounded-full glass-panel flex items-center justify-center transition-all duration-500 hover:border-white/20 hover:bg-white/10"
      title={label}
    >
      {/* Constant subtle pulsing glow */}
      <motion.div 
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute inset-0 rounded-full blur-[8px] transition-opacity duration-500 group-hover:opacity-0 ${glowClass}`} 
      />
      
      {/* Intense hover glow */}
      <div className={`absolute -inset-1.5 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-[12px] ${glowClass}`} />
      <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-[4px] ${glowClass}`} />

      {/* Icon with drop shadow on hover */}
      <span className={`relative z-10 text-white transition-all duration-500 ${iconColorGlow}`}>
        {icon}
      </span>
    </motion.a>
  );
}

export function SocialGroup({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <SocialButton 
        href="https://www.facebook.com/khanabifood" 
        icon={<Facebook size={20} />} 
        label="Visit Khanabi on Facebook"
        glowClass="bg-gradient-to-tr from-blue-700 via-blue-500 to-cyan-400"
        iconColorGlow="group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,1)]"
      />
      <SocialButton 
        href="https://www.instagram.com/akash_official75/?hl=en" 
        icon={<Instagram size={20} />} 
        label="Follow Khanabi on Instagram"
        glowClass="bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600"
        iconColorGlow="group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,1)]"
      />
    </div>
  );
}
