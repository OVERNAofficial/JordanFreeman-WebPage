import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/config/siteConfig"; // <-- pull from config

export default function ContactModal({
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
            <h2 className="text-[#39FF14] font-bold text-xl mb-6 text-center">
              Contact
            </h2>

            <ul className="space-y-3 text-gray-300 text-lg text-center">
              <li className="flex items-center justify-center gap-3">

                <Mail size={18} className="text-[#39FF14]" />
                <a
                  href="https://mail.google.com/mail/?view=cm&to=overnaofficial@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#39FF14] transition"
                >
                  {siteConfig.email}
                </a>
              </li>
             <li className="flex items-center justify-center gap-3">

                <Linkedin size={18} className="text-[#39FF14]" />
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#39FF14] transition"
                >
                  {siteConfig.linkedin.replace("https://", "")}
                </a>
              </li>
              <li className="flex items-center justify-center gap-3">

                <Github size={18} className="text-[#39FF14]" />
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#39FF14] transition"
                >
                  {siteConfig.github.replace("https://", "")}
                </a>
              </li>
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
