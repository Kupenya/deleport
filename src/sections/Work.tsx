import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import Magnetic from "../components/Magnetic";

const Work = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Show only first 4 projects
  const displayedProjects = projects.slice(0, 4);

  return (
    <section id="work" className="bg-black py-24 px-8" aria-label="Selected Portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-accent uppercase tracking-cinematic text-[10px] mb-8 font-bold"
          >
            Recent Work
          </motion.p>
          <h2 className="text-2xl md:text-3xl lg:text-[5rem] font-heading font-bold tracking-tighter leading-[0.85] uppercase">
            SELECTED <br />{" "}
            <span className="text-secondary italic opacity-50">
              PORTFOLIO
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 auto-rows-[300px] md:auto-rows-[400px] mb-20">
          {displayedProjects.map((project, index) => {
            // Determine span based on index for uneven grid effect
            // Pattern: 2 cols -> 1 col -> 1 col -> 2 cols
            const isWide = index % 4 === 0 || index % 4 === 3;
            const spanClass = isWide ? "md:col-span-2" : "md:col-span-1";
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group ${spanClass}`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  className="block w-full h-full overflow-hidden bg-accent-muted rounded-sm"
                >
                  <article className="w-full h-full relative">
                    {/* Image Background */}
                    <motion.img
                      src={project.image}
                      alt={`${project.title} - ${project.category}`}
                      loading="lazy"
                      animate={{
                        scale: hoveredId === project.id ? 1.05 : 1,
                        opacity: hoveredId === project.id ? 0.8 : 0.6,
                        filter: hoveredId === project.id ? "grayscale(0%) blur(4px)" : "grayscale(100%) blur(0px)",
                      }}
                      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                      className="w-full h-full object-cover"
                    />

                    {/* Cinematic Light Leak */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none z-10">
                      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-accent blur-[120px] rounded-full animate-pulse" />
                    </div>

                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-6 md:p-8 z-20">
                      <div className="flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[0.76, 0, 0.24, 1]">
                        <p className="text-[9px] uppercase tracking-[0.4em] text-accent mb-2 font-bold">
                          {project.category}
                        </p>
                        <div className="flex flex-col gap-4">
                          <div className="flex justify-between items-end">
                            <h3 className="text-xl md:text-3xl font-heading font-bold tracking-tighter uppercase leading-none">
                              {project.title}
                            </h3>
                            <p className="text-xs font-heading italic text-secondary opacity-50 shrink-0">
                              {project.year}
                            </p>
                          </div>
                          <p className="text-xs text-secondary/80 line-clamp-2 max-w-[90%]">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Magnetic strength={0.3}>
            <Link
              to="/portfolio"
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-transparent border border-white/20 hover:border-accent text-white rounded-full font-bold text-[10px] uppercase tracking-widest overflow-hidden transition-colors"
            >
              <span className="relative z-10 transition-colors group-hover:text-black">
                See All Works
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default Work;
