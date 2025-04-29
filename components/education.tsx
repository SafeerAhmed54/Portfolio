import React from "react";

const education = () => {
  return (
    <div>

      {/* Education */}
      <div className="flex justify-center p-20 mt-28 h-screen w-full">
        <div className="w-full pt-16 space-y-3">
          <h1
            id="education-id"
            className="font-bold font-sans text-3xl text-cyan-500"
          >
            EDUCATION
          </h1>
          <h2 className="font-bold font-sans text-6xl">
            Turning ideas into reality, beyond expectations.
          </h2>
          <div className="grid grid-col-3 space-y-4 mt-10 justify-center items-center">
            <div className="flex border-1 border-white rounded-2xl w-5xl p-10 h-60 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl shadow-cyan-500">
              <div className="w-1/2 space-y-6 ">
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
                  <img
                    src="/Bachelors.png"
                    alt="Download"
                    width={400}
                    height={400}
                  />
                </a>
              </div>
            </div>
            <div className="flex border-1 border-white rounded-2xl w-5xl p-10 h-60 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl shadow-cyan-500">
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
                  <img
                    src="/Higher.png"
                    alt="Download"
                    width={120}
                    height={100}
                  />
                </a>
              </div>
            </div>
            <div className="flex border-1 border-white rounded-2xl w-5xl p-10 h-60 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl shadow-cyan-500">
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
                  <img
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
    </div>
  );
};

export default education;
