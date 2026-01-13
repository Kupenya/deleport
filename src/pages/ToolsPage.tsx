import { motion } from "framer-motion";
import { tools } from "../data/tools";
import { maskAnimation } from "../animations/variants";

const ToolsPage = () => {
  return (
    <section className="pt-40 pb-40 px-8 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mask-reveal overflow-hidden mb-32">
          <motion.h1
            {...maskAnimation}
            className="text-5xl md:text-8xl lg:text-[12rem] font-heading font-bold tracking-tighter uppercase leading-[0.8]"
          >
            Toolkit <br />{" "}
            <span className="text-secondary italic opacity-50">& Gear</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              viewport={{ once: true }}
              className="group relative bg-white/3 border border-white/5 p-8 md:p-12 rounded-sm hover:border-accent/50 transition-all duration-700 h-full flex flex-col justify-between"
            >
              {/* Card Content */}
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-cinematic text-accent font-bold mb-4 block">
                  {tool.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase mb-6 tracking-tighter group-hover:text-white transition-colors">
                  {tool.name}
                </h3>
                <p className="text-secondary text-sm md:text-base leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {tool.description}
                </p>
              </div>

              {/* Icon / Subtle Background Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-10 transition-all duration-1000">
                {/* We can use a simple stylized text or just keep the clean glow if URLs aren't reliable */}
                <div className="w-full h-full bg-accent blur-[80px] rounded-full" />
              </div>

              {/* Blue Accent Glow - Bottom Corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/0 group-hover:bg-accent/10 blur-[60px] rounded-full transition-all duration-1000" />

              {/* Hover Line */}
              <motion.div
                className="absolute top-0 left-0 w-0 h-[2px] bg-accent"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-40 border-t border-white/5 pt-20 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-cinematic mb-8">
              Philosophy
            </h4>
            <p className="text-secondary text-xl font-light leading-relaxed">
              Hardware and software are just extensions of the mind. The tool is
              only as powerful as the story it’s meant to tell.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-secondary text-[10px] uppercase tracking-widest font-bold">
            <p>PRECISION WORKFLOWS</p>
            <p>CINEMATIC FIDELITY</p>
            <p>HYBRID PRODUCTION</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsPage;
