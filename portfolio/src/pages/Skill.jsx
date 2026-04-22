import {
  FaReact,
  FaJava,
  FaJsSquare,
  FaPython ,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiSap,
} from "react-icons/si";

const Skill = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },

    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "SAP ABAP", icon: <SiSap /> },
    { name: "SAP CIDS", icon: <SiSap /> },
  ];

  return (
    <div className="bg-[#0b0120] text-white min-h-screen  px-6 py-40">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        My <span className="text-purple-500">Skills</span>
      </h1>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:scale-105 transition duration-300"
          >
            {/* Icon */}
            <div className="text-4xl text-purple-400 mb-3">
              {skill.icon}
            </div>

            {/* Name */}
            <p className="text-lg">{skill.name}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Skill;