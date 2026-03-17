"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { PROJECTS } from "./projects.data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectCarousel({ images, title }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full aspect-video rounded overflow-hidden border border-green-900/50 bg-black group/carousel select-none">
      {/* Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: i === current ? 1 : 0,
            pointerEvents: i === current ? "auto" : "none",
          }}
        >
          <Image
            src={img}
            alt={`${title} screenshot ${i + 1}`}
            fill
            className="object-cover "
          />
        </div>
      ))}

      {/* Scanline overlay */}

      {/* Corner brackets */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-green-500/60" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-green-500/60" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-green-500/60" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-green-500/60" />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center border border-green-800/60 bg-black/70 text-green-600 hover:text-green-300 hover:border-green-500/60 transition-all duration-200 opacity-0 group-hover/carousel:opacity-100 rounded"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center border border-green-800/60 bg-black/70 text-green-600 hover:text-green-300 hover:border-green-500/60 transition-all duration-200 opacity-0 group-hover/carousel:opacity-100 rounded"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === current ? "16px" : "5px",
                  height: "5px",
                  background:
                    i === current
                      ? "rgba(74,222,128,0.9)"
                      : "rgba(74,222,128,0.25)",
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-3 right-10 text-[9px] tracking-widest text-green-700 bg-black/70 px-2 py-0.5 rounded border border-green-900/50 font-mono">
            {current + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const list = Object.values(PROJECTS);
  const rowRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        const fromLeft = i % 2 === 0;
        gsap.fromTo(
          row,
          { opacity: 0, x: fromLeft ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 85%", once: true },
          },
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=VT323&display=swap');
        .proj-mono { font-family: 'Share Tech Mono', monospace; }
        .proj-vt   { font-family: 'VT323', monospace; }
        @keyframes status-pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .live-pulse { animation: status-pulse 2s ease-in-out infinite; }
      `}</style>

      <section
        id="projects"
        className="proj-mono relative w-full bg-black py-28 px-6 sm:px-12 md:px-20 overflow-hidden"
      >
        {/* Grid bg */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <p className="text-green-700 text-xs tracking-[0.3em] uppercase mb-4">
              {"// src/work/projects.ts"}
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-green-700 text-xl">const</span>
              <h2 className="proj-vt text-6xl md:text-7xl text-green-300 leading-none [text-shadow:0_0_20px_rgba(74,222,128,0.3)]">
                projects
              </h2>
              <span className="text-green-700 text-xl">= [</span>
            </div>
          </div>

          {/* Project rows */}
          <div className="flex flex-col gap-24">
            {list.map((proj, i) => {
              const flip = i % 2 !== 0;
              return (
                <div
                  key={proj.id}
                  ref={(el) => (rowRefs.current[i] = el)}
                  className={`flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-14 items-center`}
                >
                  {/* Carousel */}
                  <div className="w-full md:w-[55%] shrink-0">
                    <ProjectCarousel images={proj.images} title={proj.title} />
                  </div>

                  {/* Info */}
                  <div className="w-full md:w-[45%] flex flex-col gap-4">
                    {/* Index + status */}
                    <div className="flex items-center gap-3">
                      <span className="proj-vt text-5xl text-green-900 leading-none select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[9px] tracking-widest uppercase px-2 py-0.5 rounded border font-medium ${
                          proj.status === "LIVE"
                            ? "border-green-600/50 text-green-400 bg-green-950/40"
                            : "border-green-900/50 text-green-700 bg-transparent"
                        }`}
                      >
                        <span
                          className={
                            proj.status === "LIVE"
                              ? "live-pulse inline-block mr-1"
                              : "mr-1"
                          }
                        >
                          ●
                        </span>
                        {proj.status === "LIVE" ? "Live" : "WIP"}
                      </span>
                      <span className="text-green-800 text-[10px] tracking-widest ml-auto">
                        {proj.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="proj-vt text-4xl md:text-5xl text-green-300 leading-none [text-shadow:0_0_12px_rgba(74,222,128,0.2)]">
                      {proj.title}
                    </h3>

                    {/* Role */}
                    <p className="text-green-700 text-[10px] tracking-widest uppercase -mt-1">
                      {proj.role}
                    </p>

                    <div className="h-px bg-green-900/40" />

                    {/* Description */}
                    <div className="border-l border-green-800/50 pl-4">
                      <p className="text-green-200/50 text-xs leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.stack.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] tracking-wider uppercase px-2 py-0.5 border border-green-900/60 text-green-700 hover:text-green-400 hover:border-green-700/60 rounded transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 flex-wrap mt-1">
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 text-[10px] tracking-widest uppercase text-green-600 border border-green-900/60 hover:border-green-600/60 hover:text-green-300 px-3 py-1.5 rounded transition-all duration-200"
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          Live Demo
                        </a>
                      )}

                      <a
                        href="https://github.com/GregHaji"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-[10px] tracking-widest uppercase text-green-600 border border-green-900/60 hover:border-green-600/60 hover:text-green-300 px-3 py-1.5 rounded transition-all duration-200"
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-green-800 text-xs mt-16">]</p>
        </div>
      </section>
    </>
  );
}
