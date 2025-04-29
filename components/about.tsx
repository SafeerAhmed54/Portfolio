import React from "react";

const about = () => {
  return (
    <div>
      {/* About Me */}
      <div className="flex flex-col md:flex-row justify-center p-6 md:p-20 space-y-10 md:space-y-0 md:space-x-20 mt-10 md:mt-28 h-auto md:h-screen w-full">
        <div className="w-full md:w-1/2 pt-8 md:pt-16 space-y-3">
          <h1 className="font-bold font-sans text-2xl md:text-3xl text-cyan-500">
            ABOUT ME
          </h1>
          <h2 className="font-bold font-sans text-4xl md:text-6xl">
            Turning ideas into reality,<br></br> beyond expectations.
          </h2>
          <div className="mt-6 md:mt-8">
            <button className="ml-auto border-1 border-white text-lg md:text-2xl p-2 hover:text-cyan-500 text-white font-bold transition-transform duration-300 transform hover:scale-110">
              Hire Me Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-96">
          {/* Decorative Squares */}

          {/* <Image
                src="/Safeer.png"
                alt="Profile Picture"
                width={700}
                height={700}
                className="object-contain max-w-full"
              /> */}
          <p className="font-sans font-semibold text-sm md:text-base">
            Hi, I&apos;m Safeer Ahmed Rana. I have a deep understanding of software
            development and user experience, combining technical expertise with
            creative problem-solving. I am passionate about crafting engaging
            and immersive digital experiences, whether through game development,
            web applications, or intuitive UI/UX design. I take pride in
            building efficient, high-quality solutions that are both visually
            appealing and functionally optimized. My goal is to deliver projects
            that not only meet expectations but exceed them, ensuring seamless
            performance and innovation at every step.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">
            <div>
              <p className="text-5xl md:text-7xl text-white font-bold">
                10<span className="text-cyan-500">+</span>
              </p>
              <p className="text-gray-400 text-sm md:text-lg">Project Complete</p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl text-white font-bold">
                3<span className="text-cyan-500">+</span>
              </p>
              <p className="text-gray-400 text-sm md:text-lg">World Clients</p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl text-white font-bold">
                2<span className="text-cyan-500">+</span>
              </p>
              <p className="text-gray-400 text-sm md:text-lg font-Satoshi">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
