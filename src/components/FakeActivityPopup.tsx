import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bell } from "lucide-react";
import { menuItems } from "../data";

export function FakeActivityPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [item, setItem] = useState<{name: string, time: number} | null>(null);

  useEffect(() => {
    const triggerPopup = () => {
      const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
      const randomTime = Math.floor(Math.random() * 10) + 1;
      setItem({ name: randomItem.name, time: randomTime });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // First popup after 10s
    const firstTimeout = setTimeout(triggerPopup, 10000);

    // Recurring popups every 30-45s
    const interval = setInterval(() => {
      if (!isVisible) {
        setTimeout(triggerPopup, Math.random() * 15000);
      }
    }, 30000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && item && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 left-6 z-50 bg-khanabi-surface border border-white/10 p-4 rounded-2xl glass-panel shadow-2xl flex items-center gap-4 max-w-sm pointer-events-none"
        >
          <div className="w-10 h-10 rounded-full bg-khanabi-orange/20 flex items-center justify-center shrink-0">
            <Bell size={18} className="text-khanabi-orange animate-bounce" />
          </div>
          <div>
            <p className="text-sm font-medium">Someone just ordered</p>
            <p className="text-khanabi-orange font-bold font-display">{item.name}</p>
            <p className="text-xs text-white/40 mt-1">{item.time} {item.time === 1 ? 'min' : 'mins'} ago in Kalampur</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
