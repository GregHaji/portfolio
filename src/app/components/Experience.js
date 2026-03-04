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

export default function ExperienceTimeline() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%", once: true },
        },
      );
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&display=swap');
        .font-syne   { font-family: 'Syne', sans-serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

      <section
        id="experience"
        className="font-outfit relative w-full bg-[#08090e] py-28 px-6 sm:px-12 md:px-20 border-b border-white/[0.06] overflow-hidden"
      >
        {/* SECTION HEADER */}
        <div className="max-w-[1200px] mx-auto mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-7 h-0.5 bg-[#f5c800] rounded" />
            <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#f5c800] font-medium">
              Career
            </span>
          </div>
          <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight text-[#eceef8] leading-[0.95]">
            Experience
            <br />
            <span
              style={{ WebkitTextStroke: "2px #f5c800", color: "transparent" }}
            >
              Timeline.
            </span>
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="max-w-[1200px] mx-auto relative">
          {/* CENTER LINE */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/[0.07]" />

          <div className="flex flex-col gap-14">
            {experiences.map((exp, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className={`flex w-full ${exp.side === "right" ? "md:justify-end" : "md:justify-start"} justify-center`}
              >
                <div className="relative w-full md:w-[47%]">
                  {/* TIMELINE NODE */}
                  <div
                    className={`hidden md:block absolute top-8 w-3 h-3 rounded-full bg-[#f5c800] border-4 border-[#08090e] shadow-[0_0_10px_#f5c800] z-10 ${exp.side === "right" ? "-left-[30px]" : "-right-[30px]"}`}
                  />

                  {/* CARD */}
                  <div className="group rounded border border-white/[0.07] bg-white/[0.02] p-8 hover:border-[#f5c800]/30 transition-colors duration-300">
                    {/* DURATION */}
                    <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#f5c800]/70 font-medium mb-3 block">
                      {exp.duration}
                    </span>

                    <h3 className="font-syne font-bold text-xl text-[#eceef8] mb-0.5">
                      {exp.title}
                    </h3>
                    <h4 className="text-[0.85rem] text-white/40 font-light mb-5">
                      {exp.role}
                    </h4>

                    <p className="text-[0.9rem] font-light text-white/40 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* TOOLS */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[0.65rem] tracking-[0.1em] uppercase px-3 py-1 border border-white/10 rounded-sm text-white/40 bg-white/[0.03] hover:border-[#f5c800]/30 hover:text-[#f5c800]/70 transition-colors duration-200"
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
        </div>
      </section>
    </>
  );
}
