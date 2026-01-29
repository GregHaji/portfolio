"use client";

import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
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

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="> your_name"
                className="bg-black border border-green-500/40 px-4 py-3 text-green-300 placeholder-green-700 focus:outline-none focus:border-green-400"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="> your_email"
                className="bg-black border border-green-500/40 px-4 py-3 text-green-300 placeholder-green-700 focus:outline-none focus:border-green-400"
                required
              />

              <textarea
                rows="4"
                name="message"
                placeholder="> message_body"
                className="bg-black border border-green-500/40 px-4 py-3 text-green-300 placeholder-green-700 focus:outline-none focus:border-green-400 resize-none"
                required
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-4 w-fit px-8 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,120,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? "SENDING..."
                  : status === "success"
                    ? "SENT ✅"
                    : status === "error"
                      ? "ERROR ❌"
                      : "SEND"}
              </button>
            </form>

            {/* Optional status messages inside terminal */}
            {status === "success" && (
              <p className="mt-4 text-green-300">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-500">
                Failed to send message. Try again.
              </p>
            )}
          </div>
        </div>

        {/* RIGHT – SOCIAL NODES */}
        <div className="w-full md:w-1/6 flex md:flex-col justify-center gap-6">
          {[
            {
              icon: FaLinkedinIn,
              href: "https://www.linkedin.com/in/gregory-haji-joannou-885553216/",
            },
            { icon: FaGithub, href: "https://github.com/GregHaji" },
            { icon: FaInstagram, href: "https://www.instagram.com/greg_haji/" },
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
