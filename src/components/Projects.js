import {
  StyledProjects,
  ProjectsContainer,
  SingleProjectCont,
  DemoBLock,
  ProjUnderline,
} from "./styles/Projects.styled";
import { useState } from "react";
import pokeImg from "../assets/pokeImg.png";
import newsAppImg from "../assets/newsAppImg.png";
import gameApp from "../assets/gameApp.png";
import { data } from "../utils/DataProjects";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const projectsVariant = {
  hidden: {
    y: "20vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const singleProjVariant = {
  hover: {
    scale: 1.05,
  },
};

const Projects = () => {
  const [projectsContainerRef, projectsContaineInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [underlineAni, setUnderlineAni] = useState(false);

  const [currHover, setCurrHover] = useState("");

  const hoverAction = (hoverID) => {
    setUnderlineAni(true);
    setCurrHover(hoverID);
  };
  return (
    <StyledProjects
      ref={projectsContainerRef}
      as={motion.div}
      variants={projectsVariant}
      initial="hidden"
      animate={projectsContaineInView ? "visible" : "hidden"}
    >
      <div>
        <h1 id="projects-section">Projects.</h1>
      </div>
      <ProjectsContainer>
        <SingleProjectCont
          className="pokeContainer"
          as={motion.div}
          variants={singleProjVariant}
          whileHover="hover"
          onMouseEnter={() => hoverAction("poke")}
          onMouseLeave={() => setUnderlineAni(false)}
        >
          <img src={pokeImg} alt="pokemon app" />
          <div className="pokeLineProj">
            <h1>{data.pokeApp.title}</h1>

            <ProjUnderline
              underlineAni={underlineAni}
              currHover={currHover}
              hoverID="poke"
            />
          </div>
          <h3>{data.pokeApp.description}</h3>
          <DemoBLock>
            <div>
              <p>Github</p>
            </div>
            <div>
              <p>Live Demo</p>
            </div>
          </DemoBLock>
        </SingleProjectCont>

        <SingleProjectCont
          className="movieContainer"
          as={motion.div}
          variants={singleProjVariant}
          whileHover="hover"
          onMouseEnter={() => hoverAction("movie")}
          onMouseLeave={() => setUnderlineAni(false)}
        >
          <img src={newsAppImg} alt="pokemon app" />
          <div className="movieLineProj">
            <h1>{data.movieApp.title}</h1>
            <ProjUnderline
              underlineAni={underlineAni}
              currHover={currHover}
              hoverID="movie"
            />
          </div>
          <h3>{data.movieApp.description}</h3>
          <DemoBLock>
            <div>
              <p>Github</p>
            </div>
            <div>
              <p>Live Demo</p>
            </div>
          </DemoBLock>
        </SingleProjectCont>

        {/* <SingleProjectCont className="amazonContainer">
          <img src={pokeImg} alt="pokemon app" />
          <h1>{data.amazonApp.title}</h1>
          <h3>{data.amazonApp.description}</h3>
          <DemoBLock>
            <div>
              <p>Github</p>
            </div>
            <div>
              <p>Live Demo</p>
            </div>
          </DemoBLock>
        </SingleProjectCont> */}

        <SingleProjectCont
          className="gameContainer"
          as={motion.div}
          variants={singleProjVariant}
          whileHover="hover"
          onMouseEnter={() => hoverAction("game")}
          onMouseLeave={() => setUnderlineAni(false)}
        >
          <img className="gameImgSize" src={gameApp} alt="game app" />
          <div className="gameLineProj">
            <h1>{data.gameApp.title}</h1>
            <ProjUnderline
              underlineAni={underlineAni}
              currHover={currHover}
              hoverID="game"
            />
          </div>
          <h3>{data.gameApp.description}</h3>
          <DemoBLock>
            <div>
              <p>Github</p>
            </div>
            <div>
              <p>Live Demo</p>
            </div>
          </DemoBLock>
        </SingleProjectCont>
      </ProjectsContainer>
    </StyledProjects>
  );
};

export default Projects;
