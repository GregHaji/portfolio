import { useState, useEffect } from "react";

export default function Nav() {
  const navItems = [
    { name: "About Me", id: "about-me" },
    { name: "My Skills", id: "my-skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const [activeId, setActiveId] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Stagger boot animation
  useEffect(() => {
    navItems.forEach((_, i) => {
      setTimeout(
        () => {
          setVisibleItems((prev) => [...prev, i]);
        },
        100 + i * 120,
      );
    });
  }, []);

  // Active section tracking
  useEffect(() => {
    const observers = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.4 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 68;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Minimal non-Tailwind: keyframes + glitch pseudo only */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
        .nav-font { font-family: 'Share Tech Mono', monospace; }

        @keyframes glitch {
          0%   { transform: translateX(-3px); }
          25%  { transform: translateX(3px); }
          50%  { transform: translateX(-2px); }
          75%  { transform: translateX(2px); }
          100% { transform: translateX(0px); opacity: 0; }
        }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes scanline {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }

        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 0; top: 0;
          color: #f87171;
          clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
          opacity: 0;
        }
        .glitch-wrap:hover .glitch-text::after {
          opacity: 0.7;
          animation: glitch 0.3s steps(2) forwards;
        }
        .cursor-blink { animation: blink 1s step-end infinite; }
        .scanlines {
          background-image: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,255,80,0.015) 2px, rgba(0,255,80,0.015) 4px
          );
        }
      `}</style>

      {/* ── Desktop Nav ── */}
      <nav className="nav-font scanlines fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-8 h-14 bg-black/75 backdrop-blur-md border-b border-green-900/50">
        {/* Logo / prompt */}
        <div className="flex items-center gap-1 text-green-500/60 text-xs tracking-wider">
          <span>~/portfolio</span>
          <span className="cursor-blink text-green-400">▮</span>
        </div>

        {/* Nav items */}
        <div className="flex items-center gap-8">
          {navItems.map((item, index) => {
            const isActive = activeId === item.id;
            const isVisible = visibleItems.includes(index);
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  glitch-wrap group relative flex items-center gap-2 cursor-pointer
                  bg-transparent border-none outline-none p-0
                  transition-all duration-300
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
                `}
              >
                {/* Dot */}
                <span
                  className={`
                    block w-2 h-2 rounded-full border border-green-400 flex-shrink-0
                    transition-all duration-200
                    group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(0,255,80,0.9)]
                    ${
                      isActive
                        ? "bg-green-400 shadow-[0_0_12px_rgba(0,255,80,1)] animate-pulse"
                        : "bg-transparent"
                    }
                  `}
                />

                {/* Text */}
                <span
                  className={`
                    glitch-text relative text-xs tracking-widest transition-colors duration-200
                    ${
                      isActive
                        ? "text-green-300 [text-shadow:0_0_8px_rgba(0,255,80,0.5)]"
                        : "text-green-500 group-hover:text-green-300"
                    }
                  `}
                  data-text={`//${item.name}`}
                >
                  <span className="text-green-700 mr-0.5">{"//"}</span>
                  {item.name}
                </span>

                {/* Active underline */}
                <span
                  className={`
                    absolute -bottom-0.5 left-0 right-0 h-px
                    bg-linear-to-r from-transparent via-green-400 to-transparent
                    transition-transform duration-300 origin-center
                    ${isActive ? "scale-x-100" : "scale-x-0"}
                  `}
                />
              </button>
            );
          })}
        </div>

        {/* Status chip */}
        <div className="text-green-900 text-[10px] tracking-widest font-bold bg-green-400/10 border border-green-800/50 rounded px-2 py-0.5">
          SYS:OK
        </div>
      </nav>

      {/* ── Mobile Nav ── */}
      <nav className="nav-font fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-5 h-13 bg-black/90 backdrop-blur-md border-b border-green-900/40">
        <span className="text-green-500/60 text-xs tracking-wider">
          ~/portfolio
        </span>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1 bg-transparent border-none cursor-pointer p-1 outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-green-400 transition-all duration-200 origin-center ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-green-400 transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-green-400 transition-all duration-200 origin-center ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`
          nav-font fixed top-13 left-0 right-0 z-40 md:hidden
          bg-black/95 border-b border-green-900/40 py-2
          transition-transform duration-300 ease-out
          ${mobileOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                glitch-wrap group w-full flex items-center gap-3 px-6 py-3
                bg-transparent border-none cursor-pointer outline-none text-left
                ${isActive ? "bg-green-400/5" : "hover:bg-green-400/5"}
                transition-colors duration-150
              `}
            >
              <span
                className={`
                  block w-2 h-2 rounded-full border border-green-400 flex-shrink-0
                  ${isActive ? "bg-green-400 animate-pulse shadow-[0_0_8px_rgba(0,255,80,1)]" : "bg-transparent"}
                `}
              />
              <span
                className={`
                  glitch-text relative text-xs tracking-widest
                  ${isActive ? "text-green-300" : "text-green-500"}
                `}
                data-text={`//${item.name}`}
              >
                <span className="text-green-700 mr-0.5">{"//"}</span>
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
