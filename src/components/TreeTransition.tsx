import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function TreeTransition() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform values for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="absolute top-0 left-0 right-0 pointer-events-none z-0" style={{ height: '200vh' }}>
      <motion.div
        style={{ y, opacity }}
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        <img
          src="/images/roots-inverted.svg"
          alt="Tree branches"
          className="w-[90%] object-cover brightness-0 invert"
          style={{ height: '120vh', objectPosition: 'center bottom' }}
        />
      </motion.div>

      {/* Gradient overlays for smooth blending */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 w-full h-48 bg-gradient-to-b from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
    </div>
  );
}
