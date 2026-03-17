"use client";

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faUsers,
  faLightbulb,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const traits = [
  {
    icon: faBrain,
    key: "fastLearner",
    desc: "Quickly adapts to new technologies, frameworks, and patterns. Comfortable learning on the fly and applying knowledge immediately.",
  },
  {
    icon: faUsers,
    key: "teamPlayer",
    desc: "Collaborates effectively across teams, communicates clearly, and values shared ownership of solutions.",
  },
  {
    icon: faLightbulb,
    key: "problemSolver",
    desc: "Enjoys breaking down complex problems into clean, maintainable solutions using logic and creativity.",
  },
  {
    icon: faFire,
    key: "passionateAndCurious",
    desc: "Driven by curiosity and a genuine love for technology. Constantly exploring new ideas and improving craft.",
  },
];

const stats = [
  { val: "12+", label: "completedProjects" },
  { val: "130+", label: "commitsIn2025" },
  { val: "3+", label: "yearsExperience" },
];

export default function About() {
  const sectionRef = useRef(null);
  const traitRefs = useRef([]);
  const statRefs = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Traits stagger in from left
      gsap.fromTo(
        traitRefs.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );
      // Stats count up feel
      gsap.fromTo(
        statRefs.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        },
      );
      // Text block fade
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            once: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=VT323&display=swap');
        .about-mono { font-family: 'Share Tech Mono', monospace; }
        .about-vt   { font-family: 'VT323', monospace; }
        @keyframes trait-glow {
          0%,100% { box-shadow: 0 0 0px rgba(74,222,128,0); }
          50%     { box-shadow: 0 0 14px rgba(74,222,128,0.15); }
        }
        .trait-card:hover { animation: trait-glow 1.5s ease-in-out infinite; }
        @keyframes cursor-blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cursor { animation: cursor-blink 1s step-end infinite; }
      `}</style>

      <section
        id="about-me"
        ref={sectionRef}
        className="about-mono relative w-full bg-black py-28 px-6 sm:px-12 md:px-20 overflow-hidden"
      >
        {/* Grid bg */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        {/* Radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(0,40,10,0.3),transparent)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-16">
            <span className="text-green-700 text-xs tracking-widest">
              {"//"}
            </span>
            <span className="text-green-500 text-xs tracking-[0.3em] uppercase">
              src/profile/about.ts
            </span>
            <span className="ml-2 w-1.5 h-3.5 bg-green-500 cursor inline-block" />
          </div>

          <div className="flex flex-col md:flex-row gap-16 md:gap-20">
            {/* LEFT — Traits */}
            <div className="md:w-1/2 space-y-4">
              <p className="text-green-700 text-xs mb-8 tracking-wider">
                const traits = &#123;
              </p>

              {traits.map((t, i) => (
                <div
                  key={t.key}
                  ref={(el) => (traitRefs.current[i] = el)}
                  className="trait-card group flex items-start gap-5 border border-green-900/50 hover:border-green-600/60 bg-green-950/10 hover:bg-green-950/20 rounded-lg px-5 py-4 transition-all duration-300 cursor-default"
                >
                  <div className="text-green-600 group-hover:text-green-400 transition-colors duration-200 mt-0.5 w-4 flex-shrink-0">
                    <FontAwesomeIcon icon={t.icon} />
                  </div>
                  <div>
                    <p className="text-green-400 text-sm mb-1">
                      <span className="text-green-700">▸ </span>
                      {t.key}:<span className="text-green-300 ml-2">true</span>
                      <span className="text-green-700">,</span>
                    </p>
                    <p className="text-green-200/50 text-xs leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}

              <p className="text-green-700 text-xs mt-4 tracking-wider">
                &#125;
              </p>
            </div>

            {/* RIGHT — About text */}
            <div
              ref={textRef}
              className="md:w-1/2 flex flex-col justify-between gap-10"
            >
              <div>
                <p className="text-green-700 text-xs mb-4 tracking-wider">
                  # README.md
                </p>
                <h2 className="about-vt text-6xl md:text-7xl text-green-300 leading-none mb-6 [text-shadow:0_0_20px_rgba(74,222,128,0.3)]">
                  Greg_Haji
                </h2>
                <div className="border-l-2 border-green-800/60 pl-5 space-y-4">
                  <p className="text-green-200/60 text-sm leading-relaxed">
                    My journey into technology started early — as a curious kid
                    dismantling computers to understand how they worked. At the
                    age of 7, I built my first PC, and that curiosity quickly
                    became a lifelong passion.
                  </p>
                  <p className="text-green-200/60 text-sm leading-relaxed">
                    Today, I&apos;m a full stack developer with 3+ years of
                    experience collaborating across teams and projects. I still
                    approach development the same way: experimenting, learning,
                    and constantly pushing myself to build better, more
                    thoughtful solutions.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    ref={(el) => (statRefs.current[i] = el)}
                    className="border border-green-900/50 bg-green-950/20 rounded-lg px-4 py-4 text-center hover:border-green-700/60 transition-colors duration-200"
                  >
                    <div className="about-vt text-3xl text-green-300 leading-none [text-shadow:0_0_12px_rgba(74,222,128,0.5)]">
                      {s.val}
                    </div>
                    <div className="text-green-700 text-[10px] tracking-wider mt-1.5 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-green-700 text-xs">
                <span className="text-green-600">$</span> git log --oneline
                <span className="ml-2 w-1.5 h-3 bg-green-600/70 cursor inline-block" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
