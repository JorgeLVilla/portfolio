import {
  StyledProjects,
  ProjectsContainer,
  SingleProjectCont,
  DemoBLock,
  ProjUnderline,
  DescriptionText,
} from "./styles";
import { projectsVariant, singleProjVariant } from "./variants";
import { useState } from "react";
import pokeImg from "../../assets/pokeImg.png";
import newsAppImg from "../../assets/newsAppImg.png";
import gameApp from "../../assets/gameApp.png";
import amazon from "../../assets/amazon.png";
import { data } from "../../utils/DataProjects";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Projects = () => {
  const [projectsContainerRef, projectsContainerInView] = useInView({
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
    // ref={projectsContainerRef}
    // as={motion.div}
    // variants={projectsVariant}
    // initial="hidden"
    // animate={projectsContainerInView ? "visible" : "hidden"}
    >
      <div>
        <h1
          id="projects-section"
          ref={projectsContainerRef}
          as={motion.div}
          variants={projectsVariant}
          initial="hidden"
          animate={projectsContainerInView ? "visible" : "hidden"}
        >
          Projects.
        </h1>
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
          <DescriptionText>
            <h3>{data.pokeApp.description}</h3>
          </DescriptionText>
          <DemoBLock>
            <div>
              <a
                href="https://github.com/Lap343/poke-app"
                target="_blank"
                without
                rel="noreferrer"
              >
                <p>Github</p>
              </a>
            </div>
            <div>
              <a
                href="https://pokedex-app-3fb51.web.app/"
                target="_blank"
                without
                rel="noreferrer"
              >
                <p>Live Demo</p>
              </a>
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
          <DescriptionText>
            <h3>{data.movieApp.description}</h3>
          </DescriptionText>
          <DemoBLock>
            <div>
              <a
                href="https://github.com/krferrell/AngreeBirdz"
                target="_blank"
                without
                rel="noreferrer"
              >
                <p>Github</p>
              </a>
            </div>
            <div>
              <a
                href="https://reactoads-movie-app-7c45e.web.app/"
                target="_blank"
                without
                rel="noreferrer"
              >
                <p>Live Demo</p>
              </a>
            </div>
          </DemoBLock>
        </SingleProjectCont>

        <SingleProjectCont
          className="amazonContainer"
          as={motion.div}
          variants={singleProjVariant}
          whileHover="hover"
          onMouseEnter={() => hoverAction("amazon")}
          onMouseLeave={() => setUnderlineAni(false)}
        >
          <img src={amazon} alt="amazon clone app" />
          <div className="amazonLineProj">
            <h1>{data.amazonApp.title}</h1>
            <ProjUnderline
              underlineAni={underlineAni}
              currHover={currHover}
              hoverID="amazon"
            />
          </div>
          <DescriptionText>
            <h3>{data.amazonApp.description}</h3>
          </DescriptionText>
          <span>Live demo coming soon!</span>
          <DemoBLock>
            <div>
              <p>Github</p>
            </div>
          </DemoBLock>
        </SingleProjectCont>

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
          <DescriptionText>
            <h3>{data.gameApp.description} Live demo coming soon!</h3>
          </DescriptionText>
          <span>Live demo coming soon!</span>
          <DemoBLock>
            <div>
              <a
                href="https://github.com/krferrell/AngreeBirdz"
                target="_blank"
                without
                rel="noreferrer"
              >
                <p>Github</p>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/krferrell/AngreeBirdz"
                target="_blank"
                without
                rel="noreferrer"
              >
                <p>Live Demo</p>
              </a>
            </div>
          </DemoBLock>
        </SingleProjectCont>
      </ProjectsContainer>
    </StyledProjects>
  );
};

export default Projects;
