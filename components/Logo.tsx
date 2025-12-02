import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative w-48 h-32 flex items-center justify-center">
        {/* SVG Recreation of the VS Logo */}
        <svg 
          viewBox="0 0 200 150" 
          className="w-full h-full drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* V Shape - Sharp, Geometric */}
          <path 
            d="M50 20 L90 120 L130 20" 
            stroke="url(#gradV)" 
            strokeWidth="3" 
            strokeLinecap="round"
            className="drop-shadow-lg"
          />
          <path 
            d="M65 20 L90 85 L115 20" 
            stroke="url(#gradV)" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            className="opacity-70"
          />

          {/* S Shape - Cursive, Intertwined */}
          <path 
            d="M140 30 C110 30, 110 60, 140 75 C 170 90, 160 130, 110 130" 
            stroke="#a855f7" 
            strokeWidth="4" 
            strokeLinecap="round"
            className="drop-shadow-[0_0_5px_#a855f7]"
          />
           {/* S Tail */}
           <path 
            d="M110 130 C 80 130, 40 125, 20 135" 
            stroke="#a855f7" 
            strokeWidth="3" 
            strokeLinecap="round" 
             className="drop-shadow-[0_0_5px_#a855f7]"
          />

          <defs>
            <linearGradient id="gradV" x1="50" y1="20" x2="130" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Text below logo */}
      <div className="flex items-center gap-2 -mt-4">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-500"></div>
        <span className="text-sm tracking-[0.4em] text-purple-200 font-display uppercase">
          Car Detail
        </span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-500"></div>
      </div>
    </div>
  );
};
