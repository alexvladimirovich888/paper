import React from 'react';
import { HeaderProps } from '../types';

export const Header: React.FC<HeaderProps> = ({ logoUrl, iconsUrl }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-3 bg-panic-dark/80 backdrop-blur-sm border-b border-panic-pink/30">
      <div className="flex items-center gap-2">
        <img 
          src={logoUrl} 
          alt="$PAPER Logo" 
          className="w-10 h-10 object-contain animate-pulse" 
        />
        <span className="font-glitch text-2xl text-panic-orange tracking-widest">$PAPER</span>
      </div>
      
      <div className="flex items-center">
        {/* Using the provided image as a container for the links visually */}
        <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img 
            src={iconsUrl} 
            alt="Socials" 
            className="h-8 object-contain animate-shake-constant" 
            style={{ animationDuration: '3s' }}
            />
        </a>
      </div>
    </header>
  );
};