import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
  logo: "/racetek-logo.png",
    title: "RACETEK",
    desc: "AI-powered race strategy platform with real-time telemetry, tire degradation analysis, and ECHO assistant integration.",
    link: "/projects/racetek",
  },
  {
  logo: "/OVERNAthemelogo.png",
    title: "ØVERNA Composer",
    desc: "Autonomous DAW assistant for MIDI/sample generation, real-time automation, and seamless DAW integration.",
    link: "/projects/overna",
  },
  {
  logo: "/OVERNAthemelogo.png",
    title: "ØVERNA Focus (w/ Bridge)",
    desc: "Audio plugin suite. Focus isolates transients to tighten mixes, while The Bridge enables experimental sound design workflows.",
    link: "/projects/plugins",
  },
  {
  logo: "/synterra-icon.png",
    title: "SYNTERRA OS",
    desc: "Local modular AI operating system with persistent agent memory, macOS automation, and plugin-ready architecture.",
    link: "/projects/synterra",
  },
  {
  logo: "/AERMORIX.png",
    title: "Ærmorix",
    desc: "AI-powered cybersecurity platform delivering real-time monitoring, automated defense, and intelligent threat analysis.",
    link: "/projects/aermorix",
  },
  {
  logo: "/saas.png",
    title: "SaaS-Trend",
    desc: "Aggregator for rising SaaS tools with Product Hunt integration, trend insights, and newsletter-ready design.",
    link: "/projects/saastrend",
  },
];

export default function ProjectsModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-black/70 border border-[#39FF14] rounded-xl p-6 shadow-[0_0_25px_#39FF14aa] max-w-2xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-[#39FF14] font-bold text-2xl mb-6 text-center">
              Projects & Applications
            </h2>

            <div className="space-y-3">
              {projects.map((p, idx) => (
                <Link key={idx} to={p.link} onClick={onClose}>
                  <motion.div
                    className="p-4 rounded-lg border border-gray-600 bg-black/40 
                 hover:border-[#39FF14] hover:shadow-[0_0_12px_#39FF14aa] 
                 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-3">
                      {/* ✅ Render logo properly */}
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <img
                          src={p.logo}
                          alt={`${p.title} logo`}
                          className={`object-contain ${p.title === "RACETEK" ? "max-h-8" : "max-h-12"
                            }`}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-200">
                          {p.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{p.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={onClose}
                className="px-6 py-2 border border-[#39FF14] text-[#39FF14] 
                           hover:shadow-[0_0_10px_#39FF14aa] rounded-lg transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
