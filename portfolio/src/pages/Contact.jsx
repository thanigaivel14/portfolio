import {
 FaGithub,
 FaLinkedin,
 FaInstagram
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Contact = () => {
 return (
  <div className="bg-[#0b0120] text-white min-h-screen flex items-center justify-center px-6">

   <div className="max-w-3xl text-center">

    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-bold">
     Let's <span className="text-purple-500">Connect</span>
    </h1>

    <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>

    {/* Message */}
    <p className="text-gray-400 text-lg mt-8 leading-8">
     I'm currently looking to join a cross-functional team that values
     improving people's lives through accessible design and technology.
     If you have a project in mind, let's connect.
    </p>

    {/* Email */}
    <div className="mt-8 flex items-center justify-center gap-3 text-xl">
      <MdEmail className="text-purple-400 text-3xl" />
      <a
        href="mailto:Thanigai905@gmail.com"
        className="hover:text-purple-400 transition"
      >
        Thanigai905@gmail.com
      </a>
    </div>

    {/* Social Icons */}
    <div className="flex justify-center gap-8 mt-10 text-3xl">

      <a
       href="https://github.com/thanigaivel14"
       target="_blank"
       rel="noreferrer"
       className="hover:text-purple-400 hover:scale-110 transition"
      >
        <FaGithub />
      </a>

      <a
       href="https://www.linkedin.com/in/thanigaivel-selvam-82a586284"
       target="_blank"
       rel="noreferrer"
       className="hover:text-purple-400 hover:scale-110 transition"
      >
        <FaLinkedin />
      </a>

      {/* <a
       href="https://instagram.com/"
       target="_blank"
       rel="noreferrer"
       className="hover:text-purple-400 hover:scale-110 transition"
      >
        <FaInstagram />
      </a> */}

    </div>

   </div>

  </div>
 );
};

export default Contact;