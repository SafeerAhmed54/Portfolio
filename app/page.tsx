import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black p">
      <header className="flex space-x-20 items-center p-4 h-[50px] font-sans font-bold text-white bg-gray-400 bg-opacity-12 rounded-2xl">
        <Image className="transition-transform duration-300 transform hover:scale-110" src="/logo.png" alt="logo" width={100} height={100} />
        <a className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500" href="/">Home</a>
        <a className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500" href="/">Education</a>
        <a className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500" href="/">Project</a>
        <a className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500" href="/">Contact</a>
        <div className="flex items-end ml-auto border-2 border-white rounded-b-lg p-2 hover:text-cyan-500 text-white font-sans font-bold transition-transform duration-300 transform hover:scale-110">
          <button>Download Resume</button>
        </div>
      </header>

      <div className="flex mb-8 relative">
        <div className="w-1/2 flex justify-center place-items-start flex-col p-20 space-y-5">
          <h1 className="text-5xl font-bold text-white font-sans">Hi, I'm</h1>
          <h1 className="text-7xl font-bold text-white font-sans">Safeer Ahmad Rana</h1>
          <p className="text-4xl text-white font-bold font-sans">Software Engineer</p>
          <a href="/Safeer_Ahmad_Rana_Resume.pdf" download className="mt-4 inline-block bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Download Resume
          </a>
        </div>
        <div className="w-1/2 flex justify-end place-items-end">
          <Image src="/Safeer.png" alt="Profile Picture" width={700} height={700} className=""/>
        </div>

        {/* Green Diagonal Banner */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="relative">
            {/* Main banner */}
            <div className="absolute w-full text-black h-24 text-7xl font-bold bg-cyan-500 py-2 transform -rotate-4 whitespace-nowrap justify-center items-center">
              &nbsp; GAME DEVELOPMENT • UI/UX DESIGN • WEB DEVELOPMENT • FRONTEND • BACKEND &nbsp;
            </div>
            {/* Reflection Effect */}
            <div className="absolute w-full text-black h-24 text-7xl font-bold bg-cyan-500 py-2 transform rotate-4 opacity-30 top-3 whitespace-nowrap justify-center items-center">
              &nbsp; GAME DEVELOPMENT • UI/UX DESIGN • WEB DEVELOPMENT • FRONTEND • BACKEND &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
