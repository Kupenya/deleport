import { useState } from "react";
import { motion } from "framer-motion";
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
            className="text-2xl md:text-3xl lg:text-[5rem] font-heading font-bold tracking-tighter uppercase leading-[0.8]"
          >
            SELECTED <br />{" "}
            <span className="text-secondary italic opacity-50">PORTFOLIO</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {projects.map((project, index) => {
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
                    {/* Cover Image */}
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      animate={{
                        scale: hoveredId === project.id ? 1.05 : 1,
                        opacity: hoveredId === project.id ? 0.8 : 0.6,
                        filter: hoveredId === project.id ? "grayscale(0%) blur(4px)" : "grayscale(100%) blur(0px)",
                      }}
                      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                      className="w-full h-full object-cover"
                    />

                    {/* Blue Accent Light Leak */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none z-10">
                      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-accent blur-[120px] rounded-full animate-pulse" />
                    </div>

                    {/* Cinematic Overlay */}
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
      </div>
    </section>
  );
};

export default PortfolioPage;
