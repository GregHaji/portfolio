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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&display=swap');
        .font-syne   { font-family: 'Syne', sans-serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }

        .contact-input {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 3px;
          padding: 0.85rem 1rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(236,238,248,0.85);
          outline: none;
          transition: border-color 0.2s;
        }
        .contact-input::placeholder { color: rgba(255,255,255,0.2); }
        .contact-input:focus { border-color: rgba(245,200,0,0.45); }

        .btn-send {
          display: inline-block;
          padding: 0.75rem 2rem;
          background: #f5c800;
          color: #08090e;
          font-family: 'Outfit', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-send:hover:not(:disabled) { background: #ffd426; transform: translateY(-2px); }
        .btn-send:disabled { opacity: 0.5; cursor: not-allowed; }
      `}</style>

      <section
        id="contact"
        className="font-outfit w-full bg-[#08090e] py-28 px-6 sm:px-12 md:px-20"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* HEADER */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-7 h-0.5 bg-[#f5c800] rounded" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#f5c800] font-medium">
                Get In Touch
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight text-[#eceef8] leading-[0.95]">
              Let&apos;s
              <br />
              <span
                style={{
                  WebkitTextStroke: "2px #f5c800",
                  color: "transparent",
                }}
              >
                Work Together.
              </span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            {/* ── FORM ── */}
            <div className="flex-1">
              <p className="text-[0.95rem] font-light text-white/40 leading-relaxed mb-10 max-w-md">
                Have a project, idea, or just want to say hi? Send a message
                below and I&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="contact-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="contact-input"
                  required
                />
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Your message"
                  className="contact-input resize-none"
                  required
                />

                <div className="flex items-center gap-5 mt-2">
                  <button
                    type="submit"
                    className="btn-send"
                    disabled={status === "sending"}
                  >
                    {status === "sending"
                      ? "Sending..."
                      : status === "success"
                        ? "Sent ✓"
                        : status === "error"
                          ? "Error — retry"
                          : "Send Message"}
                  </button>
                  {status === "success" && (
                    <span className="text-[0.8rem] text-[#f5c800]/80">
                      Message sent successfully!
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-[0.8rem] text-red-400/80">
                      Something went wrong. Try again.
                    </span>
                  )}
                </div>
              </form>
            </div>

            {/* ── SOCIALS ── */}
            <div className="flex md:flex-col justify-start gap-4 md:pt-2">
              <div className="hidden md:block mb-2">
                <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/25">
                  Find me on
                </span>
              </div>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/35 hover:text-[#f5c800] transition-colors duration-200"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm bg-white/[0.02] group-hover:border-[#f5c800]/40 transition-colors duration-200">
                    <Icon className="text-sm" />
                  </div>
                  <span className="text-[0.72rem] tracking-[0.12em] uppercase font-medium hidden md:block">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM RULE */}
        <div className="max-w-[1200px] mx-auto mt-24 pt-8 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4">
          <span className="font-syne font-extrabold text-lg text-[#eceef8]">
            GH<span className="text-[#f5c800]">.</span>
          </span>
          <span className="text-[0.7rem] tracking-[0.1em] text-white/20">
            © {new Date().getFullYear()} Greg Haji. All rights reserved.
          </span>
        </div>
      </section>
    </>
  );
}
