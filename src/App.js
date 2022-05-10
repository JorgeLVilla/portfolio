import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import GlobalStyles from "./components/styles/Global";

// import { Container } from "./components/styles/Container.styled";

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
        <Nav></Nav>
      </>
    </ThemeProvider>

    /* <div className="App">

  </div>; */
  );
}

export default App;
