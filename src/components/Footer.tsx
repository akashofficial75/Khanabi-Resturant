import { Logo } from "./Logo";
import { SocialGroup } from "./SocialButtons";

export function Footer() {
  return (
    <footer className="bg-khanabi-dark border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo className="h-14 mb-6 justify-start" />
            <p className="text-white/60 max-w-sm mb-8">
              Kalampur’s premium fast-food destination. We serve taste that hits different, ensuring quality, hygiene, and a cinematic experience.
            </p>
            <SocialGroup />
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#menu" className="text-white/60 hover:text-khanabi-orange transition-colors">Our Menu</a></li>
              <li><a href="#combos" className="text-white/60 hover:text-khanabi-orange transition-colors">Special Combos</a></li>
              <li><a href="#about" className="text-white/60 hover:text-khanabi-orange transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-khanabi-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Delivery Rules</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm focus:outline-none">
            &copy; {new Date().getFullYear()} Khanabi. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Developed By AkashProg
          </p>
        </div>
      </div>
    </footer>
  );
}
