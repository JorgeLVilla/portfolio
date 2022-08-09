import { GreetingContainer, StyledHome } from "./styles";
import heroIcon from "../../assets/heroIcon.svg";
import ScrollDown from "../ScrollDown/ScrollDown";
import { motion } from "framer-motion";
import { greetingVariant, heroVariant } from "./variants";

const Home = () => {
  return (
    <>
      <StyledHome id="home-section">
        <GreetingContainer
          as={motion.div}
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
        </GreetingContainer>
        <motion.div variants={heroVariant} initial="hidden" animate="visible">
          <img
            src={heroIcon}
            alt="person working on computer on couch with dog"
          />
        </motion.div>
      </StyledHome>
      <ScrollDown />
    </>
  );
};

export default Home;
