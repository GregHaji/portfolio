"use client";
import { useState } from "react";
import TerminalModal from "./TerminalModal";

export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="projects"
      className="min-h-screen bg-linear-to-bl from-neutral-900 via-neutral-950 to-neutral-950 text-green-400 px-6 py-28 text-center font-mono border-t border-emerald-700"
    >
      <h2 className="text-4xl md:text-5xl mb-8">
        <span className="text-green-500">&gt;</span> projects.exe
      </h2>

      <p className="text-green-300/70 mb-12">
        Interactive terminal interface — type commands to explore.
      </p>

      <button
        onClick={() => setOpen(true)}
        className="px-8 py-4 border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-black transition-all shadow-lg shadow-green-500/30"
      >
        OPEN TERMINAL
      </button>

      {open && <TerminalModal onClose={() => setOpen(false)} />}
    </section>
  );
}
