import React from 'react'

const contact = () => {
  return (
    <div >{/* Space before About Me */}
    <div className="h-8 w-full"></div>

    {/* About Me */}
    <div id='contact-id' className="flex justify-center p-20 space-x-20 mt-28 h-screen w-full flex-wrap">
      <div className="w-full pt-16 space-y-3">
        <h1 className="font-bold font-sans text-4xl text-cyan-500 text-center">
          COLLABORATION
        </h1>
        <h2 className="font-bold font-sans text-9xl text-center">
          Lets talk for<br></br> Collaboration
        </h2>
        <div className="flex justify-center items-center space-x-20 mt-10">
          <button className="border-1 bg-cyan-500 border-white text-2xl p-6 hover:text-white text-black font-bold transition-transform duration-300 transform hover:scale-110">
            Get In Touch
          </button>
          <button className="border-1 border-white text-2xl p-6 hover:text-cyan-500 text-white font-bold transition-transform duration-300 transform hover:scale-110">
            Hire Me Now
          </button>
        </div>
        <div className="border-1 border-white mt-28"></div>
        <footer className="flex justify-center">
          <div className="w-1/2">
            <p className="mt-10">Working in development and design has given me a <br />stronger sense of the extraordinary in my digital world</p>
            <p className="text-white mt-16">© 2025 Safeer Ahmad Rana. All rights reserved.</p>
          </div>
          <div className="w-1/2 p-5 h-60 space-y-5 font-sans font-bold text-xl">
            <p className="transition-transform duration-300 transform hover:scale-110 ml-[90%]"><a href="https://www.instagram.com/" className="">Instagram</a></p>
            <p className="transition-transform duration-300 transform hover:scale-110 ml-[90%]"><a href="https://www.github.com/" className="">GitHub</a></p>
            <p className="transition-transform duration-300 transform hover:scale-110 ml-[90%]"><a href="https://www.LinkedIn.com/" className="">LinkedIn</a></p>
            <p className="transition-transform duration-300 transform hover:scale-110 ml-[90%]"><a href="https://www.Whatsappweb.com/" className="">WhatsApp</a></p>
          </div>
        </footer>
      </div>
    </div></div>
  )
}

export default contact