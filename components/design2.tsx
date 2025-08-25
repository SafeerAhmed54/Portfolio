import React from 'react';

const Design2 = () => {
  return (
    <div>
      {/* Space before Cyan Diagonal Banner */}
      <div className="h-6 w-full"></div>

      {/* Cyan Diagonal Marquee Banner */}
      <div className="relative mt-32 overflow-hidden h-24 bg-cyan-500 shadow-2xl shadow-black">
        <div className="whitespace-nowrap text-7xl font-bold text-black animate-marquee">
          &nbsp; GAME DEVELOPMENT • UI/UX DESIGN • WEB DEVELOPMENT • FRONTEND • BACKEND &nbsp;
        </div>
      </div>
    </div>
  );
};

export default Design2;
