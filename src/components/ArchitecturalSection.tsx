import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ArchitecturalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    { name: 'Residential', count: '150+' },
    { name: 'Commercial', count: '75+' },
    { name: 'Public Spaces', count: '40+' },
  ];

  return (
    <section
      id="architectural"
      ref={ref}
      className="min-h-screen flex items-center py-20 px-6 bg-brand-gray"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <h2 className="text-6xl md:text-7xl font-serif font-light">
            ARCHITECTURAL
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Transforming spaces through the artistry of cast materials.
            Our architectural elements bring sophistication and permanence
            to residential, commercial, and public environments.
          </p>

          <div className="grid md:grid-cols-3 gap-12 pt-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="space-y-4"
              >
                <div className="text-5xl font-serif text-gray-400">
                  {project.count}
                </div>
                <div className="text-sm tracking-wider text-gray-300 uppercase">
                  {project.name}
                </div>
                <div className="w-16 h-px bg-white/20 mx-auto" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12"
          >
            <div className="aspect-[21/9] bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
