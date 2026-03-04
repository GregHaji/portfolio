"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faUsers,
  faLightbulb,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

const traits = [
  {
    icon: faBrain,
    label: "Fast Learner",
    body: "Quickly adapts to new technologies, frameworks, and patterns. Comfortable learning on the fly and applying knowledge immediately.",
  },
  {
    icon: faUsers,
    label: "Team Player",
    body: "Collaborates effectively across teams, communicates clearly, and values shared ownership of solutions.",
  },
  {
    icon: faLightbulb,
    label: "Problem Solver",
    body: "Enjoys breaking down complex problems into clean, maintainable solutions using logic and creativity.",
  },
  {
    icon: faFire,
    label: "Passionate & Curious",
    body: "Driven by curiosity and a genuine love for technology. Constantly exploring new ideas and improving craft.",
  },
];

const stats = [
  { value: "12+", label: "Projects Completed" },
  { value: "130+", label: "Commits in 2025" },
  { value: "3+", label: "Years Experience" },
];

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&display=swap');
        .font-syne   { font-family: 'Syne', sans-serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

      <section
        id="about-me"
        className="font-outfit w-full bg-[#08090e] py-28 px-6 sm:px-12 md:px-20 border-b border-white/[0.06]"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 md:gap-20">
          {/* ── LEFT: TRAITS ── */}
          <div className="md:w-1/2 flex flex-col gap-8">
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
              <span className="block w-7 h-0.5 bg-[#f5c800] rounded" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#f5c800] font-medium">
                What I Bring
              </span>
            </div>

            <div className="flex flex-col gap-7">
              {traits.map((t) => (
                <div key={t.label} className="flex items-start gap-5 group">
                  {/* ICON */}
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-sm border border-white/10 bg-white/[0.03] text-[#f5c800] group-hover:border-[#f5c800]/40 transition-colors duration-200">
                    <FontAwesomeIcon icon={t.icon} className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-[0.85rem] font-semibold tracking-wide text-[#eceef8] mb-1">
                      {t.label}
                    </h3>
                    <p className="text-[0.88rem] font-light text-white/40 leading-relaxed">
                      {t.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: BIO ── */}
          <div className="md:w-1/2 flex flex-col justify-center">
            {/* EYEBROW */}
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-7 h-0.5 bg-[#f5c800] rounded" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#f5c800] font-medium">
                About Me
              </span>
            </div>

            <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight text-[#eceef8] mb-8 leading-[0.95]">
              Greg
              <br />
              <span
                style={{
                  WebkitTextStroke: "2px #f5c800",
                  color: "transparent",
                }}
              >
                Haji.
              </span>
            </h2>

            <p className="text-[0.98rem] font-light text-white/40 leading-relaxed mb-4">
              My journey into technology started early — as a curious kid
              dismantling computers to understand how they worked. At the age of
              7, I built my first PC, and that curiosity quickly became a
              lifelong passion.
            </p>
            <p className="text-[0.98rem] font-light text-white/40 leading-relaxed mb-12">
              Today, I&apos;m a full stack developer with 3+ years of experience
              collaborating across teams and projects. I still approach
              development the same way I did back then: experimenting, learning,
              and constantly pushing myself to build better, more thoughtful
              solutions.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-10 pt-8 border-t border-white/[0.07]">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-syne font-extrabold text-4xl text-[#f5c800]">
                    {s.value}
                  </p>
                  <p className="text-[0.7rem] tracking-[0.14em] uppercase text-white/35 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
