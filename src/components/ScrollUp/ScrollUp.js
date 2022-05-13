import { UpArrowContainer } from "./styles";
import upArrowIcon from "../../assets/upArrowIcon.svg";
import { motion } from "framer-motion";

const upScrollVariant = {
  hover: {
    scale: 1.2,
  },
};

const ScrollUp = () => {
  return (
    <UpArrowContainer>
      <a href="#home-section">
        <motion.img
          src={upArrowIcon}
          alt="arrow"
          variants={upScrollVariant}
          whileHover={"hover"}
          initial={"hidden"}
          animate={"visible"}
        />
      </a>
    </UpArrowContainer>
  );
};

export default ScrollUp;
