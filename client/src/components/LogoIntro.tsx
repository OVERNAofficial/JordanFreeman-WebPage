import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logoImage from "public/JordanFreemanLogo.png"; // replace with your portfolio logo if available

interface LogoIntroProps {
  onComplete: () => void;
}

export default function LogoIntro({ onComplete }: LogoIntroProps) {
  const [showSweep, setShowSweep] = useState(false);

  useEffect(() => {
    // Start sweep animation earlier (faster entry)
    const sweepTimer = setTimeout(() => {
      setShowSweep(true);
    }, 400); // was 800 → half time

    // Complete intro sequence quicker
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 750); // was 1500 → half time

    return () => {
      clearTimeout(sweepTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#0d0d0d] z-50 flex items-center justify-center p-4"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, visibility: "hidden" }}
      transition={{ duration: 1.6, ease: "easeOut" }} // slower fade (was 1)
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }} // quicker entry (was 0.8)
      >
        <img
          src={logoImage}
          alt="Jordan Freeman Logo"
          className="object-contain max-w-full max-h-full"
          style={{
            width: "min(50vw, 50vh, 400px)",
            height: "min(50vw, 50vh, 400px)",
          }}
        />
        {showSweep && (
          <motion.div
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#d0fe47]/60 to-transparent transform -skew-x-12 pointer-events-none"
            initial={{ left: "-75%" }}
            animate={{ left: "125%" }}
            transition={{ duration: 0.6, ease: "easeOut" }} // faster sweep (was 1.2)
          />
        )}
      </motion.div>
    </motion.div>
  );
}
