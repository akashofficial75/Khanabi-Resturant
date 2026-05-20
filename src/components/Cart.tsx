import { motion } from "motion/react";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";
import { useCart } from "../CartContext";

export function SlideInCart() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={() => setIsCartOpen(false)}
        />
      )}
      
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isCartOpen ? "0%" : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-khanabi-surface border-l border-white/10 z-50 p-6 flex flex-col"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-display font-bold flex items-center gap-2">
            <ShoppingBag className="text-khanabi-orange" />
            Your Order
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-white/40">
              <ShoppingBag size={48} className="mb-4 opacity-20" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white/5 p-4 rounded-2xl glass-panel">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg leading-tight">{item.name}</h3>
                    <p className="text-khanabi-orange font-medium mt-1">৳{item.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 bg-white/10 rounded hover:bg-white/20 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-4 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 bg-white/10 rounded hover:bg-white/20 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="pt-6 mt-6 border-t border-white/10">
            <div className="flex justify-between items-center mb-6">
              <span className="text-white/60">Subtotal</span>
              <span className="text-2xl font-bold font-display">৳{totalPrice}</span>
            </div>
            <a
              href={`https://wa.me/8801327240031?text=Hello%20Khanabi!%20I%20would%20like%20to%20order:%0A${items.map(i => `${i.quantity}x ${i.name}`).join('%0A')}%0ATotal:%20৳${totalPrice}`}
              target="_blank"
              rel="noreferrer"
              title="Chat with Khanabi on WhatsApp"
              className="w-full py-4 bg-[#25D366] hover:bg-[#1ebd57] text-white text-center rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.8)] hover:-translate-y-1 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Order via WhatsApp
            </a>
          </div>
        )}
      </motion.div>
    </>
  );
}
