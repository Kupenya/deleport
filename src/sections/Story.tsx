import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { maskAnimation } from '../animations/variants';

const Story = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const paragraphs = [
    "In 2019, curiosity led me to my phone camera. Scrolling through Instagram, I saw someone tell a powerful story using just a phone. That moment changed everything.",
    "With a Tecno W5 and my siblings as actors, I began experimenting with visuals to tell stories.",
    "What started as curiosity became a habit. What became a habit became joy. I still see this as play. And that joy is what keeps me going."
  ];

  return (
    <section ref={containerRef} className="py-32 md:py-60 px-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Story Text */}
        <div className="space-y-16 md:space-y-24">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-accent" />
            <span className="text-[10px] uppercase tracking-cinematic text-accent font-bold">The Origin</span>
          </div>

          <div className="space-y-12">
            {paragraphs.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.2, ease: [0.76, 0, 0.24, 1] }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <p className="text-2xl md:text-4xl font-heading font-medium leading-relaxed tracking-tight text-white/90">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Support */}
        <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm group">
          <motion.div 
            style={{ y }}
            className="absolute inset-0"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover grayscale opacity-40 brightness-75 scale-110"
              src="https://player.vimeo.com/external/517090027.hd.mp4?s=999863261276022e0324107e997f0a8d6e3e571c&profile_id=175"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40" />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute bottom-12 left-12"
          >
            <p className="text-[10px] uppercase tracking-cinematic text-secondary font-bold">
              EST. 2019 — LAGOS
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;

