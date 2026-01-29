"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faUsers,
  faLightbulb,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row gap-24 px-12 md:px-28 py-24 bg-neutral-900 text-gray-100">
      {/* LEFT: TRAITS / ANNOTATIONS */}
      <div className="md:w-1/2 border border-green-400/30 rounded-lg p-10 bg-black/30 font-mono space-y-12">
        <div className="text-green-400 text-sm mb-6">
          {/* fake file header */}/ src/profile/traits.ts
        </div>

        {/* Fast Learner */}
        <div className="flex items-start gap-6">
          <div className="text-green-400 text-3xl mt-1">
            <FontAwesomeIcon icon={faBrain} />
          </div>
          <div>
            <h3 className="text-green-300 font-semibold">fastLearner: true</h3>
            <p className="text-green-200/80 mt-1 text-sm leading-relaxed">
              Quickly adapts to new technologies, frameworks, and patterns.
              Comfortable learning on the fly and applying knowledge
              immediately.
            </p>
          </div>
        </div>

        {/* Team Player */}
        <div className="flex items-start gap-6">
          <div className="text-green-400 text-3xl mt-1">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div>
            <h3 className="text-green-300 font-semibold">teamPlayer: true</h3>
            <p className="text-green-200/80 mt-1 text-sm leading-relaxed">
              Collaborates effectively across teams, communicates clearly, and
              values shared ownership of solutions.
            </p>
          </div>
        </div>

        {/* Problem Solver */}
        <div className="flex items-start gap-6">
          <div className="text-green-400 text-3xl mt-1">
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <div>
            <h3 className="text-green-300 font-semibold">
              problemSolver: true
            </h3>
            <p className="text-green-200/80 mt-1 text-sm leading-relaxed">
              Enjoys breaking down complex problems into clean, maintainable
              solutions using logic and creativity.
            </p>
          </div>
        </div>

        {/* Passionate & Curious */}
        <div className="flex items-start gap-6">
          <div className="text-green-400 text-3xl mt-1">
            <FontAwesomeIcon icon={faFire} />
          </div>
          <div>
            <h3 className="text-green-300 font-semibold">
              passionateAndCurious: true
            </h3>
            <p className="text-green-200/80 mt-1 text-sm leading-relaxed">
              Driven by curiosity and a genuine love for technology. Constantly
              exploring new ideas and improving craft.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT: README / ABOUT */}
      <div className="md:w-1/2 font-mono">
        <div className="mb-6 text-green-400 text-sm">
          {/* README.md */}# About Me
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-green-300 mb-6">
          Greg Haji
        </h1>

        <p className="text-green-200/80 leading-relaxed text-base md:text-lg max-w-3xl mb-10">
          My journey into technology started early — as a curious kid
          dismantling computers to understand how they worked. At the age of 7,
          I built my first PC, and that curiosity quickly became a lifelong
          passion.
          <br />
          <br />
          Today, I’m a full stack developer with three years of experience
          collaborating across teams and projects. I still approach development
          the same way I did back then: experimenting, learning, and constantly
          pushing myself to build better, more thoughtful solutions.
        </p>

        {/* STATS */}
        <div className="flex flex-wrap gap-14">
          <div>
            <h2 className="text-3xl font-bold text-green-300">
              12<span className="text-green-400">+</span>
            </h2>
            <p className="text-xs text-green-200/70">completedProjects</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-green-300">
              130<span className="text-green-400">+</span>
            </h2>
            <p className="text-xs text-green-200/70">commitsIn2025</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-green-300">
              3<span className="text-green-400">+</span>
            </h2>
            <p className="text-xs text-green-200/70">yearsExperience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
