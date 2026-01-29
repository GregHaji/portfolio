import OrbitHero from "./projectsImages/orbitHero.png";
import OrbitDashboard from "./projectsImages/orbitDashboard.png";
import OrbitSpider from "./projectsImages/orbitSpider.png";

import PumpTools from "./projectsImages/pumpTools.png";
import PumpSelector from "./projectsImages/pumpSelector.png";
import PumpQuotes from "./projectsImages/pumpQuotes.png";
import PumpHero from "./projectsImages/pumpHero.png";

import DogHero from "./projectsImages/doghero.png";

export const PROJECTS = {
  orbit: {
    id: "orbit",
    title: "AI Agent",
    description:
      "Frontend interface for an AI agent that autonomously manages tasks using LLMs and tool integrations. Chat with the agent and monitor its actions in real-time, with integrated dashboards for task tracking and performance metrics.",
    stack: ["Next.js", "Tailwind", "Swagger", "ReactBits"],
    images: [OrbitHero, OrbitDashboard, OrbitSpider],
    featuredImage: OrbitHero,
    year: 2025,
    role: "Fullstack Developer",
    status: "WIP",
    link: null,
  },

  selector: {
    id: "selector",
    title: "Pump Selection Engine",
    description:
      "Engineering-grade pump selection tool using performance curves, efficiency calculations, and real-world constraints. Fully deployed and accessible online.",
    stack: ["Next.js", "MongoDB", "Tailwind", "GSAP"],
    images: [PumpHero, PumpSelector, PumpQuotes, PumpTools],
    featuredImage: PumpSelector,
    year: 2024,
    role: "Fullstack Developer",
    status: "LIVE",
    link: "https://curp-pumps.vercel.app/",
  },

  herodog: {
    id: "herodog",
    title: "360° Vehicle Viewer",
    description:
      "Interactive 360-degree vehicle viewer allowing internal and external views with smooth transitions. Work in progress.",
    stack: ["Next.js", "Three.js", "PostgreSQL"],
    images: [DogHero],
    featuredImage: DogHero,
    year: 2025,
    role: "Frontend Developer",
    status: "WIP",
    link: null,
  },
};

export default PROJECTS;
