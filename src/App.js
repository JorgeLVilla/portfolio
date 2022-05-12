import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ParticlesBack from "./components/ParticlesBack";
import { ContainerContent } from "./components/styles/ContainerContent.styled";
import { ContainerNav } from "./components/styles/ContainerNav.styled";
import "./App.css";

const theme = {
  colors: {
    header: "blue",
    body: "red",
    footer: "black",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ParticlesBack />
        <GlobalStyles />
        <ContainerNav>
          <Nav />
        </ContainerNav>
        <ContainerContent>
          <Home />
          <About />
          <Projects />
          <Contact />
        </ContainerContent>
      </>
    </ThemeProvider>
  );
}

export default App;
