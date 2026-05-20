import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { comboItems } from "../data";
import { useCart } from "../CartContext";

export function ComboSection() {
  const { addToCart } = useCart();

  return (
    <section id="combos" className="py-24 relative bg-khanabi-surface">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-khanabi-red/10 via-khanabi-surface to-khanabi-surface pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-khanabi-red font-medium tracking-wider uppercase text-sm mb-4 block">Special Offers</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Unbeatable <span className="text-gradient">Combos</span>
          </h2>
          <p className="text-white/60">
            Grab our specially curated combos for the best value. Perfect for hanging out with friends or family dinners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comboItems.map((combo, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              key={combo.id}
              className="group relative bg-khanabi-dark rounded-3xl overflow-hidden border border-white/10 hover:border-khanabi-red/50 transition-colors"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={combo.image}
                  alt={combo.name}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-khanabi-dark to-transparent" />
                {combo.tag && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-khanabi-orange to-khanabi-red text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {combo.tag}
                  </div>
                )}
              </div>

              <div className="p-8 relative">
                <h3 className="text-2xl font-bold font-display mb-2">{combo.name}</h3>
                <p className="text-white/60 text-sm mb-6">{combo.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {combo.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-khanabi-red" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-sm text-white/40 line-through">৳{combo.price + 200}</span>
                    <span className="text-3xl font-bold font-display text-khanabi-orange">৳{combo.price}</span>
                  </div>
                  <button
                    onClick={() => addToCart(combo as any)}
                    className="px-6 py-3 bg-white/10 hover:bg-khanabi-red text-white font-medium rounded-xl transition-colors flex items-center gap-2 group/btn"
                  >
                    Add Deal
                    <ShoppingBag size={18} className="group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
