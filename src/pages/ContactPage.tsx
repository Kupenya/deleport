import Contact from "../sections/Contact";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-black min-h-screen flex items-center justify-center"
    >
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
