import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import meatBoxImg from "../assets/images/meat_box_dish_1779248517778.png";
import fuskaImg from "../assets/images/fuska_dish_1779248480597.png";

export function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const sliderImages = [
    {
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      title: "Signature Burger",
      badge: "Signature Burger"
    },
    {
      src: fuskaImg,
      title: "Spicy Fuska",
      badge: "Street Special"
    },
    {
      src: meatBoxImg,
      title: "Premium Meat Box",
      badge: "Best Seller"
    },
    {
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
      title: "Cheesy Pizza",
      badge: "Crowd Favorite"
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % sliderImages.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-khanabi-dark/80 bg-gradient-to-b from-transparent to-khanabi-dark/95 z-10" />
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80"
          alt="Restaurant Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-khanabi-orange/20 rounded-full blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-khanabi-red/20 rounded-full blur-[120px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-khanabi-orange animate-pulse" />
            <span className="text-sm font-medium text-white/90">#1 Fast Food in Kalampur</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-6">
            Taste That <br />
            <span className="text-gradient">Hits Different.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
            Experience Kalampur's ultimate fast-food destination. From spicy fuska to loaded meat boxes — every bite is crafted to satisfy your cravings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="px-8 py-4 bg-khanabi-orange hover:bg-orange-600 text-white font-bold rounded-full transition-colors flex items-center justify-center gap-2 group box-glow hover:box-glow-hover"
            >
              Explore Menu
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-colors flex items-center justify-center"
            >
              Our Story
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=1" alt="Customer" className="w-12 h-12 rounded-full border-2 border-khanabi-dark object-cover" />
              <img src="https://i.pravatar.cc/100?img=2" alt="Customer" className="w-12 h-12 rounded-full border-2 border-khanabi-dark object-cover" />
              <img src="https://i.pravatar.cc/100?img=3" alt="Customer" className="w-12 h-12 rounded-full border-2 border-khanabi-dark object-cover" />
              <div className="w-12 h-12 rounded-full border-2 border-khanabi-dark bg-white/10 backdrop-blur-md flex items-center justify-center text-xs font-bold">
                50k+
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-khanabi-orange">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <span className="text-sm text-white/60 mt-1">Loved by locals</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Spinning decorative text or circle can go here */}
            <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-dashed border-white/20 animate-[spin_30s_linear_infinite_reverse]" />
            
            <div 
              className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] z-10 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIdx}
                  src={sliderImages[currentIdx].src}
                  alt={sliderImages[currentIdx].title}
                  initial={{ opacity: 0, scale: 0.9, rotate: -5, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, rotate: 5, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) handleNext();
                    else if (swipe > swipeConfidenceThreshold) handlePrev();
                  }}
                  className="w-full h-full object-cover rounded-full shadow-[0_0_50px_rgba(255,107,0,0.3)] hover:scale-105 transition-transform duration-500 absolute top-0 left-0 cursor-grab active:cursor-grabbing"
                />
              </AnimatePresence>

              {/* Controls */}
              <div className="absolute top-1/2 -translate-y-1/2 -inset-x-8 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button onClick={handlePrev} className="w-12 h-12 rounded-full bg-khanabi-dark/80 text-white flex items-center justify-center border border-white/10 hover:bg-khanabi-orange transition-colors pointer-events-auto backdrop-blur-md shadow-lg transform -translate-x-4 group-hover:translate-x-0 !duration-500 box-glow-hover">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={handleNext} className="w-12 h-12 rounded-full bg-khanabi-dark/80 text-white flex items-center justify-center border border-white/10 hover:bg-khanabi-orange transition-colors pointer-events-auto backdrop-blur-md shadow-lg transform translate-x-4 group-hover:translate-x-0 !duration-500 box-glow-hover">
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Dots */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {sliderImages.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      currentIdx === idx ? "bg-khanabi-orange w-8 shadow-[0_0_10px_rgba(255,107,0,0.8)]" : "bg-white/30 w-2 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-10 -left-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 z-20"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">🔥</span>
                <div>
                  <p className="font-bold">Hot Selling</p>
                  <AnimatePresence mode="popLayout">
                    <motion.p 
                      key={currentIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-white/60 origin-left whitespace-nowrap"
                    >
                      {sliderImages[currentIdx].badge}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 z-20"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">🛵</span>
                <div>
                  <p className="font-bold">Fast Delivery</p>
                  <p className="text-sm text-white/60">Within 30 mins</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
