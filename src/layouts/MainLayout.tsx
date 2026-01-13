import React, { type ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import { motion } from "framer-motion";

interface MainLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  showFooter = true,
}) => {
  return (
    <div className="relative bg-black text-white min-h-screen selection:bg-accent selection:text-white">
      <CustomCursor />
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.main>

      {showFooter && <Footer />}

      {/* Global Grain Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-9999 opacity-[0.03] contrast-150 brightness-150"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
    </div>
  );
};

export default MainLayout;
