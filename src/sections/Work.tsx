import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${projects.length * 100}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `${(projects.length + 1) * 100}% top`,
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section id="work" className="bg-black" aria-label="Selected Portfolio">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="relative h-screen flex flex-row items-center will-change-transform"
        >
          {/* Intro Slide */}
          <div className="h-screen w-screen shrink-0 flex flex-col justify-center px-12 md:px-32">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-accent uppercase tracking-cinematic text-[10px] mb-8 font-bold"
            >
              Recent Work
            </motion.p>
            <h2 className="text-5xl md:text-7xl lg:text-[12rem] font-heading font-bold tracking-tighter leading-[0.85] uppercase">
              SELECTED <br />{" "}
              <span className="text-secondary italic opacity-50">
                PORTFOLIO
              </span>
            </h2>
          </div>

          {/* Project Slides */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="h-screen w-screen shrink-0 flex items-center justify-center p-8 md:p-32 project-card"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link
                to={`/portfolio/${project.id}`}
                className="relative w-full h-full max-w-6xl group overflow-hidden bg-accent-muted rounded-sm block"
              >
                <article className="w-full h-full">
                  {/* Image Background */}
                  <motion.img
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
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

                  {/* Cinematic Light Leak */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none z-10">
                    <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-accent blur-[120px] rounded-full animate-pulse" />
                  </div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8 md:p-16 z-20">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-[0.76, 0, 0.24, 1]">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 md:mb-6 font-bold">
                          {project.category}
                        </p>
                        <h3 className="text-3xl md:text-5xl lg:text-8xl font-heading font-bold tracking-tighter uppercase leading-none">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-2xl md:text-3xl font-heading italic text-secondary opacity-50 mt-4 md:mt-0">
                        {project.year}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="fixed bottom-0 left-0 w-full h-1 bg-white/5 z-110"
        role="progressbar"
        aria-label="Gallery scroll progress"
      >
        <motion.div className="h-full bg-accent" style={{ width: progress }} />
      </div>
    </section>
  );
};

export default Work;
