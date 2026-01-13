import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { expertise, recognition } from '../data/about';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={containerRef} id="about" className="py-32 md:py-48 px-8 relative overflow-hidden bg-black" aria-label="About Oladele Fetuga">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
        <div className="relative aspect-4/5 bg-accent-muted overflow-hidden rounded-sm group">
          <motion.img
            style={{ scale: imageScale }}
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
            alt="Oladele Fetuga - Visual Storyteller"
            loading="lazy"
            className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
          
          <motion.div
            style={{ y }}
            className="absolute -bottom-12 -right-12 hidden lg:block"
          >
            <div className="bg-accent p-8 rounded-sm">
              <span className="text-white text-[10px] font-bold uppercase tracking-cinematic">Available for Global Bookings</span>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-accent" />
            <span className="text-[10px] uppercase tracking-cinematic text-accent font-bold">
              Profile
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-[8rem] font-heading font-bold leading-[0.8] tracking-tighter uppercase">
            Story <br /> Over <br /> <span className="text-secondary italic opacity-50">Everything.</span>
          </h2>

          <div className="flex flex-col gap-8 md:gap-10 text-secondary leading-relaxed max-w-lg">
            <p className="text-xl md:text-2xl text-white font-light tracking-tight">
              Oladele Fetuga is a multi-disciplinary visual storyteller based in Lagos, operating worldwide.
            </p>
            <p className="text-[15px] font-light opacity-80">
              With over a decade of experience in cinematography and creative direction, he has mastered the art of capturing the essence of human experience. His work is characterized by a deep understanding of lighting, composition, and the subtle nuances that transform a sequence of images into a compelling narrative.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-12 border-t border-white/5">
              <div>
                <h4 className="text-white text-[10px] font-bold mb-6 uppercase tracking-[0.2em]">Expertise</h4>
                <ul className="text-xs flex flex-col gap-3 text-secondary font-medium">
                  {expertise.map((item) => (
                    <li key={item} className="hover:text-accent transition-colors cursor-default">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white text-[10px] font-bold mb-6 uppercase tracking-[0.2em]">Recognition</h4>
                <ul className="text-xs flex flex-col gap-3 text-secondary font-medium">
                  {recognition.map((item) => (
                    <li key={item} className="hover:text-accent transition-colors cursor-default">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
