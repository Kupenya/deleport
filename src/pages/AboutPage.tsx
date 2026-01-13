import Story from "../sections/Story";
import About from "../sections/About";
import { motion } from "framer-motion";
import { maskAnimation } from "../animations/variants";

const AboutPage = () => {
  return (
    <div className="bg-black">
      {/* Editorial Header */}
      <section className="pt-40 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mask-reveal overflow-hidden">
            <motion.h1
              {...maskAnimation}
              className="text-5xl md:text-8xl lg:text-[12rem] font-heading font-bold tracking-tighter uppercase leading-[0.8]"
            >
              THE <br />{" "}
              <span className="text-secondary italic opacity-50">STORY</span>
            </motion.h1>
          </div>
        </div>
      </section>

      <Story />
      <About />
    </div>
  );
};

export default AboutPage;
