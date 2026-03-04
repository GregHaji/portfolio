import Image from "next/image";

export default function Intro() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .font-syne  { font-family: 'Syne', sans-serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }

        .anim-1 { animation: fadeUp 0.65s cubic-bezier(.22,1,.36,1) 0.05s both; }
        .anim-2 { animation: fadeUp 0.65s cubic-bezier(.22,1,.36,1) 0.18s both; }
        .anim-3 { animation: fadeUp 0.65s cubic-bezier(.22,1,.36,1) 0.30s both; }
        .anim-4 { animation: fadeUp 0.65s cubic-bezier(.22,1,.36,1) 0.42s both; }
        .anim-5 { animation: fadeUp 0.65s cubic-bezier(.22,1,.36,1) 0.54s both; }
        .anim-img { animation: fadeIn 0.9s ease 0.25s both; }

        .name-outline {
          -webkit-text-stroke: 2px #f5c800;
          color: transparent;
        }
        .dot-pulse { animation: pulseDot 2s ease-in-out infinite; }

        .btn-primary {
          display: inline-block;
          padding: 0.7rem 1.8rem;
          background: #f5c800;
          color: #0a0a0a;
          font-family: 'Outfit', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border-radius: 3px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover { background: #ffd426; transform: translateY(-2px); }

        .btn-ghost {
          display: inline-block;
          padding: 0.7rem 1.8rem;
          background: transparent;
          color: rgba(235,235,245,0.75);
          font-family: 'Outfit', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 3px;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
        }
        .btn-ghost:hover { border-color: rgba(245,200,0,0.5); color: #f5c800; transform: translateY(-2px); }

        .social-link {
          font-family: 'Outfit', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(200,205,235,0.4);
          text-decoration: none;
          transition: color 0.2s;
        }
        .social-link:hover { color: #f5c800; }
      `}</style>

      <section className="font-outfit relative min-h-screen w-full bg-[#08090e] flex items-center overflow-hidden">
        {/* GLOWS */}
        <div className="pointer-events-none absolute -top-28 -right-20 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(245,200,0,0.07)_0%,transparent_65%)]" />
        <div className="pointer-events-none absolute -bottom-24 left-[5%] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(245,200,0,0.04)_0%,transparent_65%)]" />

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-12 md:px-20 flex flex-wrap items-center justify-between gap-10 md:gap-16">
          {/* ── LEFT ── */}
          <div className="flex-1 min-w-[280px] max-w-[580px] flex flex-col">
            {/* EYEBROW */}
            <div className="anim-1 flex items-center gap-3 mb-6">
              <span className="block w-7 h-0.5 bg-[#f5c800] rounded" />
              <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-[#f5c800] font-medium">
                Full Stack Developer
              </span>
            </div>

            {/* NAME */}
            <h1 className="anim-2 font-syne font-extrabold leading-[0.95] tracking-tight text-[#eceef8] mb-6 text-6xl md:text-7xl lg:text-8xl">
              Greg
              <br />
              <span className="name-outline">Haji.</span>
            </h1>

            {/* BIO */}
            <p className="anim-3 text-base font-light text-white/40 leading-relaxed max-w-[420px] mb-8">
              I build fast, scalable web products end-to-end — from polished UIs
              to robust APIs. Currently open to new opportunities.
            </p>

            {/* STACK TAGS */}
            <div className="anim-4 flex flex-wrap gap-2 mb-8">
              {["Next.js", "Node.js", "Express", "MongoDB", "TypeScript"].map(
                (t) => (
                  <span
                    key={t}
                    className="font-outfit text-[0.65rem] tracking-[0.12em] uppercase px-3 py-1 border border-white/10 rounded-sm text-white/40 bg-white/[0.03]"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>

            {/* DIVIDER */}
            <div className="anim-4 h-px bg-white/[0.07] mb-8" />

            {/* BUTTONS */}
            <div className="anim-5 flex flex-wrap gap-3 items-center">
              <a href="#work" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-ghost">
                Get In Touch
              </a>
            </div>

            {/* SOCIALS */}
            <div className="anim-5 flex gap-6 mt-7">
              {["GitHub", "LinkedIn", "Resume ↗"].map((s) => (
                <a key={s} href="#" className="social-link">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: IMAGE ── */}
          <div className="anim-img relative shrink-0 self-end">
            {/* YELLOW CORNER ACCENTS */}
            <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-[#f5c800] z-10" />
            <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-[#f5c800] z-10" />

            {/* PHOTO */}
            <div className="relative w-[clamp(220px,28vw,360px)] rounded overflow-hidden border border-white/[0.08] bg-white/[0.02]">
              <Image
                src="/test.png"
                alt="Greg Haji"
                width={360}
                height={480}
                className="w-full h-auto block"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090e]/50 to-transparent" />
            </div>

            {/* AVAILABILITY PILL */}
            <div className="flex items-center justify-center gap-2 mt-4 border border-[#f5c800]/25 rounded-full px-4 py-1.5 bg-[#f5c800]/[0.05]">
              <span className="dot-pulse block w-1.5 h-1.5 rounded-full bg-[#f5c800] shadow-[0_0_8px_#f5c800]" />
              <span className="font-outfit text-[0.63rem] tracking-[0.16em] uppercase text-yellow-100/80 font-medium">
                Open to work
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM RULE */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c800]/20 to-transparent" />
      </section>
    </>
  );
}
