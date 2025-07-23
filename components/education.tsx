import React from "react";

const Education = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-transparent">
      {/* Education */}
      <div className="flex justify-center px-2 sm:px-4 md:px-20 py-8 sm:py-10 md:py-20 mt-10 md:mt-28 w-full">
        <div className="w-full pt-8 md:pt-16 space-y-3">
          <h1
            id="education-id"
            className="font-bold font-sans text-xl sm:text-2xl md:text-3xl text-cyan-500 text-center md:text-left"
          >
            EDUCATION
          </h1>
          <h2 className="font-bold font-sans text-xl sm:text-2xl md:text-6xl text-center md:text-left">
            Turning ideas into reality, beyond expectations.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-10 justify-center items-stretch">
            {/* Bachelors */}
            <div className="flex flex-col border border-white rounded-2xl p-4 sm:p-6 md:p-10 h-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl shadow-cyan-500 bg-opacity-80 bg-black">
              <div className="flex-1 space-y-3 md:space-y-6">
                <h1 className="text-base sm:text-lg md:text-2xl text-left font-bold">
                  Bachelors Science in Computer Science
                </h1>
                <h2 className="text-xs sm:text-base md:text-2xl text-left">
                  COMSATS University Islamabad, Wah
                </h2>
                <p className="text-xs sm:text-base md:text-2xl text-justify">
                  Status: Feb, 2019 <span className="text-cyan-500">--------</span> March, 2023
                </p>
              </div>
              <div className="flex justify-center items-center mt-4 md:mt-0">
                <a
                  href="/path/to/your/file.pdf"
                  download
                  className="text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <img
                    src="/Bachelors.png"
                    alt="Download"
                    className="w-16 h-16 sm:w-24 sm:h-24 md:w-60 md:h-60 object-contain"
                  />
                </a>
              </div>
            </div>
            {/* Higher Secondary */}
            <div className="flex flex-col border border-white rounded-2xl p-4 sm:p-6 md:p-10 h-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl shadow-cyan-500 bg-opacity-80 bg-black">
              <div className="flex-1 space-y-3 h-1/2 md:space-y-6">
                <h1 className="text-base sm:text-lg md:text-2xl text-justify font-bold">
                  Higher Secondary School
                </h1>
                <h2 className="text-xs sm:text-base md:text-2xl text-left">
                  Sir Syed Science College for Boys
                </h2>
                <p className="text-xs sm:text-base md:text-2xl text-justify">
                  Status: Sep, 2016 <span className="text-cyan-500">--------</span> Aug, 2018
                </p>
              </div>
              <div className="flex justify-center items-center h-1/2 mt-4 md:mt-0">
                <a
                  href="/path/to/your/file.pdf"
                  download
                  className="text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <img
                    src="/Higher.png"
                    alt="Download"
                    className="w-14 h-14 sm:w-20 sm:h-20 md:w-32 md:h-24 object-contain"
                  />
                </a>
              </div>
            </div>
            {/* Secondary School */}
            <div className="flex flex-col border border-white rounded-2xl p-4 sm:p-6 md:p-10 h-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl shadow-cyan-500 bg-opacity-80 bg-black">
              <div className="flex-1 space-y-3 h-1/2 md:space-y-6">
                <h1 className="text-base sm:text-lg md:text-2xl text-justify font-bold">
                  Secondary School
                </h1>
                <h2 className="text-xs sm:text-base md:text-2xl text-left">
                  Fazia Inter College, Nur Khan
                </h2>
                <p className="text-xs sm:text-base md:text-2xl text-justify">
                  Status: April, 2014 <span className="text-cyan-500">--------</span> July, 2016
                </p>
              </div>
              <div className="flex justify-center items-center h-1/2 mt-4 md:mt-0">
                <a
                  href="/path/to/your/file.pdf"
                  download
                  className="text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <img
                    src="/Secondary.png"
                    alt="Download"
                    className="w-14 h-14 sm:w-20 sm:h-20 md:w-32 md:h-24 object-contain"
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

export default Education;
