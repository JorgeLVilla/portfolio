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
  // hover: {
  //   scale: 1.1,
  // },
};

const ScrollDown = () => {
  return (
    <StyledScroll
      as={motion.div}
      variants={scrollDownVariant}
      initial="hidden"
      animate="visible"
      // whileHover="hover"
    >
      <p>Contact me</p>
      <a href="#contact-section">
        <motion.img
          variants={arrowVariant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          src={arrowIcon}
          alt="arrow"
        />
      </a>
    </StyledScroll>
  );
};

export default ScrollDown;
