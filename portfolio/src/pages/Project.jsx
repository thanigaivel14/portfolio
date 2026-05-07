const Project = () => {
  const projects = [
    {
      name: "Study Buddy",
      details: "An online messaging app for students",
      usecase: "Built to share study materials and collaborate",
      techUsed: ["MERN Stack", "Cloudinary"],
      link: "#",
      gitLink: "https://github.com/thanigaivel14/studybuddy",
    },
    {
      name: "Skill Sharing",
      details: "A platform to exchange skills with nearby users",
      usecase:
        "Instead of money, users exchange skills and knowledge",
      techUsed: ["MERN Stack", "WebSocket", "Cloudinary"],
      link: "https://skill-share-front.onrender.com",
      gitLink: "https://github.com/thanigaivel14/skill-share",
    },
    {
      name: "Todo App",
      details: "Task management application",
      usecase:
        "Track daily tasks, plan ahead, and get reminder notifications",
      techUsed: ["MERN Stack", "Firebase Cloud Messaging"],
      link: "https://todo-app-1-ds6b.onrender.com",
      gitLink: "https://github.com/thanigaivel14/Todo_App",
    },
    {
      name: "E-commerce App",
      details: "A full-stack e-commerce platform for browsing and purchasing products",
      usecase:
        "Users can register/login, add products to cart, place orders, and manage their shopping experience online",
      techUsed: ["MERN Stack", "JWT Authentication"],
      link: "https://e-commerce-1tks.onrender.com",
      gitLink: "https://github.com/thanigaivel14/e-commerce",
    }
  ];

  return (
    <div className="bg-[#0b0120] text-white min-h-screen px-6 py-40">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        My <span className="text-purple-500">Projects</span>
      </h1>

      {/* Grid */}
      <div className="mt-12 grid md:grid-cols-3 gap-8">

        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:scale-105 transition duration-300"
          >
            {/* Title */}
            <h2 className="text-2xl font-semibold mb-2">
              {proj.name}
            </h2>

            {/* Details */}
            <p className="text-gray-400 text-sm mb-2">
              {proj.details}
            </p>

            {/* Use Case */}
            <p className="text-gray-500 text-sm mb-4">
              {proj.usecase}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.techUsed.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={proj.link}
                target="_blank"
                className="text-sm text-purple-400 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={proj.gitLink}
                target="_blank"
                className="text-sm text-gray-300 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Project;