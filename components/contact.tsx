import React from 'react'

const contact = () => {
  return (
    <div>{/* Space before About Me */}
    <div className="h-4 sm:h-8 w-full"></div>

    {/* About Me */}
    <div id='contact-id' className="flex flex-col items-center justify-center p-4 sm:p-10 space-x-0 sm:space-x-20 mt-10 sm:mt-28 min-h-screen w-full">
      <div className="w-full pt-8 sm:pt-16 space-y-3 flex flex-col items-center">
        <h1 className="font-bold font-sans text-2xl sm:text-4xl text-cyan-500 text-center">
          COLLABORATION
        </h1>
        <h2 className="font-bold font-sans text-4xl sm:text-9xl text-center">
          Lets talk for<br/> Collaboration
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-20 space-y-4 sm:space-y-0 mt-6 sm:mt-10 w-full">
          <button className="border bg-cyan-500 border-white text-lg sm:text-2xl p-4 sm:p-6 hover:text-white text-black font-bold transition-transform duration-300 transform hover:scale-110 w-full sm:w-auto">
            Get In Touch
          </button>
          <button className="border border-white text-lg sm:text-2xl p-4 sm:p-6 hover:text-cyan-500 text-white font-bold transition-transform duration-300 transform hover:scale-110 w-full sm:w-auto">
            Hire Me Now
          </button>
        </div>
        <div className="border border-white mt-10 sm:mt-28 w-full"></div>
        <footer className="flex flex-col sm:flex-row justify-center w-full">
          <div className="w-full sm:w-1/2 p-2 sm:p-5">
            <p className="mt-6 sm:mt-10 text-center sm:text-left text-base sm:text-lg">Working in development and design has given me a <br className="hidden sm:block"/>stronger sense of the extraordinary in my digital world</p>
            <p className="text-white mt-8 sm:mt-16 text-center sm:text-left text-sm sm:text-base">
              © 2025 Safeer Ahmad Rana. All rights reserved.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-2 sm:p-5 h-auto sm:h-60 font-sans font-bold text-lg sm:text-xl flex flex-col justify-center items-center sm:items-end space-y-3 sm:space-y-5 mt-6 sm:mt-0">
            <p className="transition-transform duration-300 transform hover:scale-110 w-full text-center sm:text-right"><a href="https://www.instagram.com/" className="">Instagram</a></p>
            <p className="transition-transform duration-300 transform hover:scale-110 w-full text-center sm:text-right"><a href="https://www.github.com/" className="">GitHub</a></p>
            <p className="transition-transform duration-300 transform hover:scale-110 w-full text-center sm:text-right"><a href="https://www.LinkedIn.com/" className="">LinkedIn</a></p>
            <p className="transition-transform duration-300 transform hover:scale-110 w-full text-center sm:text-right"><a href="https://www.Whatsappweb.com/" className="">WhatsApp</a></p>
          </div>
        </footer>
      </div>
    </div></div>
  )
}

export default contact