import React from 'react'

const header = () => {
  return (
    <div id='home-id'>
        <header className="flex space-x-20 items-center h-[50px] p-4 font-sans font-bold text-white bg-opacity-12 rounded-2xl">
            <img
              className="transition-transform duration-300 transform hover:scale-110"
              src="/logo.png"
              alt="logo"
              width={120}
              height={120}
            />
            <a
              className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500"
              href="#home-id"
            >
              Home
            </a>
            <a
              className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500"
              href="#education-id"
            >
              Education
            </a>
            <a
              className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500"
              href="#project-id"
            >
              Project
            </a>
            <a
              className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500"
              href="#contact-id"
            >
              Contact
            </a>
            <button className="ml-auto border-2 border-white rounded-b-lg p-2 hover:text-black hover:bg-cyan-500 text-white font-bold transition-transform duration-300 transform hover:scale-110">
              Download Resume
            </button>
          </header></div>
  )
}

export default header