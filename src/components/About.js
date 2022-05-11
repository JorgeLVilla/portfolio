import { StyledAbout } from "./styles/About.styled";
import aboutIcon from "../assets/aboutIcon.svg";
import deskIcon from "../assets/deskIcon.svg";

const About = () => {
  return (
    <StyledAbout>
      <img
        className="aboutIcon"
        src={aboutIcon}
        alt="person on couch with cat"
      />
      <div>
        <h1>About.</h1>
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
      </div>
      <img className="deskIcon" src={deskIcon} alt="person working on desk" />
    </StyledAbout>
  );
};

export default About;
