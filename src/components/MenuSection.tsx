import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Star } from "lucide-react";
import { categories, menuItems } from "../data";
import { useCart } from "../CartContext";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 relative z-10 bg-khanabi-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-khanabi-orange font-medium tracking-wider uppercase text-sm mb-4 block">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Craving something <span className="text-gradient">delicious?</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-khanabi-orange text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative bg-khanabi-surface rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-khanabi-surface to-transparent opacity-80" />
                  
                  {item.tag && (
                    <div className="absolute top-4 left-4 bg-khanabi-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {item.tag}
                    </div>
                  )}
                  {item.isChefRecommended && (
                    <div className="absolute top-4 right-4 bg-khanabi-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Chef's Choice
                    </div>
                  )}
                </div>

                <div className="p-6 relative">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-display group-hover:text-khanabi-orange transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm bg-white/5 px-2 py-1 rounded-md">
                      <Star size={14} className="text-khanabi-orange" fill="currentColor" />
                      <span className="font-medium">{item.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/60 text-sm mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-display">৳{item.price}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-khanabi-orange hover:scale-110 transition-all group/btn"
                    >
                      <Plus className="text-white group-hover/btn:rotate-90 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
