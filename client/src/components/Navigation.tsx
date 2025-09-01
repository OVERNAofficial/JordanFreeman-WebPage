import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useLocation } from "react-router-dom";

// Import project logos


// Import modal components
import ProjectsModal from "./ProjectsModal";
import SkillsModal from "./SkillsModal";
import AboutModal from "./AboutModal";
import ContactModal from "./ContactModal";

const projectHeaders: Record<string, { title: string; logo: string }> = {
  "/projects/racetek": { title: "RACETEK", logo: "https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/racetek-logo.png" },
  "/projects/overna": { title: "ØVERNA", logo: "https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/OVERNAthemelogo.png" },
  "/projects/plugins": { title: "FØCUS", logo: "https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/OVERNAthemelogo.png" },
  "/projects/synterra": { title: "SYNTERRA", logo: "https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/synterra-icon.png" },
  "/projects/aermorix": { title: "Ærmorix", logo: "https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/AERMORIX.png" },
  "/projects/saastrend": { title: "SaaS-Trend", logo: "https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/saas.png" },
};

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoOpen, setIsLogoOpen] = useState(false);

  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false); // ✅ new

  const location = useLocation();
  const projectHeader = projectHeaders[location.pathname];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLogoOpen(false);
        setIsProjectsOpen(false);
        setIsSkillsOpen(false);
        setIsAboutOpen(false);
        setIsContactOpen(false);
        setIsResumeOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 glass-effect">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + Name */}
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => setIsLogoOpen(true)}
            >
              <img
                src="https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/JordanFreemanLogo.png"
                alt="Jordan Freeman Logo"
                className="w-10 h-10 rounded-full border border-gray-500"
              />
              <span className="font-cinzel font-bold text-gray-300 text-lg">
                Jordan Freeman
              </span>
            </div>

            {/* ✅ Project Header */}
            {projectHeader && (
              <>
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-2">
                  <div className="w-7 h-7 flex items-center justify-center">
                    <img
                      src={projectHeader.logo}
                      alt={`${projectHeader.title} Logo`}
                      className={`object-contain ${projectHeader.title === "RACETEK" ? "max-h-5 pb-0.5" : "max-h-7"
                        }`}
                    />
                  </div>
                  <span className="font-cinzel font-bold text-[#39FF14] text-lg">
                    {projectHeader.title}
                  </span>
                </div>

                <div className="flex md:hidden items-center space-x-2 ml-auto mr-12">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src={projectHeader.logo}
                      alt={`${projectHeader.title} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-cinzel font-bold text-[#39FF14] text-sm">
                    {projectHeader.title}
                  </span>
                </div>
              </>
            )}

            {/* Right: Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setIsProjectsOpen(true)}
                className="text-gray-300 hover:text-[#39FF14] transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => setIsSkillsOpen(true)}
                className="text-gray-300 hover:text-[#39FF14] transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => setIsAboutOpen(true)}
                className="text-gray-300 hover:text-[#39FF14] transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => setIsContactOpen(true)}
                className="text-gray-300 hover:text-[#39FF14] transition-colors duration-200"
              >
                Contact
              </button>
              <button
                onClick={() => setIsResumeOpen(true)} // ✅ new Résumé button
                className="text-gray-300 hover:text-[#39FF14] transition-colors duration-200"
              >
                Résumé
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-8 h-8 flex items-center justify-center group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.span
                className="absolute h-0.5 w-6 bg-gray-300 rounded group-hover:bg-[#39FF14] group-hover:shadow-[0_0_6px_#39FF14aa]"
                animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute h-0.5 w-6 bg-gray-300 rounded group-hover:bg-[#39FF14] group-hover:shadow-[0_0_6px_#39FF14aa]"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute h-0.5 w-6 bg-gray-300 rounded group-hover:bg-[#39FF14] group-hover:shadow-[0_0_6px_#39FF14aa]"
                animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-16 left-0 right-0 md:hidden bg-black/95 px-6 py-6 
                   border border-[#39FF14]/50 rounded-b-xl shadow-[0_0_20px_#39FF14aa] z-50"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <motion.div
                className="space-y-4"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
                }}
              >
                {[
                  { label: "Projects", action: () => setIsProjectsOpen(true) },
                  { label: "Skills", action: () => setIsSkillsOpen(true) },
                  { label: "About", action: () => setIsAboutOpen(true) },
                  { label: "Contact", action: () => setIsContactOpen(true) },
                  { label: "Résumé", action: () => setIsResumeOpen(true) }, // ✅ new mobile
                ].map((item, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      item.action();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left text-gray-300 hover:text-[#39FF14] hover:pl-2 transition-all duration-200"
                    variants={{
                      hidden: { opacity: 0, x: -15 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Logo Modal */}
      <AnimatePresence>
        {isLogoOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLogoOpen(false)}
          >
            <motion.img
              src="/assets/JordanFreemanLogo.png"
              alt="Jordan Freeman"
              className="w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full border-4 border-[#39FF14] shadow-[0_0_25px_#39FF14aa]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Other Modals */}
      <ProjectsModal isOpen={isProjectsOpen} onClose={() => setIsProjectsOpen(false)} />
      <SkillsModal isOpen={isSkillsOpen} onClose={() => setIsSkillsOpen(false)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsResumeOpen(false)}
          >
            <div
              className="relative bg-black border-2 border-[#39FF14] rounded-xl shadow-[0_0_30px_#39FF14aa] max-w-4xl w-full h-[90vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsResumeOpen(false)}
                className="absolute top-3 right-3 text-gray-300 hover:text-[#39FF14] transition"
              >
                <X size={28} />
              </button>
              <a
                href="/assets/JordanFreemanRésumé.pdf"
                download
                className="absolute top-3 left-3 text-gray-300 hover:text-[#39FF14] transition flex items-center gap-1"
              >
                <Download size={22} />
                <span>Download</span>
              </a>
              <iframe
                src="/assets/JordanFreemanRésumé.pdf"
                className="w-full h-full rounded-lg"
                title="Jordan Freeman Résumé"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
