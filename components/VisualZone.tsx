import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const VisualZone: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(599); // 9:59 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 599; // Reset loops to cause anxiety
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `00:0${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative p-4 gap-6">
      {/* Main Image */}
      <motion.div 
        className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
        animate={{ 
          rotate: [-1, 1, -1],
          y: [0, -5, 0]
        }}
        transition={{ duration: 0.2, repeat: Infinity }}
      >
         <div className="absolute inset-0 bg-panic-pink rounded-full blur-3xl opacity-20 animate-pulse"></div>
         <img 
            src="https://i.postimg.cc/q719tznB/ADS-2025-12-04T182514-862.png" 
            alt="Paper Hand" 
            className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,69,0,0.5)]"
         />
      </motion.div>

      {/* Timer and CTA */}
      <div className="flex flex-col items-center gap-2 z-20">
        <div className="font-mono text-panic-orange text-lg md:text-xl tracking-widest bg-black/50 px-4 py-1 border border-panic-orange/30">
          TIME LEFT BEFORE YOU SELL: <span className="text-white font-bold">{formatTime(timeLeft)}</span>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            x: [-2, 2, -2, 2, 0],
            backgroundColor: ["#FF0099", "#FF4500", "#FF0099"]
          }}
          transition={{
            x: { duration: 0.1, repeat: Infinity },
            backgroundColor: { duration: 0.5, repeat: Infinity }
          }}
          className="mt-4 px-8 py-4 bg-panic-pink text-white font-glitch text-xl md:text-2xl border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all uppercase tracking-wider cursor-pointer"
          onClick={() => window.open('https://pump.fun', '_blank')}
        >
          PRESS TO PAPER HAND <br/> <span className="font-sans text-sm font-bold tracking-normal">(Buy $PAPER)</span>
        </motion.button>
      </div>
    </div>
  );
};