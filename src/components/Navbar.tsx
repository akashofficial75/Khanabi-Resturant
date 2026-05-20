import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "../CartContext";
import { Logo } from "./Logo";
import { SocialGroup } from "./SocialButtons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Combos", href: "#combos" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "py-4 bg-khanabi-dark/80 backdrop-blur-xl border-b border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo className="h-10 md:h-12" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-khanabi-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-white/10 hidden lg:block">
            <SocialGroup className="scale-90 origin-left" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-white hover:text-khanabi-orange transition-colors"
          >
            <ShoppingBag size={24} />
            {items.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 w-5 h-5 bg-khanabi-red text-white text-xs font-bold rounded-full flex items-center justify-center translate-x-1 -translate-y-1"
              >
                {items.reduce((acc, item) => acc + item.quantity, 0)}
              </motion.span>
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-khanabi-dark/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-khanabi-orange py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 pt-6 border-t border-white/10">
                <SocialGroup />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
