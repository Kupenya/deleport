import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 1.2, delay: 2.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] bg-black flex items-center justify-center"
    >
      <div className="flex flex-col items-center max-w-xs w-full px-8">
        <div className="flex items-center gap-3 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-heading font-bold text-3xl tracking-tighter uppercase"
          >
            FETUGA
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="w-2 h-2 bg-accent rounded-full"
          />
        </div>
        
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-accent"
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-[10px] text-secondary uppercase tracking-cinematic mt-6 text-center"
        >
          Loading cinematic experience
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
