import React from 'react';

const Home = () => {
  return (
    <>
      {/* hero */}
      <header
        className="w-screen min-h-screen bg-black
                   flex flex-col-reverse md:flex-row
                   items-center justify-center
                   px-4 sm:px-10 lg:px-20 pt-24 md:pt-0"
      >
        {/* ──────────── left / text block ──────────── */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-5">
          <h1 className="font-goldman font-bold text-white
                         text-3xl sm:text-4xl md:text-5xl">
            Hi, I&#39;m
          </h1>

          <h2 className="font-sans font-bold text-white leading-tight
                         text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
            Safeer&nbsp;Ahmad&nbsp;Rana
          </h2>

          <p className="font-sans text-white
                        text-base sm:text-lg md:text-xl">
            I&#39;m a Software Engineer. I welcome you to my personal
            portfolio
          </p>

          <a
            href="/Safeer_Ahmad_Rana_Resume.pdf"
            download
            className="inline-block w-max bg-cyan-500 text-white font-bold
                       px-6 py-3 rounded hover:bg-blue-700
                       transition-colors duration-300"
          >
            Download&nbsp;Resume
          </a>
        </div>

        {/* ──────────── right / image block ──────────── */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          {/* keep plain <img>; swap to <Image /> if you have next/image set up */}
          <img
            src="/Safeer.png"
            alt="Safeer Ahmad Rana portrait"
            width={700}
            height={700}
            className="object-contain max-w-full"
          />
        </div>
      </header>

      {/* divider line */}
      <div className="w-screen border-t border-cyan-500" />
    </>
  );
};

export default Home;
