import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { reviews } from "../data";

export function ReviewSection() {
  return (
    <section id="reviews" className="py-24 relative bg-khanabi-surface overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-khanabi-orange/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-khanabi-orange font-medium tracking-wider uppercase text-sm mb-4 block">Reviews</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Loved by <span className="text-gradient">Kalampur</span>
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-10 snap-x snap-mandatory pr-6">
          {reviews.map((review, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={review.id}
              className="min-w-[320px] md:min-w-[400px] w-[320px] md:w-[400px] bg-white/5 p-8 rounded-3xl snap-center glass-panel border border-white/5 hover:border-white/10 transition-colors relative group"
            >
              <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16 group-hover:text-khanabi-orange/10 transition-colors" />
              
              <div className="flex items-center gap-1 mb-6 text-khanabi-orange relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed relative z-10">"{review.text}"</p>
              
              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-white/40">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
