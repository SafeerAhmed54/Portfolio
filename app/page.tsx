import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black p-2">
      <header className="flex space-x-20 items-center p-4 bg-amber-200 h-[50px] font-sans font-bold">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <a href="/">Home</a>
        <a href="/">Education</a>
        <a href="/">Project</a>
        <a href="/">Contact</a>
        <div className="flex items-end ml-auto border-2 border-black p-2 hover:bg-amber-300 text-blue-700 font-sans font-bold">
          <button className="">Download Resume</button>
        </div>
      </header>
      <div className="flex mb-8">
          <div className="w-1/2 flex justify-center place-items-start flex-col p-20 space-y-5">
            <h1 className="text-5xl font-bold text-blue-500 font-sans">Hi, I'm</h1>
            <h1 className="text-7xl font-bold text-blue-500 font-sans">Safeer Ahmad Rana</h1>
            <p className="text-4xl text-gray-700 font-bold font-sans">Software Engineer</p>
            <a href="/Safeer_Ahmad_Rana_Resume.pdf" download className="mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Download Resume
            </a>
          </div>
          <div className="w-1/2 flex justify-end place-items-end">
            <Image src="/Safeer.png" alt="Profile Picture" width={800} height={800} className=""/>
          </div>
        </div>
    </div>
  );
}