import React from "react";

const webSkills = [
  { name: "HTML5", icon: "/window.svg" },
  { name: "CSS3", icon: "/file.svg" },
  { name: "JavaScript", icon: "/js.png" },
  { name: "TypeScript", icon: "/typescript.png" },
  { name: "React", icon: "/react.png" },
  { name: "Next.js", icon: "/next.svg" },
  { name: "Docker", icon: "/docker.png" },
];

const gameSkills = [
  { name: "Unity", icon: "/unity.png" },
  { name: "C#", icon: "/c-sharp.png" },
  { name: "Python", icon: "/python.png" },
  { name: "Android", icon: "/android.png" },
  { name: "iOS", icon: "/apple.png" },
];

const SkillsPage = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-2 py-10 md:py-20 overflow-hidden">
      {/* Gradient Animated Background Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-900 via-black to-cyan-700 opacity-70 animate-pulse" />
      <h1 className="text-3xl md:text-5xl font-bold text-cyan-500 mb-10 drop-shadow-lg">Skills</h1>
      <h2 className="text-3xl md:text-7xl font-bold text-white mb-10 drop-shadow-lg">Turning ideas into reality, beyond expectations.</h2>
      <div className="flex flex-col md:flex-row w-full max-w-8xl gap-12 p-10 md:gap-20">
        {/* Web Development Section */}
        <div className="flex-1 rounded-2xl p-0 md:p-0 shadow-none">
          <div className="flex items-center mb-2">
            <img src="/window.svg" alt="Web Icon" className="w-8 h-8 mr-2" />
            <span className="uppercase tracking-widest text-xs text-cyan-300 font-semibold">Section</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            Web Development
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {webSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center bg-gray-900 bg-opacity-80 border-2 border-cyan-700 rounded-xl p-4 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-950/80 group relative cursor-pointer"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain mb-2 drop-shadow-lg group-hover:drop-shadow-cyan-400"
                />
                <span className="text-lg md:text-xl font-semibold group-hover:text-cyan-300 transition-colors duration-200">
                  {skill.name}
                </span>
                {/* Tooltip Example */}
                {/* <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-cyan-800 text-xs text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity mt-2 pointer-events-none">Skill description</span> */}
              </div>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <div className="w-1 h-32 bg-gradient-to-b from-cyan-400 via-cyan-700 to-cyan-900 rounded-full shadow-lg" />
          <span className="text-cyan-400 text-3xl mt-2">★</span>
        </div>
        {/* Game Development Section */}
        <div className="flex-1 rounded-2xl p-0 md:p-0 shadow-none">
          <div className="flex items-center mb-2">
            <img src="/unity.png" alt="Game Icon" className="w-8 h-8 mr-2" />
            <span className="uppercase tracking-widest text-xs text-cyan-300 font-semibold">Section</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            Game Development
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {gameSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center bg-gray-900 bg-opacity-80 border-2 border-cyan-700 rounded-xl p-4 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-950/80 group relative cursor-pointer"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain mb-2 drop-shadow-lg group-hover:drop-shadow-cyan-400"
                />
                <span className="text-lg md:text-xl font-semibold group-hover:text-cyan-300 transition-colors duration-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage; 