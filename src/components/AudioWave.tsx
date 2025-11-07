import { motion } from 'framer-motion';

interface AudioWaveProps {
  bars?: number;
  className?: string;
}

export default function AudioWave({ bars = 40, className = '' }: AudioWaveProps) {
  return (
    <div className={`flex items-center justify-center gap-[3px] h-full ${className}`}>
      {Array.from({ length: bars }).map((_, i) => {
        const delay = i * 0.05;
        const duration = 0.6 + Math.random() * 0.4;

        return (
          <motion.div
            key={i}
            className="flex-1 bg-white rounded-sm min-w-[3px]"
            animate={{
              scaleY: [0.2, 1, 0.2],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: 'center',
            }}
          />
        );
      })}
    </div>
  );
}
