import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Flame, Utensils } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: "default" | "monochrome";
  disableLink?: boolean;
}

export function Logo({ className = "", variant = "default", disableLink = false }: LogoProps) {
  const isMono = variant === "monochrome";
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);
  
  const content = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative group inline-flex flex-col items-center justify-center ${className}`}
    >
      <div className="relative flex flex-col items-center justify-center md:h-20">
        {/* Floating & Glowing Background Effect */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.15, 1],
            y: [0, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute inset-0 bg-khanabi-orange/40 blur-[25px] rounded-full group-hover:bg-khanabi-orange/70 transition-colors duration-500 ${isMono ? 'hidden' : 'block'}`} 
        />
        
        {/* Glassmorphism Background Panel */}
        <div className={`absolute inset-[-10px] bg-white/5 backdrop-blur-md border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isMono ? 'hidden' : 'block'}`} />

        {/* Floating Animation for the SVG Logo */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Logo Graphic */}
          <div className={`relative flex items-center justify-center mb-1 ${isMono ? 'text-white opacity-80' : 'text-khanabi-orange'}`}>
            <Flame className="w-8 h-8 md:w-10 md:h-10 absolute z-10 -top-2 drop-shadow-md" strokeWidth={2.5} fill="currentColor" />
            <Utensils className="w-10 h-10 md:w-12 md:h-12 opacity-90 relative mt-2" strokeWidth={2} />
          </div>

          {/* Logo Text */}
          <div className="text-xl md:text-3xl font-display font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,107,0,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(255,107,0,0.8)] transition-all">
            Khanabi
          </div>
          <div className={`text-[0.6rem] md:text-xs font-medium tracking-widest uppercase ${isMono ? 'text-white/60' : 'text-khanabi-orange/90'}`}>
            Cafe and restaurant
          </div>
        </motion.div>
      </div>

      {/* Animated Loading Progress Under Logo */}
      <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-white/10 rounded-full overflow-hidden ${isMono ? 'hidden' : 'block'}`}>
        <motion.div 
          className="h-full bg-gradient-to-r from-khanabi-red via-khanabi-orange to-yellow-400"
          style={{ width: `${progress}%` }}
        />
        <div className="absolute inset-0 bg-khanabi-orange/50 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );

  if (disableLink) return content;
  
  return (
    <a href="#home" className="inline-block relative z-50">
      {content}
    </a>
  );
}
