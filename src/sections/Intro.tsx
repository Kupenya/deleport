import { motion } from 'framer-motion';
import { maskAnimation } from '../animations/variants';

const Intro = () => {
  return (
    <section className="py-32 md:py-60 px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="mask-reveal overflow-hidden">
          <motion.p
            {...maskAnimation}
            className="text-3xl md:text-6xl font-heading font-medium leading-[1.1] tracking-tight text-white text-balance"
          >
            I tell stories through visuals — <br />
            <span className="text-secondary italic opacity-50">directing emotion,</span> <br />
            shaping narratives, and building brands through motion.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Intro;

