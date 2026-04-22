import profileImg from "../assets/profile_bgRemove.png";

const Home = () => {
  return (
    <div className="bg-[#0b0120] pt-40 text-white min-h-screen">

   

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 mt-10">

        {/* Left Image with Glow */}
        <div className="relative flex justify-center w-full md:w-1/2">

          {/* Glow Effect */}
          <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-40"></div>

          {/* Image */}
          <img
            src={profileImg}
            alt="profile"
            className="relative w-60 z-10"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">

          <h3 className="text-lg text-gray-400 mb-2">
            A Developer who
          </h3>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Builds real-world <br />
            <span className="text-purple-500">solutions...</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-lg">
            Curious and driven, always ready to learn new technologies,
            believing that innovation comes from continuous learning.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Home;