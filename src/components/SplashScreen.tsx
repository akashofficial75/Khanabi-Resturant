import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Keep splash screen visible for 3 seconds to show off the brand
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for fade-out animation to complete
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-khanabi-dark flex items-center justify-center overflow-hidden"
        >
          {/* Cinematic lighting background */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-khanabi-orange/10 rounded-full blur-[100px] pointer-events-none" 
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-khanabi-red/10 rounded-full blur-[80px] pointer-events-none" 
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Giant Animated Logo for Splash Screen */}
            <div className="h-40 md:h-56 mb-12">
              <Logo disableLink className="h-full scale-125" />
            </div>
            
            {/* Elegant loading progress line */}
            <div className="w-64 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 w-full bg-gradient-to-r from-transparent via-khanabi-orange to-transparent"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-khanabi-orange/80 text-sm font-medium tracking-[0.3em] uppercase mt-6"
            >
              Taste That Hits Different
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
