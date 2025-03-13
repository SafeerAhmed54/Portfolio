import React from 'react'

const project = () => {
  return (
    <div>{/* Space before About Me */}
    <div className="h-12 w-full"></div>

    {/* Project */}
    <div  className="h-screen w-full text-white flex flex-col items-start  mt-28">
      {/* Title Section */}
      <div id='project-id' className="text-start space-y-3 pt-20 pr-20 pl-20">
        <h1 className="font-bold text-3xl text-cyan-500">PROJECTS</h1>
        <h2 className="font-bold text-6xl">
          Selected works
          <br/>
          <span className="text-white">2022-2025</span>
        </h2>
      </div>
      {/* Grid Section */}
      <div className="grid grid-cols-3 gap-6 mt-16 mx-auto w-full">
        <div className="h-[635px] border border-gray-500 bg-cyan-100 flex justify-center items-center">
          <h1 className="text-black font-bold">Alpha Impact</h1>
        </div>
        <div className="h-[635px] border border-gray-500 bg-cyan-100 flex justify-center items-center">
          <h1 className="text-black font-bold">Alpha Impact</h1>
        </div>
        <div className="h-[635px] border border-gray-500 bg-cyan-100 flex justify-center items-center">
          <h1 className="text-black font-bold">Alpha Impact</h1>
        </div>
      </div>
    </div>
    {/* Cyan Diagonal Banner */}
    <div className="">
      <div className="absolute w-full text-black h-24 text-7xl font-bold bg-cyan-500 py-2 transform whitespace-nowrap justify-center items-center shadow-2xl shadow-black">
        &nbsp; GAME DEVELOPMENT • UI/UX DESIGN • WEB DEVELOPMENT • FRONTEND •
        BACKEND &nbsp;
      </div>
    </div></div>
  )
}

export default project