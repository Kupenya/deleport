export const maskAnimation = {
  initial: { y: "100%" },
  animate: { y: 0 },
  transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] as const }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, ease: "easeOut" }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
