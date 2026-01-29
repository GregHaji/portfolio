export default function Nav() {
  const navItems = [
    { name: "About Me", id: "about-me" },
    { name: "My Skills", id: "my-skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 md:flex justify-center w-full p-4 bg-black/50 backdrop-blur-sm z-50 border-b border-green-700/50 hidden ">
      <div className="flex space-x-16 text-green-400 font-mono">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollToSection(item.id)}
          >
            {/* Retro node */}
            <div
              className="w-3 h-3 rounded-full border-2 border-green-400
                            animate-pulse group-hover:scale-125
                            group-hover:shadow-[0_0_8px_rgba(0,255,0,0.8)]
                            transition-all duration-200"
            ></div>

            {/* Text */}
            <div className="relative overflow-hidden">
              <span className="inline-block transition-all duration-300 group-hover:text-green-300">
                {item.name}
              </span>
              {/* Optional blinking cursor */}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
