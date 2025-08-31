import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Maximize, Minimize } from "lucide-react";

interface ProjectDetailLayoutProps {
  title: string;
  description: string;
  features: string[];
  logo?: string;
  video?: string;
  prev?: { path: string; label: string };
  next?: { path: string; label: string };
}

export default function ProjectDetailLayout({
  title,
  description,
  features,
  logo,
  video,
  prev,
  next,
}: ProjectDetailLayoutProps) {
  // State + refs
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const location = useLocation();

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Track fullscreen changes
  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // Restore fullscreen after navigation
  useEffect(() => {
    const saved = sessionStorage.getItem("isFullscreen");
    if (saved === "true" && wrapperRef.current) {
      wrapperRef.current.requestFullscreen();
    }
  }, [location]);

  // Persist fullscreen state
  useEffect(() => {
    sessionStorage.setItem("isFullscreen", isFullscreen.toString());
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    if (!wrapperRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      wrapperRef.current.requestFullscreen();
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const updateProgress = () => {
      setProgress((v.currentTime / v.duration) * 100 || 0);
      setCurrentTime(v.currentTime);
      setDuration(v.duration);
    };

    v.addEventListener("timeupdate", updateProgress);
    return () => v.removeEventListener("timeupdate", updateProgress);
  }, []);

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const time = (Number(e.target.value) / 100) * duration;
    videoRef.current.currentTime = time;
  };

  const formatTime = (time: number) =>
    new Date(time * 1000).toISOString().substr(14, 5);

  return (
    <section className="py-20 px-4">
      {/* ✅ Description */}
      <p className="text-lg text-gray-300 mb-10 text-center">{description}</p>

      <div className="max-w-5xl mx-auto">
        {/* ✅ Nav row */}
        <div className="flex items-center justify-between gap-4 mb-12">
          {prev ? (
            <Link
              to={prev.path}
              className="flex-1 h-12 flex items-center justify-center text-center px-3 rounded-lg 
                 border border-gray-400 text-gray-300
                 hover:text-[#39FF14] hover:border-[#39FF14]
                 hover:shadow-[0_0_12px_#39FF14aa] transition-all duration-200"
            >
              ← {prev.label}
            </Link>
          ) : (
            <span className="flex-1" />
          )}

          <Link
            to="/"
            className="flex-1 h-12 flex items-center justify-center text-center px-3 rounded-lg 
               border border-gray-400 text-gray-300 font-semibold
               hover:text-[#39FF14] hover:border-[#39FF14]
               hover:shadow-[0_0_15px_#39FF14aa] transition-all duration-200"
          >
            Back to Main
          </Link>

          {next ? (
            <Link
              to={next.path}
              className="flex-1 h-12 flex items-center justify-center text-center px-3 rounded-lg 
                 border border-gray-400 text-gray-300
                 hover:text-[#39FF14] hover:border-[#39FF14]
                 hover:shadow-[0_0_12px_#39FF14aa] transition-all duration-200"
            >
              {next.label} →
            </Link>
          ) : (
            <span className="flex-1" />
          )}
        </div>

        {/* ✅ Custom Video Player */}
        {video && (
          <motion.div
            ref={wrapperRef}
            className="relative mb-12 flex justify-center bg-black rounded-xl overflow-hidden 
             border border-[#39FF14] shadow-[0_0_20px_#39FF14aa] aspect-video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <video
              ref={videoRef}
              src={`${import.meta.env.BASE_URL}${video.replace(/^\//, "")}`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-contain"
            />

            {/* Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-4 py-2 flex items-center gap-3">
              {/* Prev */}
              {prev && (
                <Link
                  to={prev.path}
                  className="text-gray-300 hover:text-[#39FF14] transition"
                >
                  <SkipBack size={22} />
                </Link>
              )}

              {/* Play / Pause */}
              <button
                onClick={togglePlay}
                className="text-gray-300 hover:text-[#39FF14] transition"
              >
                {isPlaying ? <Pause size={22} /> : <Play size={22} />}
              </button>

              {/* Next */}
              {next && (
                <Link
                  to={next.path}
                  className="text-gray-300 hover:text-[#39FF14] transition"
                >
                  <SkipForward size={22} />
                </Link>
              )}

              {/* Current Time */}
              <span className="text-xs text-gray-400 w-12 text-right">
                {formatTime(currentTime)}
              </span>

              {/* Seek Bar */}
              <input
                type="range"
                value={progress}
                onChange={seek}
                className="flex-1 accent-[#39FF14] cursor-pointer"
              />

              {/* Duration */}
              <span className="text-xs text-gray-400 w-12">
                {formatTime(duration)}
              </span>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="text-gray-300 hover:text-[#39FF14] transition"
              >
                {isFullscreen ? <Minimize size={22} /> : <Maximize size={22} />}
              </button>
            </div>
          </motion.div>
        )}

        {/* ✅ Features grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-gray-300 mb-10">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-[#39FF14] mt-1">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
