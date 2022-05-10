import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Nav from "./components/Nav";
import Home from "./components/Home";

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
      </>
    </ThemeProvider>
  );
}

export default App;
