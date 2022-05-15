export const arrowVariant = {
  hidden: {
    y: "-10px",
  },
  visible: {
    y: 0,
    transition: {
      repeat: Infinity,
      duration: 1,
    },
  },
};

export const scrollDownVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.5,
    },
  },
};
