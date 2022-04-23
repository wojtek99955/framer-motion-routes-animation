export const pageVariants = {
  hidden: {
    opacity: 0,
    x: 250,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 },
  },
  exit: {
    x: -250,
    transition: { ease: "easeInOut" },
    opacity: 0,
  },
};
