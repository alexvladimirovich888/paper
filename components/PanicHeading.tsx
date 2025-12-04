import React from 'react';
import { motion } from 'framer-motion';

export const PanicHeading: React.FC = () => {
  return (
    <div className="w-full text-center pt-20 pb-4 px-4 z-10 relative">
      <motion.h1 
        className="font-glitch text-3xl md:text-5xl lg:text-6xl text-white leading-tight uppercase select-none"
        animate={{
          x: [-2, 2, -1, 1, 0],
          skewX: [0, 5, -5, 0],
          color: ["#ffffff", "#ff4500", "#ffffff"]
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      >
        DON'T SELL. NO, WAIT, <span className="text-panic-pink">SELL NOW!</span> NO, HOLD! <br className="hidden md:block" /> AH, JUST DO IT!
      </motion.h1>
    </div>
  );
};