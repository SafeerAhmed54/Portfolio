import React from 'react';

const Experience = () => {
  return (
    <section
      id="education-id"
      /* fills the viewport, still centred */
      className="w-screen min-h-screen bg-black flex flex-col items-center
                 px-4 sm:px-10 lg:px-20 pt-24"
    >
      {/* heading */}
      <h1 className="font-sans font-bold text-cyan-500 text-2xl sm:text-3xl md:text-4xl">
        EXPERIENCE
      </h1>
      <h2 className="mt-2 font-sans font-bold text-3xl sm:text-5xl md:text-6xl text-center">
        Companies I have worked for
      </h2>

      {/* cards wrapper — 1 col on phones, 2 on tablets, 3 on big desktops */}
      <div
        className="w-full grid gap-8 mt-10
                   grid-cols-1 md:grid-cols-2 xl:grid-cols-2"
      >
        {/* -----  CARD 1  ----- */}
        <article
          className="flex flex-col md:flex-row border border-white rounded-2xl
                     p-8 sm:p-10 hover:shadow-2xl shadow-cyan-500
                     transition-transform duration-300 hover:scale-105"
        >
          {/* left half */}
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">Unity Developer</h3>
            <p className="text-lg sm:text-xl">Skyhisoft, Rawalpindi</p>
            <p className="text-base sm:text-lg">
              Status: Feb&nbsp;2023 <span className="text-cyan-500">——</span>{' '}
              Current
            </p>
            <p className="font-semibold text-base sm:text-lg">Responsibilities:</p>
            <ul className="list-disc pl-5 text-base sm:text-lg space-y-1">
              <li>
                Contributed in developing 3+ international games, improving user
                engagement and immersion.
              </li>
              <li>
                Utilised Unity & C#, achieving a 30 % gain in gameplay
                responsiveness.
              </li>
              <li>
                Managed 200 + commits via GitHub &amp; Unity Version Control.
              </li>
            </ul>
          </div>

          {/* right half */}
          <div className="md:w-1/2 flex justify-center md:justify-end items-center mt-6 md:mt-0">
            <a
              href="/path/to/your/file.pdf"
              download
              className="inline-flex"
              aria-label="Download details as PDF"
            >
              <img src="/Higher.png" alt="" width={120} height={100} />
            </a>
          </div>
        </article>

        {/* -----  CARD 2  ----- */}
        <article
          className="flex flex-col md:flex-row border border-white rounded-2xl
                     p-8 sm:p-10 hover:shadow-2xl shadow-cyan-500
                     transition-transform duration-300 hover:scale-105"
        >
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">
              Freelancer&nbsp;(Game&nbsp;Developer)
            </h3>
            <p className="text-lg sm:text-xl">Fiverr</p>
            <p className="text-base sm:text-lg">
              Status: May 2020 <span className="text-cyan-500">——</span>{' '}
              Current
            </p>
            <p className="font-semibold text-base sm:text-lg">Responsibilities:</p>
            <ul className="list-disc pl-5 text-base sm:text-lg space-y-1">
              <li>Developed and delivered game projects on Fiverr.</li>
              <li>
                Worked on GTAV &amp; FiveM servers (100 + players) for various
                clients.
              </li>
              <li>Implemented core mechanics and UI/UX elements.</li>
            </ul>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end items-center mt-6 md:mt-0">
            <a
              href="/path/to/your/file.pdf"
              download
              className="inline-flex"
              aria-label="Download details as PDF"
            >
              <img src="/Higher.png" alt="" width={120} height={100} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
