"use client";

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

const categories = [
  {
    icon: FaCode,
    label: "Frontend",
    body: (
      <>
        Building responsive, accessible interfaces with <b>React</b>,{" "}
        <b>Next.js</b>, and <b>Tailwind CSS</b>. Motion and interaction handled
        with <b>GSAP</b> and <b>Three.js</b>. Component libraries include{" "}
        <b>MUI</b> and Bootstrap.
      </>
    ),
  },
  {
    icon: FaServer,
    label: "Backend",
    body: (
      <>
        Designing APIs and backend services using <b>Node.js</b> and{" "}
        <b>Express</b>. Enforcing code quality with <b>Jest</b> and <b>Husky</b>
        , while maintaining secure communication and predictable behavior.
      </>
    ),
  },
  {
    icon: FaDatabase,
    label: "Database",
    body: (
      <>
        Experience with relational and NoSQL databases including{" "}
        <b>PostgreSQL</b>, <b>MySQL</b>, <b>SQL Server</b>, <b>MongoDB</b>, and{" "}
        <b>Firebase</b>. Focused on performance, schema design, and reliability.
      </>
    ),
  },
  {
    icon: FaCloud,
    label: "DevOps & Cloud",
    body: (
      <>
        Deploying and scaling applications with <b>Vercel</b> and <b>Netlify</b>
        . Automating pipelines using <b>Docker</b> and <b>GitHub Actions</b>.
        Cloud storage via <b>Amazon S3</b>.
      </>
    ),
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

export default function ExpertiseSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&display=swap');
        .font-syne   { font-family: 'Syne', sans-serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
        .skill-card b { color: rgba(245,200,0,0.8); font-weight: 500; }
      `}</style>

      <section
        id="my-skills"
        className="font-outfit w-full bg-[#08090e] py-28 px-6 sm:px-12 md:px-20 border-b border-white/[0.06] overflow-hidden"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* HEADER */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-7 h-0.5 bg-[#f5c800] rounded" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#f5c800] font-medium">
                Expertise
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight text-[#eceef8] leading-[0.95]">
              My
              <br />
              <span
                style={{
                  WebkitTextStroke: "2px #f5c800",
                  color: "transparent",
                }}
              >
                Skills.
              </span>
            </h2>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {categories.map(({ icon: Icon, label, body }) => (
              <div
                key={label}
                className="skill-card group rounded border border-white/[0.07] bg-white/[0.02] p-7 flex flex-col gap-5 hover:border-[#f5c800]/30 transition-colors duration-300"
              >
                {/* ICON + LABEL */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-sm border border-white/10 bg-white/[0.03] text-[#f5c800] group-hover:border-[#f5c800]/40 transition-colors duration-200">
                    <Icon className="text-sm" />
                  </div>
                  <h3 className="font-syne font-bold text-base text-[#eceef8] tracking-tight">
                    {label}
                  </h3>
                </div>

                {/* DIVIDER */}
                <div className="h-px bg-white/[0.06]" />

                {/* BODY */}
                <p className="text-[0.85rem] font-light text-white/40 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* MARQUEE */}
          <div className="border-t border-b border-white/[0.06] py-6">
            <Slider
              dots={false}
              infinite
              arrows={false}
              speed={18000}
              slidesToShow={10}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={0}
              cssEase="linear"
              responsive={[
                { breakpoint: 1024, settings: { slidesToShow: 7 } },
                { breakpoint: 768, settings: { slidesToShow: 5 } },
                { breakpoint: 480, settings: { slidesToShow: 4 } },
              ]}
            >
              {allTools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center justify-center gap-2 px-4 py-3 opacity-30 hover:opacity-80 transition-opacity duration-200 cursor-default select-none"
                >
                  <span className="text-white text-3xl">{tool.icon}</span>
                  <span className="text-[0.6rem] tracking-[0.12em] uppercase text-white/50">
                    {tool.name}
                  </span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
