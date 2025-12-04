import React from 'react';
import { Header } from './components/Header';
import { PanicHeading } from './components/PanicHeading';
import { VisualZone } from './components/VisualZone';
import { QuadrantInfo } from './components/QuadrantInfo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-panic-dark text-white flex flex-col overflow-hidden relative selection:bg-panic-pink selection:text-white">
      {/* Ambient Noise Background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}>
      </div>

      <Header 
        logoUrl="https://i.postimg.cc/q719tznB/ADS-2025-12-04T182514-862.png"
        iconsUrl="https://i.postimg.cc/j56WKrBk/ADS-2025-12-03T201034-818.png"
      />

      {/* Grid Layout Container */}
      <main className="flex-1 flex flex-col z-10 pt-10 h-full">
        
        {/* Top Half: Header & Visual */}
        <div className="flex-1 flex flex-col justify-start items-center relative min-h-[50vh] md:min-h-[60vh]">
          <PanicHeading />
          <VisualZone />
        </div>

        {/* Bottom Half: Quadrants */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:min-h-[35vh]">
          <div className="border-r-0 md:border-r border-panic-pink/20">
            <QuadrantInfo 
              title="THE REGRET" 
              text="This coin is for the weak, the panicked, the ones who panic-sell for a 2% loss and then watch it 10x from the sidelines. $PAPER is the tribute to the fallen profits. We sell fast. We regret faster."
              borderColor="pink"
            />
          </div>
          
          <div>
            <QuadrantInfo 
              title="THE CYCLE" 
              text="The $PAPER manifesto is simple: If you bought it, you’ll sell it. If you sold it, you missed it. It's the cycle of the 'Paper Hand'. Tax is low (0%), the risk is high (100%), and your regret is guaranteed (infinite). Join the regret."
              borderColor="orange"
            />
          </div>
        </div>
      </main>
      
      {/* Decorative chaotic lines */}
      <div className="fixed top-1/2 left-0 w-full h-px bg-white/5 pointer-events-none"></div>
      <div className="fixed left-1/2 top-0 h-full w-px bg-white/5 pointer-events-none hidden md:block"></div>
    </div>
  );
};

export default App;