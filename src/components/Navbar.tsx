import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import Magnetic from "./Magnetic";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Work", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Tools", href: "/tools" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-100 transition-all duration-700 px-8 py-8 flex justify-between items-baseline",
          scrolled
            ? "bg-black/80 backdrop-blur-xl py-6 border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <Magnetic strength={0.2}>
          <Link
            to="/"
            className="text-2xl font-heading font-bold tracking-tighter cursor-pointer flex items-center gap-2"
          >
            FETUGA
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          </Link>
        </Magnetic>

        <div className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <Magnetic key={link.name} strength={0.3}>
              <Link
                to={link.href}
                className={cn(
                  "group relative text-[10px] uppercase tracking-cinematic font-bold transition-colors cursor-pointer",
                  location.pathname === link.href
                    ? "text-white"
                    : "text-secondary hover:text-white"
                )}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-2 left-0 h-px bg-accent"
                  initial={false}
                  animate={{
                    width: location.pathname === link.href ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                />
              </Link>
            </Magnetic>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-101 text-white p-4 -m-4"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-black z-99 flex flex-col justify-center items-start px-12 gap-8"
          >
            <div className="flex flex-col gap-4">
              <span className="text-accent text-[10px] uppercase tracking-cinematic font-bold">
                Menu
              </span>
              <div className="w-12 h-px bg-accent" />
            </div>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, ease: [0.76, 0, 0.24, 1] }}
              >
                <Link
                  to={link.href}
                  className={cn(
                    "text-5xl font-heading font-bold transition-colors uppercase tracking-tighter",
                    location.pathname === link.href
                      ? "text-accent"
                      : "hover:text-accent"
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <div className="mt-12 flex flex-col gap-4 text-secondary text-[10px] uppercase tracking-widest font-medium">
              <p>© 2025 OLADELE FETUGA</p>
              <p>Visual Storyteller</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
