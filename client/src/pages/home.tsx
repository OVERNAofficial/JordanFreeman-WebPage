import { motion } from "framer-motion";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col flex-1 min-h-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <FeaturesSection />
    </motion.div>
  );
}
