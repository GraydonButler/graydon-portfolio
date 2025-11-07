import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CollectionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const items = [
    { title: 'Sculptural Pieces', description: 'Handcrafted metal sculptures' },
    { title: 'Functional Art', description: 'Design meets utility' },
    { title: 'Limited Editions', description: 'Exclusive collections' },
    { title: 'Custom Works', description: 'Bespoke creations' },
  ];

  return (
    <section
      id="collection"
      ref={ref}
      className="min-h-screen flex items-center py-20 px-6 bg-brand-gray"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-serif font-light mb-4">
            COLLECTION
          </h2>
          <p className="text-gray-400 text-sm">
            Curated works spanning four generations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
