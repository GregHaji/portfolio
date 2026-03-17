"use client";

import { useEffect, useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGreensock,
  SiThreedotjs,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiJest,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiDocker,
  SiGithubactions,
  SiAmazons3,
} from "react-icons/si";
import { FaServer, FaDatabase, FaCloud, FaCode } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    id: "frontend()",
    icon: FaCode,
    prefix: "<div>",
    suffix: "</div>",
    content: [
      { label: "React", accent: true },
      { label: "Next.js", accent: true },
      { label: "Tailwind CSS", accent: true },
      { label: "GSAP", accent: true },
      { label: "Three.js", accent: true },
      { label: "MUI", accent: false },
    ],
    desc: "Building responsive, accessible interfaces with modern tooling. Motion and interaction handled with GSAP and Three.js.",
  },
  {
    id: "backend()",
    icon: FaServer,
    prefix: "try {",
    suffix: "} catch",
    content: [
      { label: "Node.js", accent: true },
      { label: "Express", accent: true },
      { label: "Jest", accent: false },
      { label: "Husky", accent: false },
      { label: "REST APIs", accent: true },
    ],
    desc: "Designing APIs and backend services. Enforcing code quality with Jest and Husky, maintaining secure communication.",
  },
  {
    id: "database()",
    icon: FaDatabase,
    prefix: "SELECT *",
    suffix: "FROM data",
    content: [
      { label: "PostgreSQL", accent: true },
      { label: "MySQL", accent: true },
      { label: "SQL Server", accent: false },
      { label: "MongoDB", accent: true },
      { label: "Firebase", accent: true },
    ],
    desc: "Experience with relational and NoSQL databases. Focused on performance, schema design, and reliability.",
  },
  {
    id: "deploy()",
    icon: FaCloud,
    prefix: "BUILDING",
    suffix: "BUILT ✓",
    content: [
      { label: "Vercel", accent: true },
      { label: "Netlify", accent: true },
      { label: "Docker", accent: true },
      { label: "GitHub Actions", accent: true },
      { label: "Amazon S3", accent: false },
    ],
    desc: "Deploying and scaling apps with Vercel and Netlify. Automating pipelines with Docker and GitHub Actions.",
  },
];

const allTools = [
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "GSAP", icon: <SiGreensock /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
  { name: "MUI", icon: <SiMui /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Netlify", icon: <SiNetlify /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
  { name: "Amazon S3", icon: <SiAmazons3 /> },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            delay: i * 0.1,
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
        .skills-mono { font-family: 'Share Tech Mono', monospace; }
        .skills-vt   { font-family: 'VT323', monospace; }
        @keyframes card-scan {
          0%   { background-position: 0 -100%; }
          100% { background-position: 0 200%; }
        }
        .module-card:hover::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(74,222,128,0.04) 50%, transparent 100%);
          background-size: 100% 50%;
          animation: card-scan 1.5s linear infinite;
          pointer-events: none;
          border-radius: inherit;
        }
        .marquee-icon { font-size: 2rem; color: rgba(74,222,128,0.4); transition: color 0.2s; }
        .marquee-icon:hover { color: rgba(74,222,128,0.9); }
      `}</style>

      <section
        id="my-skills"
        ref={sectionRef}
        className="skills-mono relative w-full bg-black py-28 px-6 sm:px-12 md:px-20 overflow-hidden"
      >
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-green-700 text-xs tracking-[0.3em] uppercase mb-4">
              {"// src/core/expertise.ts"}
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-green-700 text-xl">export const</span>
              <h2 className="skills-vt text-6xl md:text-7xl text-green-300 leading-none [text-shadow:0_0_20px_rgba(74,222,128,0.3)]">
                skills
              </h2>
              <span className="text-green-700 text-xl">= &#123;</span>
            </div>
          </div>

          {/* Module cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {modules.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.id}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="module-card relative border border-green-900/50 hover:border-green-600/60 bg-green-950/10 hover:bg-green-950/20 rounded-lg p-6 transition-all duration-300 overflow-hidden"
                >
                  {/* Card header */}
                  <div className="flex items-center gap-2.5 mb-5">
                    <Icon className="text-green-600 w-4 h-4" />
                    <span className="text-green-400 text-sm tracking-wide">
                      {mod.id}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4 ">
                    {mod.content.map((c) => (
                      <span
                        key={c.label}
                        className={`text-[10px] px-2 py-0.5 rounded border tracking-wider ${
                          c.accent
                            ? "text-green-300 border-green-700/60 bg-green-950/50"
                            : "text-green-700 border-green-900/60 bg-transparent"
                        }`}
                      >
                        {c.label}
                      </span>
                    ))}
                  </div>

                  {/* Prefix */}
                  <p className="text-green-700 text-xs mb-3 tracking-wider">
                    {mod.prefix}
                  </p>

                  {/* Tags */}

                  {/* Desc */}
                  <p className="text-green-200/40 text-xs leading-relaxed mb-4 pl-3 border-l border-green-800/50">
                    {mod.desc}
                  </p>

                  {/* Suffix */}
                  <p className="text-green-700 text-xs tracking-wider">
                    {mod.suffix}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-green-700 text-xs mt-6 ml-1">
            &#125;{" "}
            <span className="text-green-900">
              {"// tools continuously evolving"}
            </span>
          </p>

          {/* Marquee */}
          <div className="mt-16 border-l-4 border-r-4 border-green-800/50">
            <Slider
              dots={false}
              infinite
              arrows={false}
              speed={20000}
              slidesToShow={10}
              slidesToScroll={8}
              autoplay
              autoplaySpeed={0}
              cssEase="linear"
              responsive={[
                { breakpoint: 1024, settings: { slidesToShow: 6 } },
                { breakpoint: 768, settings: { slidesToShow: 4 } },
                { breakpoint: 480, settings: { slidesToShow: 4 } },
              ]}
            >
              {allTools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-center p-5"
                >
                  <span className="marquee-icon">{tool.icon}</span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
