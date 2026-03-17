"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Eduvos",
    role: "BSc Software Engineering",
    duration: "2020 — 2022",
    status: "GRADUATED",
    statusOk: true,
    description:
      "Graduated cum laude with a strong academic foundation in object-oriented programming, data structures, and algorithms, complemented by hands-on experience developing React web applications and a cross-platform Flutter application using Firebase and MySQL.",
    tools: [
      "Java",
      "React",
      "Flutter",
      "Firebase",
      "MySQL",
      "OOP",
      "Data Structures",
    ],
    side: "left",
  },
  {
    title: "Curo Pumps",
    role: "Software Engineering Intern",
    duration: "2022 — 2024",
    status: "DEPLOYED",
    statusOk: true,
    description:
      "Built a full-stack, production-ready pump selection and quotation system that performs complex hydraulic calculations, validates viable pump configurations in real time, and generates professional quotations — using Next.js, Node/Express, MongoDB, and Auth0.",
    tools: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Auth0",
      "Vercel",
    ],
    side: "right",
  },
  {
    title: "Metavaro",
    role: "Full Stack Developer",
    duration: "2024 — 2025",
    status: "ACTIVE",
    statusOk: true,
    description:
      "Built full-stack web applications using Next.js and PostgreSQL, including a custom 360° interactive vehicle viewer with responsive, real-time interaction capabilities, enhancing user engagement and product visualization.",
    tools: [
      "Next.js",
      "PostgreSQL",
      "GSAP",
      "Three.js",
      "Express.js",
      "REST APIs",
    ],
    side: "left",
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the center timeline line drawing down
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        },
      );

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const fromLeft = experiences[i].side === "left";
        gsap.fromTo(
          card,
          { opacity: 0, x: fromLeft ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          },
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=VT323&display=swap');
        .exp-mono { font-family: 'Share Tech Mono', monospace; }
        .exp-vt   { font-family: 'VT323', monospace; }
        @keyframes node-ping {
          0%   { box-shadow: 0 0 0 0 rgba(74,222,128,0.6); }
          70%  { box-shadow: 0 0 0 10px rgba(74,222,128,0); }
          100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
        }
        .timeline-node { animation: node-ping 2s ease-out infinite; }
        @keyframes status-blink { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .status-active { animation: status-blink 1.5s ease-in-out infinite; }
      `}</style>

      <section
        id="experience"
        ref={sectionRef}
        className="exp-mono relative w-full bg-black py-28 px-6 sm:px-12 md:px-20 overflow-hidden"
      >
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <p className="text-green-700 text-xs tracking-[0.3em] uppercase mb-4">
              {"// src/career/timeline.ts"}
            </p>
            <h2 className="exp-vt text-6xl md:text-7xl text-green-300 leading-none [text-shadow:0_0_20px_rgba(74,222,128,0.3)]">
              Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div
              ref={lineRef}
              className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-green-900/60"
            />

            <div className="flex flex-col gap-12">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className={`flex w-full ${exp.side === "right" ? "md:justify-end" : "md:justify-start"} justify-center`}
                >
                  <div className="relative w-full md:w-[46%]">
                    {/* Timeline node */}
                    <div
                      className={`
                      hidden md:block absolute top-6 w-2.5 h-2.5 rounded-full
                      bg-green-400 border-2 border-black timeline-node z-10
                      ${exp.side === "right" ? "-left-[29px]" : "-right-[29px]"}
                    `}
                    />

                    {/* Card */}
                    <div className="group border border-green-900/50 hover:border-green-600/60 bg-green-950/10 hover:bg-green-950/20 rounded-lg p-7 transition-all duration-300">
                      {/* Top row */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-green-700 text-[10px] tracking-widest uppercase">
                          {exp.duration}
                        </span>
                        <span
                          className={`text-[10px] tracking-widest ${exp.status === "ACTIVE" ? "text-green-400 status-active" : "text-green-700"}`}
                        >
                          ● {exp.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="exp-vt text-4xl text-green-300 leading-none mb-1 [text-shadow:0_0_10px_rgba(74,222,128,0.2)]">
                        {exp.title}
                      </h3>
                      <p className="text-green-600 text-xs tracking-wider mb-5">
                        {exp.role}
                      </p>

                      {/* Desc */}
                      <div className="border-l border-green-800/50 pl-4 mb-5">
                        <p className="text-green-200/50 text-xs leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] text-green-600 border border-green-900/60 px-2 py-0.5 rounded tracking-wider hover:text-green-400 hover:border-green-700/60 transition-colors duration-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* End of timeline */}
            <div className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 flex-col items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-900" />
              <p className="text-green-800 text-[9px] tracking-widest whitespace-nowrap">
                &lt; EOF
              </p>
            </div>
          </div>

          <p className="text-green-800 text-xs mt-16">
            <span className="text-green-700">$</span> git log --all --oneline
          </p>
        </div>
      </section>
    </>
  );
}
