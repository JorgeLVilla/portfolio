import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Nav from "./components/Nav";

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
      </>
    </ThemeProvider>
  );
}

export default App;
