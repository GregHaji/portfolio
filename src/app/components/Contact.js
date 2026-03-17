"use client";

import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/gregory-haji-joannou-885553216/",
    label: "LinkedIn",
  },
  { icon: FaGithub, href: "https://github.com/GregHaji", label: "GitHub" },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/greg_haji/",
    label: "Instagram",
  },
];

export default function Contact() {
  const [status, setStatus] = useState("");
  const [focused, setFocused] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        console.error(data.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const inputClass = (name) => `
    w-full bg-transparent border rounded px-4 py-3 text-xs text-green-200/80
    placeholder:text-green-900 outline-none transition-all duration-200
    font-[inherit] tracking-wide
    ${
      focused === name
        ? "border-green-500/60 shadow-[0_0_12px_rgba(74,222,128,0.08)]"
        : "border-green-900/50 hover:border-green-800/60"
    }
  `;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=VT323&display=swap');
        .contact-mono { font-family: 'Share Tech Mono', monospace; }
        .contact-vt   { font-family: 'VT323', monospace; }
        @keyframes cursor-blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cursor { animation: cursor-blink 1s step-end infinite; }
        @keyframes send-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(74,222,128,0.4); }
          70%  { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
          100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
        }
        .btn-send:not(:disabled):hover { animation: send-pulse 0.6s ease-out; }
      `}</style>

      <section
        id="contact"
        className="contact-mono relative w-full bg-black py-28 px-6 sm:px-12 md:px-20 overflow-hidden"
      >
        {/* Grid bg */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_80%,rgba(0,30,10,0.4),transparent)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-green-700 text-xs tracking-[0.3em] uppercase mb-4">
              {"// src/contact/index.ts"}
            </p>
            <div className="flex items-baseline gap-3">
              <h2 className="contact-vt text-6xl md:text-7xl text-green-300 leading-none [text-shadow:0_0_20px_rgba(74,222,128,0.3)]">
                Let&apos;s_Build
              </h2>
              <span className="contact-vt text-5xl text-green-700 leading-none">
                ();
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-14 md:gap-20">
            {/* Form */}
            <div className="flex-1">
              {/* Prompt description */}
              <div className="border-l-2 border-green-800/60 pl-4 mb-10">
                <p className="text-green-200/50 text-xs leading-relaxed">
                  Have a project, idea, or just want to say hi?
                  <br />
                  Send a message below and I&apos;ll get back to you ASAP.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {/* Fake file comment above name */}
                <p className="text-green-800 text-[10px] tracking-wider -mb-1">
                  {" // required fields"}
                </p>

                <div className="relative">
                  <span className="absolute left-4 top-3 text-green-700 text-[10px] pointer-events-none">
                    name:
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder='"Your name"'
                    className={`${inputClass("name")} pl-16`}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    required
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-3 text-green-700 text-[10px] pointer-events-none">
                    email:
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder='"your@email.com"'
                    className={`${inputClass("email")} pl-16`}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    required
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-3 text-green-700 text-[10px] pointer-events-none">
                    msg:
                  </span>
                  <textarea
                    rows={5}
                    name="message"
                    placeholder='"Your message..."'
                    className={`${inputClass("message")} pl-16 resize-none`}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    required
                  />
                </div>

                <div className="flex items-center gap-5 mt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-send group flex items-center gap-2 text-[10px] tracking-widest uppercase text-black bg-green-400 hover:bg-green-300 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2.5 rounded transition-all duration-200 font-semibold"
                  >
                    <span>
                      {status === "sending"
                        ? "Sending..."
                        : status === "success"
                          ? "Sent ✓"
                          : status === "error"
                            ? "Retry"
                            : "$ send --message"}
                    </span>
                  </button>

                  {status === "success" && (
                    <span className="text-green-400 text-[10px] tracking-wider">
                      ✔ Message delivered
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-red-400/80 text-[10px] tracking-wider">
                      ✖ Error — try again
                    </span>
                  )}
                </div>
              </form>
            </div>

            {/* Socials + info */}
            <div className="flex flex-col gap-6 md:min-w-[200px]">
              <p className="text-green-700 text-[10px] tracking-widest uppercase mb-2">
                {"// find me on"}
              </p>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-green-700 hover:text-green-300 transition-colors duration-200"
                >
                  <div className="w-9 h-9 flex items-center justify-center border border-green-900/60 group-hover:border-green-600/60 group-hover:bg-green-950/30 rounded transition-all duration-200">
                    <Icon className="text-sm" />
                  </div>

                  <span className="text-[10px] tracking-widest uppercase">
                    {label}
                  </span>

                  <span className="text-green-900 group-hover:text-green-700 transition-colors ml-auto">
                    →
                  </span>
                </a>
              ))}

              {/* Terminal status block */}
              <div className="mt-6 border border-green-900/40 bg-green-950/10 rounded p-4 space-y-1">
                <p className="text-green-700 text-[9px] tracking-widest">
                  {"// status"}
                </p>
                <p className="text-green-400 text-[10px] tracking-wider">
                  <span className="text-green-700 mr-2">▸</span>
                  available_for_work:{" "}
                  <span className="text-green-300">true</span>
                </p>
                <p className="text-green-400 text-[10px] tracking-wider">
                  <span className="text-green-700 mr-2">▸</span>
                  location:{" "}
                  <span className="text-green-300">&quot;JHB, ZA&quot;</span>
                </p>
                <p className="text-green-400 text-[10px] tracking-wider">
                  <span className="text-green-700 mr-2">▸</span>
                  response_time:{" "}
                  <span className="text-green-300">&quot;24h&quot;</span>
                </p>
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="mt-20 pt-6 border-t border-green-900/40 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="contact-vt text-2xl text-green-400 [text-shadow:0_0_10px_rgba(74,222,128,0.5)]">
                GH
              </span>
              <span className="contact-vt text-2xl text-green-700">.</span>
              <span className="w-1.5 h-3.5 bg-green-700 cursor inline-block ml-1" />
            </div>
            <span className="text-green-800 text-[10px] tracking-widest">
              © {new Date().getFullYear()} Greg Haji — All rights reserved
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
