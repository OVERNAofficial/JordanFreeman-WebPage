import { motion, AnimatePresence } from "framer-motion";

export default function AboutModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
            <h2 className="text-[#39FF14] font-bold text-xl mb-4">About Me</h2>
            <p className="text-gray-300 mb-2">
              Hi, I’m Jordan Freeman — full-stack developer, AI enthusiast, and creator of ØVERNA.  
              My work spans music tech, real-time race intelligence, and autonomous systems.  
            </p>
            <p className="text-gray-300">
              I focus on merging creativity and engineering into projects that push boundaries.
            </p>

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
