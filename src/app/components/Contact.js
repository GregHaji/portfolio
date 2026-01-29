"use client";

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black text-green-400 py-24 px-6 overflow-hidden"
    >
      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,255,0,0.04)_1px,transparent_1px)] bg-[length:100%_3px]" />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* LEFT – TERMINAL */}
        <div className="w-full md:w-5/6 border border-green-500/50 rounded-xl shadow-[0_0_30px_rgba(0,255,120,0.15)] bg-neutral-950">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b rounded-t-xl border-green-500/30 bg-neutral-900 text-xs">
            <span>contact.exe</span>
            <span className="text-green-500 animate-pulse">● ONLINE</span>
          </div>

          {/* Terminal Body */}
          <div className="p-8 font-mono text-sm">
            <h2 className="text-3xl text-green-400 mb-6 tracking-wide">
              &gt; INIT CONTACT_PROTOCOL
              <span className="animate-pulse">_</span>
            </h2>

            <p className="text-green-300 mb-8 max-w-xl">
              Have a project, idea, or just want to say hi? Send a message below
              and I’ll get back to you.
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="> your_name"
                className="bg-black border border-green-500/40 px-4 py-3 text-green-300 placeholder-green-700 focus:outline-none focus:border-green-400"
              />

              <input
                type="email"
                placeholder="> your_email"
                className="bg-black border border-green-500/40 px-4 py-3 text-green-300 placeholder-green-700 focus:outline-none focus:border-green-400"
              />

              <textarea
                rows="4"
                placeholder="> message_body"
                className="bg-black border border-green-500/40 px-4 py-3 text-green-300 placeholder-green-700 focus:outline-none focus:border-green-400 resize-none"
              />

              <button
                type="submit"
                className="mt-4 w-fit px-8 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,120,0.4)]"
              >
                SEND
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT – SOCIAL NODES */}
        <div className="w-full md:w-1/6 flex md:flex-col justify-center gap-6">
          {[
            { icon: FaLinkedinIn, href: "https://linkedin.com" },
            { icon: FaGithub, href: "https://github.com" },
            { icon: FaInstagram, href: "https://instagram.com" },
            { icon: FaFacebook, href: "https://facebook.com" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,120,0.4)]"
            >
              <item.icon className="text-2xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
