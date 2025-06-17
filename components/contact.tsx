/* Contact.tsx */
import React from 'react';

const Contact = () => {
  return (
    <>
      {/* main “hero” area */}
      <div
        id="contact-id"
        className="flex flex-col items-center justify-center
                   h-screen w-full bg-black
                   px-4 sm:px-10 lg:px-20"
      >
        {/* top spacing – kept but responsive */}
        <div className="h-6 sm:h-8" />

        {/* heading */}
        <h1 className="font-sans font-bold text-cyan-500 text-2xl sm:text-3xl md:text-4xl text-center">
          COLLABORATION
        </h1>

        {/* big call-out */}
        <h2
          className="font-sans font-bold text-center leading-tight
                     text-5xl sm:text-7xl md:text-8xl lg:text-9xl
                     mt-4"
        >
          Lets talk for
          <br className="hidden sm:block" />
          Collaboration
        </h2>

        {/* buttons – stack on phones, inline on ≥ sm */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center
                     gap-6 sm:gap-20 mt-10"
        >
          <button
            className="bg-cyan-500 text-black font-bold
                       text-lg sm:text-2xl px-6 py-4 rounded
                       hover:text-white transition-transform duration-300
                       hover:scale-110"
          >
            Get In Touch
          </button>

          <button
            className="border border-white text-white font-bold
                       text-lg sm:text-2xl px-6 py-4 rounded
                       hover:text-cyan-500 transition-transform duration-300
                       hover:scale-110"
          >
            Hire Me Now
          </button>
        </div>
      </div>

      {/* divider */}
      <div className="border-t border-white" />

      {/* footer */}
      <footer
        className="w-full bg-black text-gray-300
                   grid grid-cols-1 md:grid-cols-2
                   gap-8 px-4 sm:px-10 lg:px-20 py-10"
      >
        {/* left column */}
        <div>
          <p>
            Working in development and design has given me a
            <br className="hidden sm:inline" />
            stronger sense of the extraordinary in my digital world
          </p>
          <p className="text-white mt-8">
            © 2025 Safeer Ahmad Rana. All rights reserved.
          </p>
        </div>

        {/* right column */}
        <nav
          className="flex flex-col items-center md:items-end
                     gap-4 font-sans font-bold text-lg"
        >
          {[
            ['Instagram', 'https://www.instagram.com/'],
            ['GitHub', 'https://www.github.com/'],
            ['LinkedIn', 'https://www.linkedin.com/'],
            ['WhatsApp', 'https://www.whatsapp.com/'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="hover:scale-110 transition-transform duration-300"
            >
              {label}
            </a>
          ))}
        </nav>
      </footer>
    </>
  );
};

export default Contact;
