import React from "react";

const experience = () => {
  return (
    <div>
      {/* Education */}
      <div className="flex justify-center p-20 mt-28 h-screen w-full">
        <div className="w-full pt-16 space-y-3">
          <h1
            id="education-id"
            className="font-bold font-sans text-3xl text-cyan-500"
          >
            EXPERIENCE
          </h1>
          <h2 className="font-bold font-sans text-6xl">
            Companies I have worked for
          </h2>
          <div className="grid grid-col-3 gap-4 space-y-4 mt-10 justify-center items-center">
          <div className="flex border border-white rounded-2xl w-full p-10 h-auto transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl shadow-cyan-500">
              <div className="w-1/2 space-y-4">
                <h1 className="text-2xl font-bold">
                  Unity Developer
                </h1>
                <h2 className="text-xl">Skyhisoft, Rawalpindi</h2>
                <p className="text-lg">
                  Status: Feb 2023{" "}
                  <span className="text-cyan-500">--------</span> Current
                </p>
                <p className="text-lg font-semibold">Responsibilities:</p>
                <ul className="list-disc pl-5 text-lg">
                  <li> Contributed in developing 3+ international games,  user engagement and immersive experiences.</li>
                  <li>Utilizing Unity and C#, leading to a 30% improvement in gameplay responsiveness.
                  </li>
                  <li> GitHub &, Unity's Version Control manage 200+ project commits for project management workflows.</li>
                </ul>
              </div>
              <div className="w-1/2 flex justify-end items-center">
                <a
                  href="/path/to/your/file.pdf"
                  download
                  className="text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <img
                    src="/Higher.png"
                    alt="Download"
                    width={120}
                    height={100}
                  />
                </a>
              </div>
            </div>
            <div className="flex border border-white rounded-2xl w-full p-10 h-auto transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl shadow-cyan-500">
              <div className="w-1/2 space-y-4">
                <h1 className="text-2xl font-bold">
                  Freelancer (Game Developer)
                </h1>
                <h2 className="text-xl">Fiverr</h2>
                <p className="text-lg">
                  Status: May 2020{" "}
                  <span className="text-cyan-500">--------</span> Current
                </p>
                <p className="text-lg font-semibold">Responsibilities:</p>
                <ul className="list-disc pl-5 text-lg">
                  <li>Developed and delivered game projects on Fiverr.</li>
                  <li>
                    Worked on GTAV & Fivem Servers with 100+ players various clients.
                  </li>
                  <li>Implemented game mechanics and UI/UX elements.</li>
                </ul>
              </div>
              <div className="w-1/2 flex justify-end items-center">
                <a
                  href="/path/to/your/file.pdf"
                  download
                  className="text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <img
                    src="/Higher.png"
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
    </div>
  );
};

export default experience;
