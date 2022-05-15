import { StyledHome } from "./Home.styled";
import heroIcon from "../../assets/heroIcon.svg";
import ScrollDown from "../../components/ScrollDown";
import { motion } from "framer-motion";
import { greetingVariant, heroVariant } from "./Variants";

const Home = () => {
  return (
    <>
      <StyledHome id="home-section">
        <motion.div
          variants={greetingVariant}
          initial="hidden"
          animate="visible"
          id="home-section"
        >
          <div className="hello">
            <motion.h1>Hello,</motion.h1>
          </div>
          <motion.h1>I am Jorge</motion.h1>
          <h5>I design and build things for the web.</h5>
        </motion.div>
        <motion.div variants={heroVariant} initial="hidden" animate="visible">
          <img src={heroIcon} alt="person doing work on couch with dog" />
        </motion.div>
      </StyledHome>
      <ScrollDown />
    </>
  );
};

export default Home;
