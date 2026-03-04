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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500&display=swap');

        .nav-link {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(200, 205, 235, 0.45);
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s;
          position: relative;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #f5c800;
          transition: width 0.25s cubic-bezier(.22,1,.36,1);
        }
        .nav-link:hover { color: #f5c800; }
        .nav-link:hover::after { width: 100%; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-10 lg:px-20 h-16 bg-[#08090e]/80 backdrop-blur-md border-b border-white/[0.06]">
        {/* LOGO */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-syne font-extrabold text-lg tracking-tight text-[#eceef8] cursor-pointer bg-transparent border-none p-0"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          GH<span style={{ color: "#f5c800" }}>.</span>
        </button>

        {/* LINKS */}
        <div className="flex items-center gap-10">
          {navItems.map((item) => (
            <span
              key={item.id}
              className="nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className="font-outfit text-[0.68rem] font-semibold tracking-[0.15em] uppercase px-4 py-2 rounded-sm border border-[#f5c800]/60 text-[#f5c800] hover:bg-[#f5c800] hover:text-[#08090e] transition-all duration-200"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Hire Me
        </a>
      </nav>
    </>
  );
}
