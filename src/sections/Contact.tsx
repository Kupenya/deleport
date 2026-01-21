import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import Magnetic from "../components/Magnetic";

const Contact = () => {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:thefirepage1.0@gmail.com" },
    { icon: Phone, label: "Phone", href: "tel:09164326519" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/Thefirepage_" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/oladele-fetuga/" },
  ];

  return (
    <section
      id="contact"
      className="py-40 md:py-64 px-8 bg-black flex flex-col items-center text-center"
      aria-label="Contact and Collaboration"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-[5rem] font-heading font-bold tracking-tighter uppercase leading-none mb-12">
            Let’s tell <br />
            <span className="text-secondary italic opacity-50">a story.</span>
          </h2>
          <p className="text-xl md:text-3xl font-heading font-light text-secondary/80 max-w-2xl mx-auto leading-relaxed italic">
            Available for collaborations, brand projects, <br />
            and creative direction.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20">
          {socialLinks.map((link, i) => (
            <Magnetic key={link.label} strength={0.4}>
              <motion.a
                href={link.href}
                target={link.label === "Phone" || link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Phone" || link.label === "Email" ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + i * 0.1,
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                }}
                viewport={{ once: true }}
                className="group flex flex-col items-center gap-4"
                aria-label={link.label === "Email" ? "Send email" : `Follow on ${link.label}`}
              >
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-500">
                  <link.icon
                    size={24}
                    strokeWidth={1.2}
                    className="text-white group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-cinematic font-bold text-secondary group-hover:text-white transition-colors">
                  {link.label}
                </span>
              </motion.a>
            </Magnetic>
          ))}
        </div>
      </div>

      <div className="mt-40 text-[9px] uppercase tracking-cinematic text-secondary/30 font-bold">
        <p>© 2025 OLADELE FETUGA — ALL RIGHTS RESERVED</p>
      </div>
    </section>
  );
};

export default Contact;
