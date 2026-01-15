import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ArrowLeft } from "lucide-react";
import Magnetic from "../components/Magnetic";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

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
  const isGoogleDrive = project.video.includes("drive.google.com");

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Top Section: Hero */}
      <section className="relative min-h-screen w-full flex flex-col pt-32 md:pt-40">
        
        {/* Navigation - Below Navbar */}
        <div className="px-8 mb-8 z-10">
           <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group bg-white/5 hover:bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/5"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="text-[10px] uppercase tracking-cinematic font-bold">
                Back to Works
              </span>
            </Link>
        </div>

        {/* Video Player */}
        <div className="relative flex-grow w-full h-[60vh] md:h-[75vh] bg-black px-4 md:px-8">
          <div className="w-full h-full rounded-sm overflow-hidden border border-white/10 relative z-0">
            {isGoogleDrive ? (
               <iframe 
                  src={project.video} 
                  className="w-full h-full border-0" 
                  allow="autoplay"
                  allowFullScreen
              ></iframe>
            ) : (
              <video
                  autoPlay
                  controls
                  playsInline
                  loop
                  poster={project.image}
                  className="w-full h-full object-contain"
                  src={project.video}
              >
                  Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
        
        {/* Project Info */}
        <div className="bg-black px-8 py-12 md:py-20 border-b border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-accent text-[10px] uppercase tracking-cinematic font-bold mb-4">
                        {project.category} — {project.year}
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-bold tracking-tighter uppercase leading-[0.9] mb-8">
                        {project.title}
                    </h1>
                </motion.div>

                <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     className="flex flex-col justify-end h-full"
                >
                    <p className="text-lg md:text-2xl font-heading font-light text-secondary max-w-xl leading-relaxed italic">
                        {project.description}
                    </p>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-24 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <p className="text-[10px] uppercase tracking-cinematic text-accent font-bold mb-12">
            Discover More
          </p>
          <Magnetic strength={0.2}>
            <Link
              to="/portfolio"
              className="text-4xl md:text-7xl font-heading font-bold uppercase tracking-tighter hover:text-accent transition-colors duration-500"
            >
              VIEW ALL WORK
            </Link>
          </Magnetic>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
