import { motion } from "framer-motion";
import { services } from "../data/services";
import { maskAnimation } from "../animations/variants";

const ServicesPage = () => {
  return (
    <section className="pt-40 pb-40 px-8 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mask-reveal overflow-hidden mb-32">
          <motion.h1
            {...maskAnimation}
            className="text-5xl md:text-8xl lg:text-[12rem] font-heading font-bold tracking-tighter uppercase leading-[0.8]"
          >
            Capabilities <br />{" "}
            <span className="text-secondary italic opacity-50">& Services</span>
          </motion.h1>
        </div>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              viewport={{ once: true }}
              className="group relative border-b border-white/5 py-12 md:py-20 cursor-default"
            >
              <div className="relative z-10 flex flex-col md:flex-row md:items-baseline justify-between gap-8 transition-transform duration-700 group-hover:translate-x-4">
                <h3 className="text-4xl md:text-7xl lg:text-9xl font-heading font-bold uppercase tracking-tighter group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="max-w-sm text-secondary text-sm md:text-lg opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-4 group-hover:translate-y-0">
                  {service.description}
                </p>
              </div>

              {/* Blue Glow / Background Accent */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-700 z-0" />

              {/* Blue Underline Progress */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-accent z-20"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              />

              {/* Orbital Glow Effect */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-accent/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
