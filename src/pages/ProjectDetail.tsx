import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { ArrowLeft, Play } from "lucide-react";
import Magnetic from "../components/Magnetic";
import { cn } from "../utils/cn";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  
  // Determine which videos to show (array or single)
  const videosToShow = project?.videos && project.videos.length > 0 ? project.videos : (project?.video ? [project.video] : []);
  
  const [currentVideo, setCurrentVideo] = useState(videosToShow[0]);

  // Reset current video when project changes
  useEffect(() => {
    if (videosToShow.length > 0) {
      setCurrentVideo(videosToShow[0]);
    }
  }, [id, videosToShow]);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-heading font-bold mb-8">
          Project Not Found
        </h1>
        <Link
          to="/portfolio"
          className="text-accent uppercase tracking-cinematic text-[10px] font-bold"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  // Helper to detect if it's a Google Drive preview link
  const isGoogleDrive = (url: string) => url && url.includes("drive.google.com");

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* LEFT COLUMN: Main Player & Info */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Back Button */}
          <div>
             <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Back to Works
              </Link>
          </div>

          {/* Main Video Player */}
          <div className="w-full aspect-video bg-zinc-900 rounded-sm overflow-hidden border border-white/10 relative shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVideo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                {isGoogleDrive(currentVideo) ? (
                   <iframe 
                      src={currentVideo} 
                      className="w-full h-full border-0" 
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                  ></iframe>
                ) : (
                  <video
                      controls
                      playsInline
                      autoPlay
                      className="w-full h-full object-contain"
                      src={currentVideo}
                  >
                      Your browser does not support the video tag.
                  </video>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Info */}
          <div className="flex flex-col gap-6 border-b border-white/5 pb-8">
            <div>
              <p className="text-accent text-[10px] uppercase tracking-cinematic font-bold mb-2">
                  {project.category} — {project.year}
              </p>
              <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tighter uppercase leading-none">
                  {project.title}
              </h1>
            </div>
            <p className="text-lg text-secondary font-light max-w-3xl leading-relaxed">
                {project.description}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Playlist / Sidebar */}
        <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Project Clips <span className="text-white/40 ml-2">({videosToShow.length})</span>
            </h3>
          </div>

          <div className="flex flex-col gap-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
            {videosToShow.map((videoUrl, index) => {
              const isActive = currentVideo === videoUrl;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentVideo(videoUrl)}
                  className={cn(
                    "flex items-start gap-4 p-3 rounded-sm transition-all duration-300 group text-left",
                    isActive 
                      ? "bg-accent/10 border border-accent/20" 
                      : "bg-white/5 border border-transparent hover:bg-white/10 hover:border-white/10"
                  )}
                >
                  {/* Thumbnail / Placeholder */}
                  <div className="w-24 aspect-video bg-black/50 rounded-xs flex items-center justify-center shrink-0 relative overflow-hidden">
                    {/* Since we don't have unique thumbnails, show a play icon or generic graphic */}
                    {isActive ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-accent/20">
                         <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      </div>
                    ) : (
                      <Play size={16} className="text-white/40 group-hover:text-white transition-colors" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-center h-full pt-1">
                    <span className={cn(
                      "text-xs font-bold uppercase tracking-wide mb-1 line-clamp-1",
                      isActive ? "text-accent" : "text-white group-hover:text-accent transition-colors"
                    )}>
                      {videosToShow.length > 1 ? `Sequence ${String(index + 1).padStart(2, '0')}` : "Main Film"}
                    </span>
                    <span className="text-[10px] text-white/40 font-medium">
                      {project.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Footer Navigation (Simplified) */}
      <section className="mt-20 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <p className="text-[10px] uppercase tracking-cinematic text-accent font-bold mb-8">
            Next Project
          </p>
          <Magnetic strength={0.2}>
            <Link
              to="/portfolio"
              className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter hover:text-accent transition-colors duration-500"
            >
              Back to Portfolio
            </Link>
          </Magnetic>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
