"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceTimeline() {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const experiences = [
    {
      title: "Studied at Eduvos",
      role: "BSc Software Engineering",
      duration: "2020 — 2022",
      description:
        "Graduated cum laude with a strong academic foundation in object-oriented programming, data structures, and algorithms, complemented by hands-on experience developing React web applications and a cross-platform Flutter application using Firebase and MySQL for backend services.",
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
      title: "Intern at Curo Pumps",
      role: "Software Engineering Intern",
      duration: "2022 — 2024",
      description:
        "Built a full-stack, production-ready pump selection and quotation system that performs complex hydraulic calculations (flow, head, efficiency, and performance curves), validates viable pump configurations in real time, and generates professional quotations. The application uses Next.js and TailwindCSS on the frontend, a Node.js/Express API with MongoDB for data persistence, and Auth0 for secure authentication and access control.",
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
      title: "Junior Developer at Metavaro",
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

  useEffect(() => {
    // Boot text typing
    const text = titleRef.current;
    const chars = text.innerText.split("");
    text.innerHTML = "";
    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = 0;
      text.appendChild(span);
    });

    gsap.to(text.children, {
      opacity: 1,
      stagger: 0.04,
      duration: 0.01,
      ease: "none",
    });

    // Scroll reveal cards
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        },
      );
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-neutral-900 text-gray-100 py-24 px-6 overflow-hidden">
      {/* BOOT INTRO */}
      <div className="font-mono text-green-400 text-center mb-20 tracking-widest">
        <p className="text-sm mb-2">INITIALIZING EXPERIENCE.LOG</p>
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold">
          &gt; career.timeline()
        </h2>
      </div>

      {/* CENTER LINE (desktop only) */}
      <div className="hidden md:block absolute left-1/2 top-52 w-px h-[70%] bg-green-400/40" />

      {/* TIMELINE */}
      <div className="flex flex-col gap-20">
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`flex w-full ${
              exp.side === "left" ? "md:justify-start" : "md:justify-end"
            } justify-center`}
          >
            <div className="relative w-full md:w-[48%]">
              {/* CARD */}
              <div
                className="bg-neutral-800/80 border border-green-400/40 rounded-xl p-8
                           shadow-lg transition-all duration-300
                           hover:border-green-400 hover:shadow-green-500/30 hover:shadow-2xl"
              >
                <h3 className="text-green-300 text-xl font-bold mb-1">
                  {exp.title}
                </h3>
                <h4 className="text-gray-200 font-semibold">{exp.role}</h4>
                <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* TOOLS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono text-green-300
                                 border border-green-400/60 rounded-full
                                 bg-green-400/5 hover:bg-green-400/10
                                 transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* NODE */}
              <div className="hidden md:block absolute top-10 -right-[30px] w-4 h-4 bg-green-400 rounded-full border-4 border-neutral-900" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
