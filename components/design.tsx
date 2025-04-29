import React from 'react'

const design = () => {
  return (
    <div>
      <div className="h-8 w-full"></div>
      {/* Cyan Diagonal Banner */}
      <div className="relative mt-16 sm:mt-24 md:mt-32">
        <div className="absolute w-full text-black h-16 sm:h-20 md:h-24 lg:h-28 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-cyan-500 py-2 transform rotate-4 opacity-30 whitespace-nowrap flex justify-center items-center shadow-xl sm:shadow-2xl shadow-black">
          &nbsp; GAME DEVELOPMENT • UI/UX DESIGN • WEB DEVELOPMENT • FRONTEND • BACKEND &nbsp;
        </div>
        <div className="absolute w-full text-black h-16 sm:h-20 md:h-24 lg:h-28 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-cyan-500 py-2 transform -rotate-4 top-2 sm:top-3 md:top-4 whitespace-nowrap flex justify-center items-center">
          &nbsp; GAME DEVELOPMENT • UI/UX DESIGN • WEB DEVELOPMENT • FRONTEND • BACKEND &nbsp;
        </div>
      </div>
      <div className="h-8 w-full"></div>
    </div>
  )
}

export default design