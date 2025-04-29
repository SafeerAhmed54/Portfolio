import React from "react";

const home = () => {
  return (
    <div>
      {" "}
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
          <img
            src="/Safeer.png"
            alt="Profile Picture"
            width={800}
            height={800}
            className="object-contain max-w-full"
          />
        </div>
      </div>
      <div className="border-1 border-cyan-500"></div>
    </div>
  );
};

export default home;
