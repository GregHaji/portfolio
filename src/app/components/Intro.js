import Image from "next/image";
import Particles from "../components/particles";
import TextType from "../components/texttype";

export default function Intro() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-linear-to-bl from-emerald-950 to-black w-screen">
      {/* PARTICLES */}
      <div className="absolute inset-0">
        <Particles
          variant="square"
          pixelSize={4}
          color="#0a2200"
          patternScale={1}
          patternDensity={1}
          pixelSizeJitter={1}
          enableRipples
          rippleSpeed={1}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={1}
          edgeFade={0.1}
          transparent
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-28 px-6 sm:px-10 md:px-28 text-center md:text-left">
        {/* TEXT */}
        <div className="space-y-6 font-mono max-w-xl">
          {/* BOOT / BUILD TEXT */}
          <div className="text-green-400 text-xs sm:text-sm md:text-base tracking-wide">
            <TextType
              text={[
                "Initializing dev environment...",
                "> npm run dev",
                "✔ Compiled successfully",
                "✔ Loaded 128 modules",
                "✔ Running on http://localhost:3000",
              ]}
              typingSpeed={500}
              pauseDuration={900}
              showCursor={true}
              cursorCharacter="▌"
            />
          </div>

          {/* NAME */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-green-300">
            Greg_Haji
          </h1>

          {/* ROLE */}
          <h2 className="text-base sm:text-lg md:text-xl text-green-200 tracking-wide">
            Full Stack Web Developer
          </h2>

          {/* META */}
          <div className="text-xs sm:text-sm text-green-200 leading-relaxed opacity-90">
            src/app/page.tsx <br />
            Framework: Next.js <br />
            Stack: Next • Node • Express • MongoDB <br />
          </div>

          {/* PROMPT */}
          <div className="text-green-400 mt-4 md:mt-6">$ ready to build</div>
        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center md:justify-end">
          {/* GLOW RING */}
          <div className="absolute h-[260px] w-[260px] sm:h-[360px] sm:w-[360px] md:h-[480px] md:w-[480px] rounded-full border-[6px] md:border-8 border-green-400/60 shadow-green-400 shadow-xl blur-[10px]" />

          <Image
            src="/test.png"
            alt="Picture of Greg"
            width={400}
            height={400}
            className="relative w-[220px] sm:w-[300px] md:w-[400px] drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* SOFT SCANLINES */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] mix-blend-overlay opacity-20" />
    </div>
  );
}
