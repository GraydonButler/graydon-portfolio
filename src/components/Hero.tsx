import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 min-h-screen flex items-center py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-serif font-light leading-[0.85] tracking-tight">
                GRAYDON
              </h1>
              <div className="flex items-center gap-4 lg:gap-6 mt-2">
                <div className="w-20 lg:w-28 h-px bg-white/40" />
                <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-serif font-light leading-[0.85] tracking-tight">
                  BUTLER
                </h1>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm md:text-base text-gray-300 font-light max-w-md"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>
          </div>

          {/* Right Column - Central Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[600px] lg:h-[700px] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 overflow-hidden"
          >
            <img
              src="/images/frog.webp"
              alt="Audio Engineering"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
