import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SurfacesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="surfaces"
      ref={ref}
      className="min-h-screen flex items-center py-20 px-6"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-600 via-gray-800 to-black rounded-lg" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 space-y-8"
          >
            <h2 className="text-6xl md:text-7xl font-serif font-light">
              SURFACES
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Each surface tells a story of craftsmanship and dedication.
              From polished finishes to textured patterns, our surfaces
              showcase the versatility and beauty of cast materials.
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-white/20 pl-4">
                <h3 className="text-lg font-serif mb-2">Texture & Finish</h3>
                <p className="text-sm text-gray-400">
                  Multiple finishing techniques for unique aesthetics
                </p>
              </div>
              <div className="border-l-2 border-white/20 pl-4">
                <h3 className="text-lg font-serif mb-2">Durability</h3>
                <p className="text-sm text-gray-400">
                  Built to last generations
                </p>
              </div>
              <div className="border-l-2 border-white/20 pl-4">
                <h3 className="text-lg font-serif mb-2">Customization</h3>
                <p className="text-sm text-gray-400">
                  Tailored to your vision
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
