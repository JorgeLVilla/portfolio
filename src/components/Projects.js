import {
  StyledProjects,
  ProjectsContainer,
  SingleProjectCont,
  DemoBLock,
} from "./styles/Projects.styled";
import pokeImg from "../assets/pokeImg.png";
import newsAppImg from "../assets/newsAppImg.png";
import { data } from "../utils/DataProjects";

const Projects = () => {
  return (
    <StyledProjects>
      <div>
        <h1>Projects.</h1>
      </div>
      <ProjectsContainer>
        <SingleProjectCont className="pokeContainer">
          <img src={pokeImg} alt="pokemon app" />
          <h1>{data.pokeApp.title}</h1>
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

        <SingleProjectCont className="movieContainer">
          <img src={newsAppImg} alt="pokemon app" />
          <h1>{data.movieApp.title}</h1>
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

        <SingleProjectCont className="amazonContainer">
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
        </SingleProjectCont>

        <SingleProjectCont className="gameContainer">
          <img src={pokeImg} alt="pokemon app" />
          <h1>{data.gameApp.title}</h1>
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
