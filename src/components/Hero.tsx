import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 min-h-screen flex items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-6 w-full items-start">
          {/* First Column (50%) - Text beside image + "GRAYDON BUTLER" heading below */}
          <div className="flex flex-col justify-between h-[650px] lg:h-[750px]">
            {/* Text beside Image */}
            <div className="flex gap-4 items-end flex-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xs md:text-sm text-gray-400 font-light flex-[2]"
              >
                Our family's dedication to this noble material reflects a deep respect for its history and potential.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex-1 h-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 overflow-hidden"
              >
                <img
                  src="/images/aura1.jpg"
                  alt="Aura"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Large heading below - takes up 50% of height */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 flex flex-col justify-end"
            >
              <h1 className="text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-serif font-light leading-[0.85] tracking-tight">
                GRAYDON
              </h1>
              <div className="flex items-center gap-4 lg:gap-6 mt-2">
                <div className="w-20 lg:w-28 h-px bg-white/40" />
                <h1 className="text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-serif font-light leading-[0.85] tracking-tight">
                  BUTLER
                </h1>
              </div>
            </motion.div>
          </div>

          {/* Second Column - Full height image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[650px] lg:h-[750px] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 overflow-hidden"
          >
            <img
              src="/images/guys.webp"
              alt="Graydon Butler"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Third Column - Stacked images + bottom text */}
          <div className="flex flex-col gap-6 h-[650px] lg:h-[750px] justify-between">
            <div className="flex flex-col gap-6 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex-[1.2] bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 overflow-hidden"
              >
                <img
                  src="/images/frog.webp"
                  alt="Frog"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex-1 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden"
              >
                <img
                  src="/images/cosmic.webp"
                  alt="Cosmic"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xs md:text-sm text-gray-300 font-light max-w-xs"
            >
              For four generations, we've been crafting the legacy of metal transforming it from a raw material into timeless art.
            </motion.p>
          </div>
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
