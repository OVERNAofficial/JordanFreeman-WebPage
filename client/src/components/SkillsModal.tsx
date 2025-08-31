import { motion, AnimatePresence } from "framer-motion";
import { Code, Bot, Activity, Package, Shield } from "lucide-react";

const skills = [
  { icon: Code, text: "Full–Stack (React, Next.js, Electron, FastAPI)" },
  { icon: Bot, text: "AI Integration (OpenAI, Ollama, custom agents)" },
  { icon: Activity, text: "Real–Time Systems (Telemetry, MIDI, sockets)" },
  { icon: Package, text: "Cross–Platform Packaging (macOS DMG, SaaS)" },
  { icon: Shield, text: "Cybersecurity Concepts (monitoring, AI–driven defense)" },
];

export default function SkillsModal({
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
            className="bg-black/70 border border-[#39FF14] rounded-xl p-6 shadow-[0_0_20px_#39FF14aa] max-w-lg w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-[#39FF14] font-bold text-xl mb-6 text-center tracking-wide">
              Skills & Strengths
            </h2>

            <ul className="space-y-3 text-gray-300">
              {skills.map((s, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 hover:text-[#39FF14] transition-colors duration-200"
                >
                  <s.icon className="w-5 h-5 flex-shrink-0" />
                  <span>{s.text}</span>
                </li>
              ))}
            </ul>

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
