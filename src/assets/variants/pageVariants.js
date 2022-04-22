export const pageVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 },
  },
  exit: {
    x: -200,
    transition: { ease: "easeInOut" },
    opacity: 0,
  },
};
