import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { maskAnimation } from "../animations/variants";
import Magnetic from "../components/Magnetic";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle background movement on scroll
      gsap.to(".hero-bg", {
        scale: 1.1,
        yPercent: 10,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Parallax for content
      gsap.to(".hero-content", {
        yPercent: 20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col justify-center items-center px-8 overflow-hidden bg-black"
      aria-label="Introduction"
    >
      {/* Cinematic Background */}
      <div className="hero-bg absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1600"
          className="w-full h-full object-cover opacity-20 grayscale brightness-50"
          src="https://player.vimeo.com/external/494252666.hd.mp4?s=2f232015243851752b02e6c5180635338efbc002&profile_id=175"
        />
        {/* Animated Grain Overlay Specific for Hero */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
      </div>

      <div className="hero-content z-10 text-center max-w-7xl w-full">
        <div className="mask-reveal overflow-hidden mb-6">
          <motion.h1
            {...maskAnimation}
            className="text-2xl md:text-[5vw] lg:text-[4rem] font-heading font-bold leading-[0.8] tracking-tighter uppercase"
          >
            OLADELE FETUGA
          </motion.h1>
        </div>

        <div className="mask-reveal overflow-hidden mb-12">
          <motion.p
            {...maskAnimation}
            transition={{ ...maskAnimation.transition, delay: 0.2 }}
            className="text-secondary uppercase tracking-cinematic text-[10px] md:text-sm font-bold"
          >
            Creative Director & Visual Storyteller
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <Magnetic strength={0.3}>
            <Link
              to="/portfolio"
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full font-bold text-[10px] uppercase tracking-widest overflow-hidden transition-colors hover:bg-accent"
            >
              <span className="relative z-10 transition-colors group-hover:text-white">
                View Work
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator - Blue Accent */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-cinematic text-secondary">
          Scroll
        </span>
        <div className="h-16 w-px bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={
              { duration: 2, repeat: Infinity, ease: "easeInOut" } as any
            }
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
