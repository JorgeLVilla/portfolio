import { StyledScroll } from "./styles";
import arrowIcon from "../../assets/arrowIcon.svg";
import { motion } from "framer-motion";
import { arrowVariant, scrollDownVariant } from "./variants";

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
          // whileHover="hover"
          src={arrowIcon}
          alt="arrow"
        />
      </a>
    </StyledScroll>
  );
};

export default ScrollDown;
