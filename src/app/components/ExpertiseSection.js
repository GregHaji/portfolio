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
  SiHusky,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiMicrosoftsqlserver,
  SiVercel,
  SiNetlify,
  SiDocker,
  SiGithubactions,
  SiAmazons3,
  SiCors,
} from "react-icons/si";
import { FaServer, FaDatabase, FaCloud, FaCode } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExpertiseSection() {
  const allTools = [
    { name: "React", icon: <SiReact className="text-white text-5xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-5xl" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-white text-5xl" />,
    },
    { name: "GSAP", icon: <SiGreensock className="text-white text-5xl" /> },
    {
      name: "Three.js",
      icon: <SiThreedotjs className="text-white text-5xl" />,
    },
    { name: "MUI", icon: <SiMui className="text-white text-5xl" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-white text-5xl" /> },
    { name: "Express", icon: <SiExpress className="text-white text-5xl" /> },
    { name: "Jest", icon: <SiJest className="text-white text-5xl" /> },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-white text-5xl" />,
    },
    { name: "MySQL", icon: <SiMysql className="text-white text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-white text-5xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-white text-5xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-white text-5xl" /> },
    { name: "Netlify", icon: <SiNetlify className="text-white text-5xl" /> },
    { name: "Docker", icon: <SiDocker className="text-white text-5xl" /> },
    {
      name: "GitHub Actions",
      icon: <SiGithubactions className="text-white text-5xl" />,
    },
    { name: "Amazon S3", icon: <SiAmazons3 className="text-white text-5xl" /> },
  ];

  // refs for typing animation
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const dbRef = useRef(null);
  const cloudRef = useRef(null);

  useEffect(() => {
    const sections = [frontendRef, backendRef, dbRef, cloudRef];

    sections.forEach((ref, index) => {
      const el = ref.current;
      if (!el) return;

      const text = el.innerHTML;
      el.innerHTML = "";

      const temp = document.createElement("div");
      temp.innerHTML = text;

      const chars = [];
      temp.childNodes.forEach((node) => {
        if (node.nodeType === 3) {
          node.textContent.split("").forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            chars.push(span);
          });
        } else if (node.nodeType === 1) {
          const inner = node.textContent.split("");
          inner.forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.className = node.className;
            chars.push(span);
          });
        }
      });

      chars.forEach((c) => el.appendChild(c));

      gsap.set(chars, { opacity: 0 });
      gsap.to(chars, {
        opacity: 1,
        stagger: 0.02,
        duration: 0.01,
        ease: "none",
        delay: index * 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 20%",
          once: true, // <-- triggers only once
          markers: false,
        },
      });
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-neutral-900 to-black text-white flex flex-col items-center justify-center px-6 md:px-10 py-24 font-mono">
      <div className=" flex flex-col items-center justify-center px-10 py-24 font-mono">
        {/* HEADER */}
        <div className="mb-20 text-center">
          <p className="text-green-400 text-sm mb-3">/src/core/expertise.ts</p>
          <h2 className="text-5xl font-bold">
            export const <span className="text-green-400">skills</span>
          </h2>
        </div>

        {/* MODULE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full max-w-9xl">
          {/* FRONTEND */}
          <div className="border border-green-400/20 bg-black/40 rounded-xl p-8 hover:border-green-400 transition-all">
            <div className="flex items-center gap-3 mb-4 text-green-300">
              <FaCode className="w-6 h-6" />
              <h3 className="text-xl font-semibold">frontend()</h3>
            </div>

            <div className="bg-black/60 p-4 rounded-lg text-sm text-green-200 border border-green-400/20">
              <p className="text-green-400 mb-2">{"<div>"}</p>
              <p
                ref={frontendRef}
                className="ml-4 border-l border-green-400/40 pl-4 py-3"
              >
                Building responsive, accessible interfaces with{" "}
                <span className="text-green-400">React</span>,{" "}
                <span className="text-green-400">Next.js</span>, and{" "}
                <span className="text-green-400">Tailwind CSS</span>. Motion and
                interaction handled with{" "}
                <span className="text-green-400">GSAP</span> and{" "}
                <span className="text-green-400">Three.js</span>. Component
                libraries include <span className="text-green-400">MUI</span>{" "}
                and Bootstrap.
              </p>
              <p className="text-green-400 mt-2">{"</div>"}</p>
            </div>
          </div>

          {/* BACKEND */}
          <div className="border border-green-400/20 bg-black/40 rounded-xl p-8 hover:border-green-400 transition-all">
            <div className="flex items-center gap-3 mb-4 text-green-300">
              <FaServer className="w-6 h-6" />
              <h3 className="text-xl font-semibold">backend()</h3>
            </div>

            <div className="bg-black/60 p-4 rounded-lg text-sm text-green-200 border border-green-400/20">
              <p className="text-green-400 mb-2">try &#123;</p>
              <p
                ref={backendRef}
                className="ml-4 border-l border-green-400/40 pl-4 py-3"
              >
                Designing APIs and backend services using{" "}
                <span className="text-green-300">Node.js</span> and{" "}
                <span className="text-green-300">Express</span>. Enforcing code
                quality with <span className="text-green-300">Jest</span> and{" "}
                <span className="text-green-300">Husky</span>, while maintaining
                secure communication and predictable behavior.
              </p>
              <p className="text-green-400 mt-2">&#125; catch</p>
            </div>
          </div>

          {/* DATABASE */}
          <div className="border border-green-400/20 bg-black/40 rounded-xl p-8 hover:border-green-400 transition-all">
            <div className="flex items-center gap-3 mb-4 text-green-300">
              <FaDatabase className="w-6 h-6" />
              <h3 className="text-xl font-semibold">database()</h3>
            </div>

            <div className="bg-black/60 p-4 rounded-lg text-sm text-green-200 border border-green-400/20">
              <p className="text-green-400 mb-2">SELECT *</p>
              <p
                ref={dbRef}
                className="ml-4 border-l border-green-400/40 pl-4 py-3"
              >
                Experience with relational and NoSQL databases including{" "}
                <span className="text-green-300">PostgreSQL</span>,{" "}
                <span className="text-green-300">MySQL</span>,{" "}
                <span className="text-green-300">SQL Server</span>,{" "}
                <span className="text-green-300">MongoDB</span>, and{" "}
                <span className="text-green-300">Firebase</span>. Focused on
                performance, schema design, and reliability.
              </p>
              <p className="text-green-400 mt-2">FROM data</p>
            </div>
          </div>

          {/* CLOUD */}
          <div className="border border-green-400/20 bg-black/40 rounded-xl p-8 hover:border-green-400 transition-all">
            <div className="flex items-center gap-3 mb-4 text-green-300">
              <FaCloud className="w-6 h-6" />
              <h3 className="text-xl font-semibold">deploy()</h3>
            </div>

            <div className="bg-black/60 p-4 rounded-lg text-sm text-green-200 border border-green-400/20">
              <p className="text-green-400 mb-2">BUILDING</p>
              <p
                ref={cloudRef}
                className="ml-4 border-l border-green-400/40 pl-4 py-3"
              >
                Deploying and scaling applications with{" "}
                <span className="text-green-300">Vercel</span> and{" "}
                <span className="text-green-300">Netlify</span>. Automating
                pipelines using <span className="text-green-300">Docker</span>{" "}
                and <span className="text-green-300">GitHub Actions</span>.
                Cloud storage via{" "}
                <span className="text-green-300">Amazon S3</span>.
              </p>
              <p className="text-green-400 mt-2">BUILT</p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-20 text-green-400/50 text-xs">
          {"// tools continuously evolving"}
        </div>

        {/* TOOL MARQUEE */}
        <div className="mt-14 w-full max-w-7xl border-r-8 border-l-8 border-green-300/60">
          <Slider
            dots={false}
            infinite
            arrows={false}
            speed={20000}
            slidesToShow={12}
            slidesToScroll={10}
            autoplay
            autoplaySpeed={0}
            cssEase="linear"
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 6 } },
              { breakpoint: 768, settings: { slidesToShow: 4 } },
              { breakpoint: 480, settings: { slidesToShow: 5 } },
            ]}
          >
            {allTools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center justify-center p-6 opacity-60 hover:opacity-100 transition"
              >
                {tool.icon}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
