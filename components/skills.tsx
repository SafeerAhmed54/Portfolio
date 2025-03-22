import React from 'react';
import Image from 'next/image'; // If using Next.js, otherwise use normal <img> tag
import skillsImage from '../public/image.png'; // Adjust the path accordingly

const Skills = () => {
  return (
    <div>
      {/* Skills Section */}
      <div className="h-screen w-full text-white flex flex-col items-start mt-28">
        {/* Title Section */}
        <div className="text-start space-y-3 pt-20 pr-20 pl-20">
          <h1 className="font-bold text-3xl text-cyan-500">SKILLS</h1>
          <h2 className="font-bold text-6xl">Technology & Tools</h2>
        </div>
        {/* Grid Section */}
        <div className="grid grid-cols-2 gap-6 mt-16 mx-auto w-full">
        <div className='text-center'>
            <h1 className='text-4xl font-bold font-sans'>WEB DEVELOPMENT</h1>
            <div className="h-[635px] flex justify-center items-center flex-wrap space-x-5">
                <p className="bg-cyan-700 p-5 text-center rounded-3xl font-bold transition-transform duration-300 transform hover:scale-110"><img src="python.png" alt="unity" width={100} height={100} /> Python</p>
                <p className="bg-cyan-700 p-5 text-center rounded-3xl font-bold transition-transform duration-300 transform hover:scale-110"><img src="typescript.png" alt="typescript" width={100} height={100} /> TypeScript</p>
                <p className="bg-cyan-700 p-5 text-center rounded-3xl font-bold transition-transform duration-300 transform hover:scale-110"><img src="js.png" alt="javascript" width={100} height={100} />JavaScript</p>
                <p className="bg-cyan-700 p-5 text-center rounded-3xl font-bold transition-transform duration-300 transform hover:scale-110"><img src="physics.png" alt="react" width={100} height={100} />React</p>
                <p className="bg-cyan-700 p-5 text-center rounded-3xl font-bold transition-transform duration-300 transform hover:scale-110"><img src="docker.png" alt="docker" width={100} height={100} />Docker</p>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold font-sans'>GAME DEVELOPMENT</h1>
            <div className="h-[635px] flex justify-center items-center flex-wrap-reverse space-x-5">
                <p className="bg-cyan-700 p-5 text-center rounded-3xl font-bold transition-transform duration-300 transform hover:scale-110"><img src="unity.png" alt="unity" width={100} height={100} /> Unity</p>
                <p className="bg-cyan-700 p-5 text-center rounded-3xl font-bold transition-transform duration-300 transform hover:scale-110"><img src="c-sharp.png" alt="C#" width={100} height={100} />C#</p>
                <p className="bg-cyan-700 p-5 text-center rounded-3xl font-bold transition-transform duration-300 transform hover:scale-110"><img src="android.png" alt="android" width={100} height={100} />Android</p>
                <p className="bg-cyan-700 p-5 text-center rounded-3xl font-bold transition-transform duration-300 transform hover:scale-110"><img src="apple.png" alt="IOS" width={100} height={100} />IOS</p>
            </div>
          </div>
        </div>
      </div>
      {/* Cyan Diagonal Banner */}
      <div className="absolute w-full text-black h-24 text-7xl font-bold bg-cyan-500 py-2 transform whitespace-nowrap justify-center items-center shadow-2xl shadow-black">
        &nbsp; GAME DEVELOPMENT • UI/UX DESIGN • WEB DEVELOPMENT • FRONTEND • BACKEND &nbsp;
      </div>
    </div>
  );
};

export default Skills;
