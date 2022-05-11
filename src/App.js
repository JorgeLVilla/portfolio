import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
// import ScrollDown from "./components/ScrollDown";

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
        <GlobalStyles />
        <Nav />
        <Home />
        <About />
        <Projects />
      </>
    </ThemeProvider>
  );
}

export default App;
