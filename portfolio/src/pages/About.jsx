const About = () => {
  return (
    <div className=" min-h-screen relative bg-[#0b0120] text-white min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-3xl opacity-20 top-20 left-1/2 -translate-x-1/2"></div>

      {/* Content */}
      <div className="relative max-w-3xl text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          Hello, I'm <span className="text-purple-500">Thanigaivel</span>
        </h1>

        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>

        <p className="text-gray-400 text-lg mt-6">
          I completed my B.E in Mechanical Engineering and currently work as a CIDS Consultant.
        </p>

        <p className="text-gray-400 text-lg mt-2">
          I am in a learning phase as I transition into IT, eager to work with different teams and contribute to real-world projects.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p className="text-gray-400 text-sm">
              Strong ability to analyze and solve real-world challenges.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Curiosity</h3>
            <p className="text-gray-400 text-sm">
              Always eager to learn and improve continuously.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Adaptability</h3>
            <p className="text-gray-400 text-sm">
              Comfortable working in different teams and environments.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;