export const pageVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
