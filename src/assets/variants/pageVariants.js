export const pageVariants = {
  hidden: {
    opacity: 0,
    x: 150,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 },
  },
  exit: {
    x: -150,
    transition: { ease: "easeInOut" },
    opacity: 0,
  },
};
