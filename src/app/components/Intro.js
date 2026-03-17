import Image from "next/image";

import TextType from "../components/texttype";
import { useEffect, useState } from "react";

export default function Intro() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const tags = [
    {
      label: "Next.js",
      color: "text-green-300 border-green-700/60 bg-green-950/60",
    },
    {
      label: "Node",
      color: "text-emerald-300 border-emerald-700/60 bg-emerald-950/60",
    },
    {
      label: "Express",
      color: "text-teal-300 border-teal-700/60 bg-teal-950/60",
    },
    {
      label: "MongoDB",
      color: "text-green-400 border-green-600/60 bg-green-950/60",
    },
    {
      label: "TypeScript",
      color: "text-cyan-300 border-cyan-800/50 bg-cyan-950/50",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=VT323&display=swap');

        .hero-mono { font-family: 'Share Tech Mono', monospace; }
        .hero-vt { font-family: 'VT323', monospace; }

        @keyframes flicker {
          0%,100%{opacity:1} 92%{opacity:1} 93%{opacity:0.4} 95%{opacity:1} 97%{opacity:0.6} 98%{opacity:1}
        }
        @keyframes scandown {
          0%{top:0%} 100%{top:100%}
        }
        @keyframes corner-pulse {
          0%,100%{opacity:1;box-shadow:0 0 0px rgba(74,222,128,0)} 50%{opacity:0.5;box-shadow:0 0 12px rgba(74,222,128,0.6)}
        }
        @keyframes float-up {
          0%{transform:translateY(0px)} 50%{transform:translateY(-8px)} 100%{transform:translateY(0px)}
        }
        @keyframes glitch-1 {
          0%,100%{clip-path:inset(0 0 100% 0)} 10%{clip-path:inset(20% 0 60% 0);transform:translateX(-4px)}
          20%{clip-path:inset(50% 0 30% 0);transform:translateX(4px)} 30%{clip-path:inset(80% 0 5% 0);transform:translateX(-2px)}
          40%{clip-path:inset(0 0 100% 0)}
        }
        @keyframes glitch-2 {
          0%,100%{clip-path:inset(0 0 100% 0)} 15%{clip-path:inset(60% 0 10% 0);transform:translateX(6px)}
          25%{clip-path:inset(30% 0 50% 0);transform:translateX(-6px)} 35%{clip-path:inset(10% 0 75% 0);transform:translateX(3px)}
          45%{clip-path:inset(0 0 100% 0)}
        }
        @keyframes img-compile {
          0%{clip-path:inset(100% 0 0 0);opacity:0}
          60%{clip-path:inset(0% 0 0 0);opacity:1}
          70%{opacity:0.6} 75%{opacity:1} 80%{opacity:0.7} 85%{opacity:1}
          100%{clip-path:inset(0 0 0 0);opacity:1}
        }
        @keyframes border-march {
          0%{stroke-dashoffset:1000} 100%{stroke-dashoffset:0}
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes tag-in {
          from{opacity:0;transform:translateX(-10px)} to{opacity:1;transform:translateX(0)}
        }
        @keyframes fade-up {
          from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)}
        }
        @keyframes noise {
          0%,100%{background-position:0 0} 10%{background-position:-5% -10%}
          20%{background-position:-15% 5%} 30%{background-position:7% -25%}
          40%{background-position:20% 25%} 50%{background-position:-25% 10%}
          60%{background-position:15% 5%} 70%{background-position:0 15%}
          80%{background-position:25% 35%} 90%{background-position:-10% 10%}
        }

        .name-flicker { animation: flicker 4s infinite; }
        .glitch-layer-1 { animation: glitch-1 6s infinite 1s; }
        .glitch-layer-2 { animation: glitch-2 6s infinite 1.3s; }
        .img-compile { animation: img-compile 1.8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .corner-pulse { animation: corner-pulse 2s ease-in-out infinite; }
        .float-anim { animation: float-up 4s ease-in-out infinite; }
        .cursor-blink { animation: blink 1s step-end infinite; }

        .scan-line {
          position:absolute;
          left:0;right:0;
          height:2px;
          background:linear-gradient(90deg, transparent, rgba(74,222,128,0.15), transparent);
          animation: scandown 3s linear infinite;
          pointer-events:none;
        }

        .tag-stagger > *:nth-child(1){animation:tag-in 0.4s ease forwards 0.8s;opacity:0}
        .tag-stagger > *:nth-child(2){animation:tag-in 0.4s ease forwards 1s;opacity:0}
        .tag-stagger > *:nth-child(3){animation:tag-in 0.4s ease forwards 1.2s;opacity:0}
        .tag-stagger > *:nth-child(4){animation:tag-in 0.4s ease forwards 1.4s;opacity:0}
        .tag-stagger > *:nth-child(5){animation:tag-in 0.4s ease forwards 1.6s;opacity:0}

        .section-reveal { animation: fade-up 0.7s ease forwards; opacity:0; }
        .delay-200{animation-delay:0.2s} .delay-400{animation-delay:0.4s}
        .delay-600{animation-delay:0.6s} .delay-700{animation-delay:0.7s}
        .delay-900{animation-delay:0.9s}

        .corner {
          position:absolute; width:20px; height:20px; border-color:#4ade80;
        }
        .corner-tl{top:-4px;left:-4px;border-top-width:2px;border-left-width:2px;}
        .corner-tr{top:-4px;right:-4px;border-top-width:2px;border-right-width:2px;}
        .corner-bl{bottom:-4px;left:-4px;border-bottom-width:2px;border-left-width:2px;}
        .corner-br{bottom:-4px;right:-4px;border-bottom-width:2px;border-right-width:2px;}

        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
          animation: noise 0.5s steps(1) infinite;
        }

        .grid-bg {
          background-image:
            linear-gradient(rgba(74,222,128,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .stat-box {
          border: 1px solid rgba(74,222,128,0.2);
          background: rgba(0,20,5,0.6);
        }
      `}</style>

      <div className="hero-mono relative min-h-screen overflow-hidden flex items-center justify-center bg-black w-screen">
        {/* Grid background */}
        <div className="grid-bg absolute inset-0 opacity-100" />

        {/* Radial glow center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,60,20,0.4),transparent)]" />

        {/* Particles */}

        {/* Scan line */}
        <div className="scan-line" />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.025] pointer-events-none" />

        {/* ── CONTENT ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-24">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-8">
            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col gap-6 w-full md:max-w-xl">
              {/* File path breadcrumb */}
              <div className="section-reveal delay-200 flex items-center gap-2 text-green-700 text-xs tracking-widest">
                <span>~/portfolio</span>
                <span className="text-green-900">/</span>
                <span className="text-green-600">src</span>
                <span className="text-green-900">/</span>
                <span className="text-green-500">hero.tsx</span>
                <span className="ml-2 inline-block w-1.5 h-3 bg-green-500 cursor-blink" />
              </div>

              {/* Boot text */}
              <div className="section-reveal delay-400 text-green-500 text-xs sm:text-sm leading-relaxed border-l-2 border-green-800 pl-3">
                <TextType
                  text={[
                    "Initializing dev environment...",
                    "> npm run dev",
                    "✔ Compiled successfully",
                    "✔ Running on localhost:3000",
                  ]}
                  typingSpeed={500}
                  pauseDuration={900}
                  showCursor={true}
                  cursorCharacter="▌"
                />
              </div>

              {/* Big glitchy name */}
              <div className="section-reveal delay-600 relative select-none">
                {/* Glitch layers */}
                <div className="hero-vt absolute inset-0 text-[72px] sm:text-[96px] md:text-[110px] font-normal leading-none text-red-400/70 glitch-layer-1 pointer-events-none">
                  Greg_Haji
                </div>
                <div className="hero-vt absolute inset-0 text-[72px] sm:text-[96px] md:text-[110px] font-normal leading-none text-cyan-400/50 glitch-layer-2 pointer-events-none">
                  Greg_Haji
                </div>
                {/* Main name */}
                <h1 className="hero-vt name-flicker text-[72px] sm:text-[96px] md:text-[110px] font-normal leading-none text-green-300 [text-shadow:0_0_30px_rgba(74,222,128,0.5),0_0_60px_rgba(74,222,128,0.2)]">
                  Greg_Haji
                </h1>
              </div>

              {/* Role line */}
              <div className="section-reveal delay-700 flex items-center gap-3">
                <span className="text-green-700 text-lg">▶</span>
                <h2 className="text-green-200 text-base sm:text-lg md:text-xl tracking-[0.2em] uppercase">
                  Full Stack Developer
                </h2>
              </div>

              {/* Stack tags */}
              <div className="section-reveal delay-900 tag-stagger flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`${tag.color} text-xs px-2.5 py-1 rounded border tracking-wider font-medium backdrop-blur-sm`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <div className="section-reveal delay-900 grid grid-cols-3 gap-3 mt-2">
                {[
                  { val: "3+", label: "yrs exp" },
                  { val: "12+", label: "projects" },
                  { val: "∞", label: "coffee" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="stat-box rounded px-3 py-2 text-center"
                  >
                    <div className="hero-vt text-green-300 text-2xl leading-none [text-shadow:0_0_10px_rgba(74,222,128,0.6)]">
                      {s.val}
                    </div>
                    <div className="text-green-700 text-[10px] tracking-widest mt-0.5 uppercase">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA prompt */}
              <div className="section-reveal delay-900 flex items-center gap-3 mt-2">
                <span className="text-green-500 text-sm tracking-wide">$</span>
                <span className="text-green-400 text-sm tracking-wide">
                  ready_to_build
                </span>
                <span className="text-green-300 text-sm">()</span>
                <span className="text-green-700 text-sm">→</span>
                <button className="text-xs text-green-300 border border-green-700/60 bg-green-950/40 hover:bg-green-900/40 hover:border-green-500 px-3 py-1.5 rounded tracking-widest transition-all duration-200 hover:[text-shadow:0_0_8px_rgba(74,222,128,0.8)] active:scale-95">
                  ./contact.sh
                </button>
              </div>
            </div>

            {/* ── RIGHT COLUMN — Image ── */}
            <div className="float-anim relative flex-shrink-0 flex justify-center md:justify-end">
              {/* Outer decorative ring */}
              <div className="absolute -inset-6 rounded-full border border-green-900/40" />
              <div className="absolute -inset-10 rounded-full border border-green-950/30" />

              {/* Glow blob */}
              <div className="absolute inset-0 rounded-full bg-green-500/10 blur-3xl" />

              {/* Image frame */}
              <div className="relative w-[220px] sm:w-[280px] md:w-[340px]">
                {/* SVG marching border */}
                <svg
                  className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)]"
                  style={{ top: "-12px", left: "-12px" }}
                >
                  <rect
                    x="4"
                    y="4"
                    width="calc(100% - 8px)"
                    height="calc(100% - 8px)"
                    rx="8"
                    fill="none"
                    stroke="rgba(74,222,128,0.4)"
                    strokeWidth="1"
                    strokeDasharray="8 6"
                    style={{ animation: "border-march 6s linear infinite" }}
                  />
                </svg>

                {/* Corner brackets */}
                <div className="corner corner-tl corner-pulse" />
                <div
                  className="corner corner-tr corner-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="corner corner-bl corner-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="corner corner-br corner-pulse"
                  style={{ animationDelay: "1.5s" }}
                />

                {/* Compile label top */}
                <div className="absolute -top-7 left-0 right-0 flex justify-between text-[10px] text-green-700 tracking-widest">
                  <span>PROCESS_ID:0x4A</span>
                  <span className="text-green-500">▶ LIVE</span>
                </div>

                {/* Image */}
                <div className="img-compile rounded overflow-hidden">
                  <Image
                    src="/test.png"
                    alt="Greg Haji"
                    width={400}
                    height={400}
                    className="w-full object-cover [filter:contrast(1.05)_brightness(0.95)_saturate(0.9)]"
                    priority
                  />
                </div>

                {/* Scanline over image */}
                <div className="absolute inset-0 pointer-events-none rounded overflow-hidden">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,0,0,0.08)_3px,rgba(0,0,0,0.08)_4px)]" />
                </div>

                {/* Status bar under image */}
                <div className="absolute -bottom-7 left-0 right-0 flex justify-between text-[10px] text-green-700 tracking-widest">
                  <span>
                    STATUS: <span className="text-green-400">COMPILED</span>
                  </span>
                  <span>128 modules</span>
                </div>

                {/* Floating debug tags */}
                <div className="absolute -right-12 top-8 bg-black/80 border border-green-800/60 text-green-500 text-[10px] px-2 py-0.5 rounded tracking-wider rotate-90 origin-left whitespace-nowrap">
                  v2.4.1-stable
                </div>
              </div>
            </div>
          </div>

          {/* ── BOTTOM BAR ── */}
          <div className="mt-16 md:mt-20 flex items-center gap-4 text-green-900 text-[10px] tracking-widest border-t border-green-950/60 pt-4">
            <span className="text-green-700">◆</span>
            <span>NODE_ENV=production</span>
            <span className="text-green-950">│</span>
            <span>PORT=3000</span>
            <span className="text-green-950">│</span>
            <span>
              UPTIME=<span className="text-green-700">∞</span>
            </span>
            <span className="text-green-950">│</span>
            <span className="ml-auto text-green-800">JHB, ZA</span>
          </div>
        </div>
      </div>
    </>
  );
}
