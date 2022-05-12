import { StyledAbout } from "./styles/About.styled";
import aboutIcon from "../assets/aboutIcon.svg";
import deskIcon from "../assets/deskIcon.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const aboutVariant = {
  hidden: {
    y: "20vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const About = () => {
  const [aboutContainerRef, aboutContainerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <StyledAbout ref={aboutContainerRef}>
      <img
        className="aboutIcon"
        src={aboutIcon}
        alt="person on couch with cat"
      />
      <motion.div
        variants={aboutVariant}
        initial="hidden"
        animate={aboutContainerInView ? "visible" : "hidden"}
      >
        <h1 id="about-section">About.</h1>
        <p>
          I am a Front-End Developer living in San Diego, California. I am very
          passionate about everything that I do, and love to create things with
          other people.
        </p>
        <p>
          I love to solve problems, and give high attention to detail in
          everything that I do. In my free time I am usually playing video
          games, or playing my Stratocaster.
        </p>
        <p>
          Excited to work on awesome projects, and push the boundaries of
          Front-End development.
        </p>
        <h3>Let's create something awesome!</h3>
      </motion.div>
      <img className="deskIcon" src={deskIcon} alt="person working on desk" />
    </StyledAbout>
  );
};

export default About;
