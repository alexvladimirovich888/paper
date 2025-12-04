import React from 'react';
import { QuadrantProps } from '../types';

export const QuadrantInfo: React.FC<QuadrantProps> = ({ title, text, borderColor }) => {
  const borderClass = borderColor === 'pink' ? 'border-panic-pink' : 'border-panic-orange';
  const textClass = borderColor === 'pink' ? 'text-panic-pink' : 'text-panic-orange';

  return (
    <div className={`h-full w-full p-8 border-t md:border-t-2 ${borderClass} bg-panic-dark/90 flex flex-col justify-center relative overflow-hidden group`}>
        {/* Background Glitch Elements */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-${borderColor === 'pink' ? 'panic-pink' : 'panic-orange'} opacity-20 group-hover:animate-pulse`}></div>
        
      <h2 className={`font-glitch text-3xl md:text-4xl mb-4 ${textClass} opacity-90 group-hover:scale-105 transition-transform duration-100`}>
        {title}
      </h2>
      <p className="font-clean font-light text-base md:text-lg leading-relaxed text-gray-300 max-w-md">
        {text}
      </p>
    </div>
  );
};