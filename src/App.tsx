import { useState } from "react";
import { CartProvider } from "./CartContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { ComboSection } from "./components/ComboSection";
import { AboutSection } from "./components/AboutSection";
import { ReviewSection } from "./components/ReviewSection";
import { GallerySection } from "./components/GallerySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SlideInCart } from "./components/Cart";
import { FakeActivityPopup } from "./components/FakeActivityPopup";
import { SplashScreen } from "./components/SplashScreen";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { motion } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <CartProvider>
      {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="bg-khanabi-dark text-white min-h-screen selection:bg-khanabi-orange selection:text-white font-sans overflow-x-hidden"
      >
        <Navbar />
        <main>
          <HeroSection />
          <MenuSection />
          <ComboSection />
          <AboutSection />
          <ReviewSection />
          <GallerySection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <SlideInCart />
        <FakeActivityPopup />
      </motion.div>
    </CartProvider>
  );
}
