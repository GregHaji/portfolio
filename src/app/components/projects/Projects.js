"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "./projects.data";

function ProjectCarousel({ images, title }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full aspect-video rounded overflow-hidden border border-white/[0.07] bg-white/[0.02] group/carousel select-none">
      {/* IMAGES */}
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
            className="object-cover"
          />
        </div>
      ))}

      {/* GRADIENT OVERLAY bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090e]/60 via-transparent to-transparent pointer-events-none" />

      {/* PREV / NEXT — only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-sm bg-[#08090e]/70 border border-white/10 text-white/50 hover:text-[#f5c800] hover:border-[#f5c800]/40 transition-all duration-200 opacity-0 group-hover/carousel:opacity-100"
          >
            <svg
              width="14"
              height="14"
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
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-sm bg-[#08090e]/70 border border-white/10 text-white/50 hover:text-[#f5c800] hover:border-[#f5c800]/40 transition-all duration-200 opacity-0 group-hover/carousel:opacity-100"
          >
            <svg
              width="14"
              height="14"
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

          {/* DOTS */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-200 rounded-full"
                style={{
                  width: i === current ? "18px" : "6px",
                  height: "6px",
                  background:
                    i === current ? "#f5c800" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>

          {/* COUNTER */}
          <div className="absolute top-3 right-3 text-[0.6rem] tracking-[0.14em] text-white/40 bg-[#08090e]/60 px-2 py-0.5 rounded-sm border border-white/[0.06]">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const list = Object.values(PROJECTS);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&display=swap');
        .font-syne   { font-family: 'Syne', sans-serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }

        .proj-ext-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(200,205,235,0.4);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 3px;
          padding: 0.5rem 1rem;
          transition: color 0.2s, border-color 0.2s;
        }
        .proj-ext-link:hover { color: #f5c800; border-color: rgba(245,200,0,0.35); }
        .proj-ext-link svg { transition: transform 0.2s; }
        .proj-ext-link:hover svg { transform: translate(2px,-2px); }
      `}</style>

      <section
        id="projects"
        className="font-outfit w-full bg-[#08090e] py-28 px-6 sm:px-12 md:px-20 border-b border-white/[0.06]"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* HEADER */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-7 h-0.5 bg-[#f5c800] rounded" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#f5c800] font-medium">
                Work
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
                Projects.
              </span>
            </h2>
          </div>

          {/* PROJECT ROWS */}
          <div className="flex flex-col gap-28">
            {list.map((proj, i) => {
              const flip = i % 2 !== 0;
              return (
                <div
                  key={proj.id}
                  className={`flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-14 items-center`}
                >
                  {/* CAROUSEL — 55% width */}
                  <div className="w-full md:w-[55%] shrink-0">
                    <ProjectCarousel images={proj.images} title={proj.title} />
                  </div>

                  {/* INFO — 45% width */}
                  <div className="w-full md:w-[45%] flex flex-col gap-5">
                    {/* INDEX + STATUS */}
                    <div className="flex items-center gap-4">
                      <span
                        className="font-syne font-extrabold text-5xl leading-none select-none"
                        style={{ color: "rgba(255,255,255,0.06)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[0.6rem] tracking-[0.18em] uppercase font-semibold px-2 py-0.5 rounded-sm border ${
                          proj.status === "LIVE"
                            ? "border-emerald-500/40 text-emerald-400/80 bg-emerald-500/[0.06]"
                            : "border-[#f5c800]/30 text-[#f5c800]/70 bg-[#f5c800]/[0.05]"
                        }`}
                      >
                        {proj.status === "LIVE" ? "● Live" : "◌ WIP"}
                      </span>
                      <span className="text-[0.63rem] tracking-[0.14em] text-white/20 ml-auto">
                        {proj.year}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="font-syne font-extrabold text-3xl md:text-4xl text-[#eceef8] tracking-tight leading-tight">
                      {proj.title}
                    </h3>

                    {/* ROLE */}
                    <p className="text-[0.68rem] tracking-[0.18em] uppercase text-white/30 font-medium -mt-1">
                      {proj.role}
                    </p>

                    {/* DIVIDER */}
                    <div className="h-px bg-white/[0.06]" />

                    {/* DESCRIPTION */}
                    <p className="text-[0.92rem] font-light text-white/45 leading-relaxed">
                      {proj.description}
                    </p>

                    {/* STACK TAGS */}
                    <div className="flex flex-wrap gap-2 mt-1">
                      {proj.stack.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.63rem] tracking-[0.1em] uppercase px-3 py-1 border border-white/10 rounded-sm text-white/35 bg-white/[0.02]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* LINKS */}
                    <div className="flex gap-3 flex-wrap mt-2">
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="proj-ext-link"
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
                        className="proj-ext-link"
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
        </div>
      </section>
    </>
  );
}
