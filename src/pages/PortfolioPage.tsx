import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { maskAnimation } from "../animations/variants";

const PortfolioPage = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="pt-40 pb-40 px-8 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mask-reveal overflow-hidden mb-24">
          <motion.h1
            {...maskAnimation}
            className="text-5xl md:text-8xl lg:text-[12rem] font-heading font-bold tracking-tighter uppercase leading-[0.8]"
          >
            SELECTED <br />{" "}
            <span className="text-secondary italic opacity-50">PORTFOLIO</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group relative block aspect-4/5 bg-accent-muted overflow-hidden rounded-sm project-card"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Cover Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                loading="lazy"
                animate={{
                  scale: hoveredId === project.id ? 1.05 : 1,
                  opacity: hoveredId === project.id ? 0 : 0.6,
                }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="w-full h-full object-cover grayscale"
              />

              {/* Video Preview on Hover */}
              <AnimatePresence>
                {hoveredId === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 z-0"
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      src={project.video}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8 z-10">
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: hoveredId === project.id ? 0 : "100%" }}
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <p className="text-accent text-[10px] uppercase tracking-cinematic font-bold mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-secondary text-[10px] uppercase tracking-widest opacity-60">
                      {project.year}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Blue Accent Light Leak */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none z-20">
                <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-accent blur-[100px] rounded-full animate-pulse" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
