import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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

  // Mock project sequence data for demonstration
  const projectSequence = [
    {
      video: project.video,
      context: "The Opening Sequence",
      role: "Director & Cinematographer",
      intention:
        "Setting the atmospheric tone and establishing the visual language of the narrative.",
    },
    {
      video:
        "https://player.vimeo.com/external/517090027.hd.mp4?s=999863261276022e0324107e997f0a8d6e3e571c&profile_id=175",
      context: "The Mid-point Shift",
      role: "Lead Editor",
      intention:
        "Developing the emotional core through rhythmic cutting and deliberate pacing.",
    },
    {
      video:
        "https://player.vimeo.com/external/459389137.hd.mp4?s=80396035882b09a936a5c31616715f3e58980a3a&profile_id=175",
      context: "The Resolution",
      role: "Creative Director",
      intention:
        "A final study on light and shadow, leaving the viewer with a lingering sense of the story's essence.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Top Section: Hero */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 grayscale brightness-50 scale-105"
          src={project.video}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black" />

        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <Link
              to="/portfolio"
              className="flex items-center gap-2 text-secondary hover:text-white transition-colors mb-12 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="text-[10px] uppercase tracking-cinematic font-bold">
                Back to Portfolio
              </span>
            </Link>

            <p className="text-accent text-[10px] uppercase tracking-cinematic font-bold mb-4">
              {project.category} — {project.year}
            </p>
            <h1 className="text-4xl md:text-7xl lg:text-[10rem] font-heading font-bold tracking-tighter uppercase leading-[0.8] mb-8">
              {project.title}
            </h1>
            <p className="text-xl md:text-3xl font-heading font-light text-secondary max-w-3xl leading-relaxed italic">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content: Stacked Video Sequence */}
      <section className="py-24 md:py-40 px-8">
        <div className="max-w-6xl mx-auto space-y-40 md:space-y-64">
          {projectSequence.map((item, index) => (
            <div key={index} className="flex flex-col gap-12">
              {/* Vertical Stacked Video */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative aspect-video w-full bg-accent-muted overflow-hidden rounded-sm group cursor-pointer"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  src={item.video}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                {/* Expand Indicator */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>

              {/* Descriptive Text Reveal after video */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-px bg-accent" />
                    <span className="text-[10px] uppercase tracking-cinematic text-accent font-bold">
                      Context
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold uppercase mb-4 tracking-tighter">
                    {item.context}
                  </h4>
                  <p className="text-secondary text-[10px] uppercase tracking-widest font-bold">
                    Role: {item.role}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-end"
                >
                  <p className="text-lg md:text-xl text-secondary font-light leading-relaxed italic">
                    {item.intention}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-40 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <p className="text-[10px] uppercase tracking-cinematic text-accent font-bold mb-12">
            Next Story
          </p>
          <Magnetic strength={0.2}>
            <Link
              to="/portfolio"
              className="text-5xl md:text-9xl font-heading font-bold uppercase tracking-tighter hover:text-accent transition-colors duration-500"
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
