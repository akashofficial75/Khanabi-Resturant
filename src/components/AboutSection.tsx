import { motion } from "motion/react";
import { Utensils, Clock, MapPin, Users } from "lucide-react";

export function AboutSection() {
  const features = [
    { icon: Utensils, title: "Premium Quality", desc: "Always fresh, hygienic, and perfectly cooked." },
    { icon: Clock, title: "Fast Service", desc: "Hot food served in minutes, not hours." },
    { icon: MapPin, title: "Prime Location", desc: "Heart of Kalampur Bazar Rd." },
    { icon: Users, title: "Trendy Hangout", desc: "The go-to spot for Gen-Z & friends." },
  ];

  return (
    <section id="about" className="py-24 relative bg-khanabi-dark overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-khanabi-orange/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
                alt="Khanabi Environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-khanabi-dark to-transparent opacity-60" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-10 -right-10 bg-khanabi-surface p-8 rounded-3xl border border-white/10 hidden md:block max-w-sm glass-panel"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-khanabi-orange/20 flex items-center justify-center text-khanabi-orange text-2xl font-bold">
                  5+
                </div>
                <div>
                  <p className="font-bold text-xl">Years of</p>
                  <p className="text-white/60">Local Trust</p>
                </div>
              </div>
              <p className="text-sm text-white/50">
                Serving thousands of happy customers in Kalampur with the best taste in town.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-khanabi-orange font-medium tracking-wider uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              More than just food. <br />
              It's an <span className="text-gradient">experience.</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Khanabi (খানাবী) started with a simple mission: bringing premium, international-quality fast food to Kalampur. We blend authentic Bangladeshi street food flavors with modern culinary techniques, creating a menu that is visually stunning and irresistibly delicious.
            </p>
            <p className="text-lg text-white/60 mb-12 leading-relaxed">
              Whether you're grabbing a quick bite, celebrating a milestone, or just hanging out with friends, Khanabi offers the perfect cinematic and trendy vibe for every moment.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-khanabi-orange">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-white/50">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
