import { StyledScroll } from "./styles/ScrollDown.styled";
import arrowIcon from "../assets/arrowIcon.svg";
import { motion } from "framer-motion";

const arrowVariant = {
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

const scrollDownVariant = {
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

const ScrollDown = () => {
  return (
    <StyledScroll
      as={motion.div}
      variants={scrollDownVariant}
      initial="hidden"
      animate="visible"
    >
      <p>Scroll down</p>
      <motion.img
        variants={arrowVariant}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        src={arrowIcon}
        alt="arrow"
      />
    </StyledScroll>
  );
};

export default ScrollDown;
