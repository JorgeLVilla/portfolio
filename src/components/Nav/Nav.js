import {
  MainContainer,
  LogoContainer,
  Logo,
  LinksContainer,
  LinkBox,
  Links,
  LinkUnderline,
  SocialContainer,
  GithubLink,
  TwitterLink,
} from "./styles";
import { motion } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const [underlineAni, setUnderlineAni] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const [currHover, setCurrHover] = useState("");

  const hoverAction = (hoverID) => {
    setUnderlineAni(true);
    setCurrHover(hoverID);
  };

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
    lastScrollY = window.scrollY;
  });

  const logoVariant = {
    hover: {
      scale: 1.1,
    },
  };
  const navVariant = {
    hidden: {
      x: "-100%",
    },
    navVisible: {
      x: ["-100%", "0%"],
      transition: {
        duration: 0.7,
      },
    },
    navHide: {
      x: ["0%", "-100%"],
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <MainContainer
      as={motion.div}
      variants={navVariant}
      initial="hidden"
      animate={navVisible ? "navVisible" : "navHide"}
    >
      <LogoContainer>
        <a href="#home-section">
          <Logo as={motion.div} variants={logoVariant} whileHover="hover" />
        </a>
      </LogoContainer>
      <LinksContainer>
        <LinkBox
          onMouseEnter={() => hoverAction("projects")}
          onMouseLeave={() => setUnderlineAni(false)}
        >
          <a href="#projects-section">
            <Links>Projects</Links>
            <LinkUnderline
              underlineAni={underlineAni}
              currHover={currHover}
              hoverID="projects"
            />
          </a>
        </LinkBox>
        <LinkBox
          onMouseEnter={() => hoverAction("about")}
          onMouseLeave={() => setUnderlineAni(false)}
        >
          <a href="#about-section">
            <Links>About</Links>
            <LinkUnderline
              underlineAni={underlineAni}
              currHover={currHover}
              hoverID="about"
            />
          </a>
        </LinkBox>
        <LinkBox
          onMouseEnter={() => hoverAction("resume")}
          onMouseLeave={() => setUnderlineAni(false)}
        >
          <a href="#resume-section">
            <Links>Resume</Links>
            <LinkUnderline
              underlineAni={underlineAni}
              currHover={currHover}
              hoverID="resume"
            />
          </a>
        </LinkBox>
        <LinkBox
          onMouseEnter={() => hoverAction("contact")}
          onMouseLeave={() => setUnderlineAni(false)}
        >
          <a href="#contact-section">
            <Links>Contact</Links>
            <LinkUnderline
              underlineAni={underlineAni}
              currHover={currHover}
              hoverID="contact"
            />
          </a>
        </LinkBox>
      </LinksContainer>
      <SocialContainer>
        <a
          href="https://github.com/JorgeLVilla"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLink
            as={motion.div}
            variants={logoVariant}
            whileHover="hover"
          />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <TwitterLink
            as={motion.div}
            variants={logoVariant}
            whileHover="hover"
          />
        </a>
      </SocialContainer>
    </MainContainer>
  );
};

export default Nav;
