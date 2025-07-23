import React from 'react'

const project = () => {
  return (
    <div>{/* Space before About Me */}
    <div className="h-6 sm:h-12 w-full"></div>

    {/* Project */}
    <div className="min-h-screen w-full text-white flex flex-col items-start mt-10 sm:mt-28">
      {/* Title Section */}
      <div className="text-start space-y-2 sm:space-y-3 pt-8 sm:pt-20 pr-4 sm:pr-20 pl-4 sm:pl-20 w-full">
        <h1 id='project-id' className="font-bold text-2xl sm:text-3xl md:text-5xl text-cyan-500">PROJECTS</h1>
        <h2 className="font-bold text-3xl sm:text-6xl">
          Selected works
          <br/>
          <span className="text-white text-xl sm:text-2xl md:text-4xl">2022-2025</span>
        </h2>
      </div>
      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-16 mx-auto w-full px-2 sm:px-0">
        <div className="h-40 sm:h-[400px] md:h-[635px] border border-gray-500 bg-cyan-100 flex justify-center items-center">
          <h1 className="text-black font-bold text-lg sm:text-2xl md:text-3xl">Alpha Impact</h1>
        </div>
        <div className="h-40 sm:h-[400px] md:h-[635px] border border-gray-500 bg-cyan-100 flex justify-center items-center">
          <h1 className="text-black font-bold text-lg sm:text-2xl md:text-3xl">Alpha Impact</h1>
        </div>
        <div className="h-40 sm:h-[400px] md:h-[635px] border border-gray-500 bg-cyan-100 flex justify-center items-center">
          <h1 className="text-black font-bold text-lg sm:text-2xl md:text-3xl">Alpha Impact</h1>
        </div>
      </div>
    </div>
    {/* Cyan Diagonal Banner */}
    <div className="">
      <div className="absolute w-full text-black h-16 sm:h-24 text-3xl sm:text-7xl font-bold bg-cyan-500 py-2 transform whitespace-nowrap justify-center items-center shadow-2xl shadow-black">
        &nbsp; GAME DEVELOPMENT 2 UI/UX DESIGN 2 WEB DEVELOPMENT 2 FRONTEND 2
        BACKEND &nbsp;
      </div>
    </div></div>
  )
}

export default project