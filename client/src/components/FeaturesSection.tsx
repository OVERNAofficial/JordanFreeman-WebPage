import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, Download } from "lucide-react";
// Removed imports for public assets

const projects = [
  {
    title: "RACETEK",
    description:
      "AI-powered race strategy platform with real-time telemetry, tire degradation analysis, and ECHO assistant integration.",
    link: "/projects/racetek",
  logo: "https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/racetek-logo.png",
    // external: false
  },
  {
    title: "ØVERNA Composer",
    description:
      "Autonomous DAW assistant for MIDI/sample generation, real-time automation, and seamless integration with MPC, Reaper, and Ableton.",
    link: "/projects/overna",
  logo: "https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/OVERNAthemelogo.png",
    // external: false
  },
  {
    title: "ØVERNA Focus (w/ Bridge)",
    description:
      "A suite of ØVERNA audio plugins. Focus is a VST3/AU transient isolator designed to clean up kick bleeding and tighten low-end dynamics. Includes The Bridge, a creative audio utility for experimental sound design.",
    link: "/projects/plugins",
  logo: "https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/OVERNAthemelogo.png",
    // external: false
  },
  {
    title: "SYNTERRA OS",
    description:
      "Local modular AI operating system with file manager, macOS automation, browser integration, and persistent agent memory.",
    link: "/projects/synterra",
  logo: "https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/synterra-icon.png",
    // external: false
  },
  {
    title: "Ærmorix",
    description:
      "AI-powered cybersecurity platform delivering real-time monitoring, automated defense, and intelligent threat analysis.",
    link: "/projects/aermorix",
  logo: "https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/AERMORIX.png",
    // external: false
  },
  {
    title: "SaaS-Trend",
    description:
      "SaaS insights aggregator with trend tracking, Product Hunt integrations, and clean modern UI for newsletters and discovery.",
    link: "/projects/saastrend",
  logo: "https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/1756779987986.png",
    // external: false
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const leftProjects = projects.slice(0, 3);
  const rightProjects = projects.slice(3);

  return (
    <section
      id="projects"
      className="px-8"
      ref={ref}
      style={{
        minHeight: "calc(100vh - 48px - 32px)",
        paddingTop: "60px",
        paddingBottom: "22px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 auto-rows-fr">
        {/* Middle Column */}
        <motion.div
          className="flex flex-col items-center text-center space-y-14 order-1 lg:order-2 mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/JordanFreemanLogo.png"
            alt="Jordan Freeman Logo"
            className="w-56 h-56 mb-2 rounded-full border-4 border-[#39FF14] shadow-[0_0_30px_#39FF14aa]"
          />
          <h1 className="font-cinzel font-bold text-5xl md:text-6xl text-[#39FF14]">
            Jordan Freeman
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            AI-Powered Creator | Music Producer | Racing Tech Innovator
          </p>
          {/* Secondary Technical Tagline */}
          <p className="text-sm md:text-base text-gray-400 italic">
            Full–Stack Developer | AI Systems | Real–Time Apps
          </p>
          <p className="text-gray-400 max-w-lg">
            I design and build intelligent applications that merge AI, security, and real-time data —
            from race strategy platforms to autonomous music tools.
          </p>
          <button
            onClick={() => setIsResumeOpen(true)}
            className="px-8 py-3 rounded-lg border border-gray-400 text-gray-300 
             hover:text-[#39FF14] hover:border-[#39FF14] 
             hover:shadow-[0_0_15px_#39FF14aa] transition-all duration-200"
          >
            View Résumé
          </button>
        </motion.div>

        {/* Left Column */}
        <div className="flex flex-col justify-between gap-8 order-2 lg:order-1 mt-8">
          {leftProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={project.link}
                className="rounded-xl p-6 border border-gray-400 text-gray-200
                     hover:border-[#39FF14] hover:text-[#39FF14] 
                     hover:shadow-[0_0_15px_#39FF14aa]
                     transition-all duration-300 bg-[#0d0d0d]/60 flex flex-col h-full group"
              >
                <div className="mb-4 flex justify-center">
                  <img
                    src={project.logo}
                    alt={`${project.title} Logo`}
                    className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <h3 className="font-cinzel text-xl font-semibold mb-3">{project.title}</h3>
                <p className="bg-gradient-to-r from-gray-400 via-[#2ecf13] to-gray-400 bg-clip-text text-transparent animate-sparkle">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between gap-8 order-3 lg:order-3 mt-8">
          {rightProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={project.link}
                className="rounded-xl p-6 border border-gray-400 text-gray-200
                     hover:border-[#39FF14] hover:text-[#39FF14] 
                     hover:shadow-[0_0_15px_#39FF14aa]
                     transition-all duration-300 bg-[#0d0d0d]/60 flex flex-col h-full group"
              >
                <div className="mb-4 flex justify-center">
                  <img
                    src={project.logo}
                    alt={`${project.title} Logo`}
                    className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <h3 className="font-cinzel text-xl font-semibold mb-3">{project.title}</h3>
                <p className="bg-gradient-to-r from-gray-400 via-[#2ecf13] to-gray-400 bg-clip-text text-transparent animate-sparkle">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="relative bg-black border-2 border-[#39FF14] rounded-xl shadow-[0_0_30px_#39FF14aa] max-w-4xl w-full h-[90vh] p-4">
            {/* Close button */}
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-3 right-3 text-gray-300 hover:text-[#39FF14] transition"
            >
              <X size={28} />
            </button>

            {/* Download button */}
            <a
              href="https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/JordanFreemanR%C3%A9sum%C3%A9.pdf"
              download
              className="absolute top-3 left-3 text-gray-300 hover:text-[#39FF14] transition flex items-center gap-1"
            >
              <Download size={22} />
              <span>Download</span>
            </a>

            {/* PDF Viewer */}
            <iframe
              src="https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/JordanFreemanR%C3%A9sum%C3%A9.pdf"
              className="w-full h-full rounded-lg"
              title="Resume PDF"
            />
          </div>
        </div>
      )}
    </section>
  );
}
