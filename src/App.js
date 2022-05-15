import GlobalStyles from "./components/styles/Global";
import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ParticlesBack from "./components/ParticlesBack";
// import ScrollUp from "./components/ScrollUp/ScrollUp";
import Resume from "./components/Resume/Resume";
import { ContainerContent } from "./components/styles/ContainerContent.styled";
import { ContainerNav } from "./components/styles/ContainerNav.styled";
import "./App.css";

function App() {
  return (
    <>
      <ParticlesBack />
      <GlobalStyles />
      <ContainerNav>
        <Nav />
      </ContainerNav>
      <ContainerContent>
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
        {/* <ScrollUp /> */}
      </ContainerContent>
    </>
  );
}

export default App;
