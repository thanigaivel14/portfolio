import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import signature from "./assets/signature.png"

function App() {

const scrollToSection = (id) =>{
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
};

return (
<div className="bg-[#0b0120] text-white">

{/* Fixed Glass Navbar */}
<nav
className="fixed top-0 left-0 w-full z-50
bg-[#0b0120]/70 backdrop-blur-lg
border-b border-purple-500/20 shadow-lg"
>
  
<div className="flex items-center justify-between px-3 py-5">

<h1
onClick={() => scrollToSection("home")}
className="text-xl font-semibold text-white cursor-pointer "
>
<img src={signature}className="h-16 w-auto object-contain " ></img>
</h1>

<div className="flex gap-8 text-gray-300">

<button
onClick={() => scrollToSection("about")}
className="hover:text-purple-400 transition"
>
About

</button>

<button
onClick={() => scrollToSection("projects")}
className="hover:text-purple-400 transition"
>
Projects
</button>

<button
onClick={() => scrollToSection("skills")}
className="hover:text-purple-400 transition"
>
Skills
</button>

<button
onClick={() => scrollToSection("contact")}
className="hover:text-purple-400 transition"
>
Contact
</button>

</div>

</div>
</nav>


{/* Sections */}
<div className="pt-16">

<section id="home" className="min-h-screen">
<Home />
</section>

<section id="about" className="min-h-screen">
<About />
</section>

<section id="projects" className="min-h-screen">
<Project />
</section>

<section id="skills" className="min-h-screen">
<Skill />
</section>

<section id="contact" className="min-h-screen">
<Contact />
</section>

</div>

</div>
);
}

export default App; 