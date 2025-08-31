import { Linkedin, Github, Instagram, Youtube, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/siteConfig"; // ✅ make sure path is correct

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f0f0f] border-t border-[#333] py-6 px-0">
      <div
        className="w-full px-4 sm:px-6 lg:px-8 
                   flex flex-wrap items-center justify-center md:justify-between gap-6"
      >
        {/* Left: Name / Tagline */}
        <div className="text-center md:text-left flex-1 min-w-[200px]">
          <h3 className="font-cinzel font-bold text-lg text-[#39FF14]">
            Jordan Freeman
          </h3>
          <p className="text-gray-400 text-sm">
            Full-Stack Developer • AI Systems • Real-Time Apps
          </p>
        </div>

        {/* Middle: Social Icons */}
        <div className="flex space-x-6 justify-center flex-1 min-w-[200px]">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#39FF14] transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#39FF14] transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#39FF14] transition-colors duration-200"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#39FF14] transition-colors duration-200"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Right: Back to Top */}
        <div className="flex-1 min-w-[200px] flex justify-center md:justify-end">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 border border-gray-400 px-4 py-2 rounded-lg 
                       hover:text-[#39FF14] hover:border-[#39FF14] hover:shadow-[0_0_12px_#39FF14aa]
                       transition-all duration-200"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
