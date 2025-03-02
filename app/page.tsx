import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black p-4">
      <header className="flex space-x-20 items-center p-4 h-[50px] font-sans font-bold text-white bg-opacity-12 rounded-2xl">
        <Image
          className="transition-transform duration-300 transform hover:scale-110"
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
        />
        <a
          className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500"
          href="/"
        >
          Home
        </a>
        <a
          className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500"
          href="/"
        >
          Education
        </a>
        <a
          className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500"
          href="/"
        >
          Project
        </a>
        <a
          className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500"
          href="/"
        >
          Contact
        </a>
        <button className="ml-auto border-2 border-white rounded-b-lg p-2 hover:text-cyan-500 text-white font-bold transition-transform duration-300 transform hover:scale-110">
          Download Resume
        </button>
      </header>

      <div className="flex mb-8 relative">
        <div className="w-1/2 flex justify-center place-items-start flex-col p-20 space-y-5">
          <h1 className="text-5xl font-bold text-white font-sans">Hi, I'm</h1>
          <h1 className="text-7xl font-bold text-white font-sans">
            Safeer Ahmad Rana
          </h1>
          <p className="text-xl text-white font-sans">
            I'm a Software Engineer. I welcome you to my personal portfolio
          </p>
          <a
            href="/Safeer_Ahmad_Rana_Resume.pdf"
            download
            className="mt-4 inline-block bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
        <div className="w-1/2 flex justify-end place-items-end">
          <Image
            src="/Safeer.png"
            alt="Profile Picture"
            width={700}
            height={700}
            className="object-contain max-w-full"
          />
        </div>
      </div>

      {/* Space before Cyan Diagonal Banner */}
      <div className="h-6 w-full"></div>

      {/* Cyan Diagonal Banner */}
      <div className="relative mt-32">
        <div className="absolute w-full text-black h-24 text-7xl font-bold bg-cyan-500 py-2 transform rotate-4 opacity-30 whitespace-nowrap justify-center items-center shadow-2xl shadow-black">
          &nbsp; GAME DEVELOPMENT • UI/UX DESIGN • WEB DEVELOPMENT • FRONTEND •
          BACKEND &nbsp;
        </div>
        <div className="absolute w-full text-black h-24 text-7xl font-bold bg-cyan-500 py-2 transform -rotate-4 top-3 whitespace-nowrap justify-center items-center">
          &nbsp; GAME DEVELOPMENT • UI/UX DESIGN • WEB DEVELOPMENT • FRONTEND •
          BACKEND &nbsp;
        </div>
      </div>

      {/* Space before About Me */}
      <div className="h-8 w-full"></div>

      {/* About Me */}
      <div className="flex justify-center p-20 space-x-20 mt-28 h-screen w-full">
        <div className="w-1/2 pt-16 space-y-3">
          <h1 className="font-bold font-sans text-3xl text-cyan-500">
            ABOUT ME
          </h1>
          <h2 className="font-bold font-sans text-6xl">
            Turning ideas into reality,<br></br> beyond expectations.
          </h2>
          <div className="mt-8">
            <button className="ml-auto border-1 border-white text-2xl p-2 hover:text-cyan-500 text-white font-bold transition-transform duration-300 transform hover:scale-110">
              Hire Me Now
            </button>
          </div>
        </div>
        <div className="w-1/2 mt-96">
          {/* Decorative Squares */}

          {/* <Image
            src="/Safeer.png"
            alt="Profile Picture"
            width={700}
            height={700}
            className="object-contain max-w-full"
          /> */}
          <p className="font-sans font-semibold">
            Hi, I'm Safeer Ahmed Rana. I have a deep understanding of software
            development and user experience, combining technical expertise with
            creative problem-solving. I am passionate about crafting engaging
            and immersive digital experiences, whether through game development,
            web applications, or intuitive UI/UX design. I take pride in
            building efficient, high-quality solutions that are both visually
            appealing and functionally optimized. My goal is to deliver projects
            that not only meet expectations but exceed them, ensuring seamless
            performance and innovation at every step.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div>
              <p className="text-7xl text-white font-bold">
                10<span className="text-cyan-500">+</span>
              </p>
              <p className="text-gray-400 text-lg">Project Complete</p>
            </div>
            <div>
              <p className="text-7xl text-white font-bold">
                3<span className="text-cyan-500">+</span>
              </p>
              <p className="text-gray-400 text-lg">World Clients</p>
            </div>
            <div>
              <p className="text-7xl text-white font-bold">
                2<span className="text-cyan-500">+</span>
              </p>
              <p className="text-gray-400 text-lg font-Satoshi">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Space before Cyan Diagonal Banner */}
      <div className="h-6 w-full"></div>
      {/* Cyan Diagonal Banner */}
      <div className="relative mt-32">
        <div className="absolute w-full text-black h-24 text-7xl font-bold bg-cyan-500 py-2 transform whitespace-nowrap justify-center items-center shadow-2xl shadow-black">
          &nbsp; GAME DEVELOPMENT • UI/UX DESIGN • WEB DEVELOPMENT • FRONTEND •
          BACKEND &nbsp;
        </div>
      </div>

      {/* Space before About Me */}
      <div className="h-8 w-full"></div>

      {/* Education */}
      <div className="flex justify-center p-20 mt-28 h-screen w-full">
        <div className="w-full pt-16 space-y-3">
          <h1 className="font-bold font-sans text-3xl text-cyan-500">
            EDUCATION
          </h1>
          <h2 className="font-bold font-sans text-6xl">
            Turning ideas into reality, beyond expectations.
          </h2>
          <div className="grid grid-col-3 gap-4 space-y-4 mt-10 justify-center items-center">
            <div className="flex border-1 border-white rounded-2xl w-5xl p-10 h-60">
              <div className="w-1/2 space-y-6">
                <h1 className="text-2xl text-left font-bold">
                  Bachelors Science in Computer Science
                </h1>
                <h2 className="text-2xl text-left">
                  COMSATS University Islamabad, Wah
                </h2>
                <p className="text-2xl text-justify">
                  Status: Feb, 2019{" "}
                  <span className="text-cyan-500">--------</span> March, 2023
                </p>
              </div>
              <div className="w-1/2 pl-60">
                <a
                  href="/path/to/your/file.pdf"
                  download
                  className="text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <Image
                    src="/Bachelors.png"
                    alt="Download"
                    width={400}
                    height={400}
                  />
                </a>
              </div>
            </div>
            <div className="flex border-1 border-white rounded-2xl w-5xl p-10 h-60">
              <div className="w-1/2 space-y-6">
                <h1 className="text-2xl text-justify font-bold">
                  Higher Secondary School
                </h1>
                <h2 className="text-2xl text-left">
                  Sir Syed Science College for Boys
                </h2>
                <p className="text-2xl text-justify">
                  Status: Sep, 2016{" "}
                  <span className="text-cyan-500">--------</span> Aug, 2018
                </p>
              </div>
              <div className="w-1/2 pl-72">
                <a
                  href="/path/to/your/file.pdf"
                  download
                  className="text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <Image
                    src="/Higher.png"
                    alt="Download"
                    width={120}
                    height={100}
                  />
                </a>
              </div>
            </div>
            <div className="flex border-1 border-white rounded-2xl w-5xl p-10 h-60">
              <div className="w-1/2 space-y-6">
                <h1 className="text-2xl text-justify font-bold">
                  Secondary School
                </h1>
                <h2 className="text-2xl text-left">
                  Fazia Inter College, Nur Khan
                </h2>
                <p className="text-2xl text-justify">
                  Status: April, 2014{" "}
                  <span className="text-cyan-500">--------</span> July, 2016
                </p>
              </div>
              <div className="w-1/2 pl-72">
                <a
                  href="/path/to/your/file.pdf"
                  download
                  className="text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <Image
                    src="/Secondary.png"
                    alt="Download"
                    width={120}
                    height={100}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Space before Cyan Diagonal Banner */}
      <div className="h-40 w-full"></div>

      {/* Cyan Diagonal Banner */}
      <div className="relative mt-32">
        <div className="absolute w-full text-black h-24 text-7xl font-bold bg-cyan-500 py-2 transform rotate-4 opacity-30 whitespace-nowrap justify-center items-center shadow-2xl shadow-black">
          &nbsp; GAME DEVELOPMENT • UI/UX DESIGN • WEB DEVELOPMENT • FRONTEND •
          BACKEND &nbsp;
        </div>
        <div className="absolute w-full text-black h-24 text-7xl font-bold bg-cyan-500 py-2 transform -rotate-4 top-3 whitespace-nowrap justify-center items-center">
          &nbsp; GAME DEVELOPMENT • UI/UX DESIGN • WEB DEVELOPMENT • FRONTEND •
          BACKEND &nbsp;
        </div>
      </div>
      {/* Space before About Me */}
      <div className="h-12 w-full"></div>

      {/* Project */}
      <div className="h-screen w-full text-white flex flex-col items-start  mt-28">
        {/* Title Section */}
        <div className="text-start space-y-3 pt-20 pr-20 pl-20">
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
      </div>

      {/* Space before About Me */}
      <div className="h-8 w-full"></div>

      {/* About Me */}
      <div className="flex justify-center p-20 space-x-20 mt-28 h-screen w-full flex-wrap">
        <div className="w-full pt-16 space-y-3">
          <h1 className="font-bold font-sans text-4xl text-cyan-500 text-center">
            COLLABORATION
          </h1>
          <h2 className="font-bold font-sans text-9xl text-center">
            Lets talk for<br></br> Collaboration
          </h2>
          <div className="flex justify-center items-center space-x-20 mt-10">
            <button className="border-1 bg-cyan-500 border-white text-2xl p-6 hover:text-white text-black font-bold transition-transform duration-300 transform hover:scale-110">
              Get In Touch
            </button>
            <button className="border-1 border-white text-2xl p-6 hover:text-cyan-500 text-white font-bold transition-transform duration-300 transform hover:scale-110">
              Hire Me Now
            </button>
          </div>
          <div className="border-1 border-white mt-28"></div>
          <footer className="flex justify-center">
            <div className="w-1/2 bg-amber-100">
              <p>Working in development and design has given me a <br />stronger sense of the extraordinary in my digital world</p>
            </div>
            <div className="w-1/2 bg-amber-600">
              <p>Working in development and design has given me a <br />stronger sense of the extraordinary in my digital world</p>
            </div>
          </footer>
        </div>
      </div>
      
    </div>
  );
}
