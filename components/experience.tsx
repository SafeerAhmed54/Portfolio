import React from "react";

const experience = () => {
  return (
    <div>
      {/* Education */}
      <div className="flex justify-center px-2 md:px-20 py-10 md:py-20 mt-10 md:mt-28 w-full">
        <div className="w-full pt-8 md:pt-16 space-y-3">
          <h1
            id="education-id"
            className="font-bold font-sans text-2xl md:text-3xl text-cyan-500"
          >
            EXPERIENCE
          </h1>
          <h2 className="font-bold font-sans text-2xl md:text-6xl">
            Companies I have worked for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-10 justify-center items-stretch">
            <div className="flex flex-col md:flex-row border border-white rounded-2xl w-full p-4 md:p-10 h-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl shadow-cyan-500 bg-opacity-80 bg-black">
              <div className="w-full md:w-1/2 space-y-4">
                <h1 className="text-lg md:text-2xl font-bold">
                  Unity Developer
                </h1>
                <h2 className="text-base md:text-xl">Skyhisoft, Rawalpindi</h2>
                <p className="text-base md:text-lg">
                  Status: Feb 2023{" "}
                  <span className="text-cyan-500">--------</span> Current
                </p>
                <p className="text-base md:text-lg font-semibold">Responsibilities:</p>
                <ul className="list-disc pl-5 text-base md:text-lg">
                  <li> Contributed in developing 3+ international games,  user engagement and immersive experiences.</li>
                  <li>Utilizing Unity and C#, leading to a 30% improvement in gameplay responsiveness.
                  </li>
                  <li> GitHub &amp;, Unity&apos;s Version Control manage 200+ project commits for project management workflows.</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                <a
                  href="/path/to/your/file.pdf"
                  download
                  className="text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <img
                    src="/Higher.png"
                    alt="Download"
                    className="w-24 h-24 md:w-32 md:h-24 object-contain"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row border border-white rounded-2xl w-full p-4 md:p-10 h-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl shadow-cyan-500 bg-opacity-80 bg-black">
              <div className="w-full md:w-1/2 space-y-4">
                <h1 className="text-lg md:text-2xl font-bold">
                  Freelancer (Game Developer)
                </h1>
                <h2 className="text-base md:text-xl">Fiverr</h2>
                <p className="text-base md:text-lg">
                  Status: May 2020{" "}
                  <span className="text-cyan-500">--------</span> Current
                </p>
                <p className="text-base md:text-lg font-semibold">Responsibilities:</p>
                <ul className="list-disc pl-5 text-base md:text-lg">
                  <li>Developed and delivered game projects on Fiverr.</li>
                  <li>
                    Worked on GTAV &amp; Fivem Servers with 100+ players various clients.
                  </li>
                  <li>Implemented game mechanics and UI/UX elements.</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                <a
                  href="/path/to/your/file.pdf"
                  download
                  className="text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <img
                    src="/Higher.png"
                    alt="Download"
                    className="w-24 h-24 md:w-32 md:h-24 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default experience;
