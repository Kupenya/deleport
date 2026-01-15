import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import Magnetic from './Magnetic';
import ContactModal from './ContactModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <footer className="py-24 px-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div>
            <h2 className="text-4xl font-heading font-bold tracking-tighter uppercase mb-8">
              OLADELE FETUGA
            </h2>
            <p className="text-secondary text-[10px] uppercase tracking-cinematic font-bold max-w-xs leading-loose">
              Visual Storyteller & Creative Director based in Lagos, Nigeria. Operating Worldwide.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex gap-10">
              {[
                { Icon: Instagram, label: "Instagram", href: "https://instagram.com/Thefirepage_" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/oladele-fetuga/" },
                { Icon: Mail, label: "Email", href: "mailto:thefirepage1.0@gmail.com" }
              ].map(({ Icon, label, href }, i) => (
                <Magnetic key={i} strength={0.4}>
                  <motion.a
                    href={href}
                    onClick={label === "Email" ? handleEmailClick : undefined}
                    target={label === "Email" ? undefined : "_blank"}
                    rel={label === "Email" ? undefined : "noopener noreferrer"}
                    aria-label={label === "Email" ? "Open contact form" : `Follow on ${label}`}
                    whileHover={{ scale: 1.1, color: '#4D7CFF' }}
                    className="text-secondary transition-colors p-2 -m-2 cursor-pointer focus:outline-none focus:text-accent"
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </motion.a>
                </Magnetic>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 text-[9px] uppercase tracking-widest text-secondary/40 font-bold">
              <p>© 2025 ALL RIGHTS RESERVED</p>
              <p>DESIGNED BY STUDIO</p>
            </div>
          </div>
        </div>
      </footer>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Footer;
