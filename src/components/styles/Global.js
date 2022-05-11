import { createGlobalStyle } from "styled-components";
import darkBack from "./darkDot.png";
// import grayBack from "./grayDot.png";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        /* background: ${({ theme }) => theme.colors.body}; */
        height: 200vh;
        font-size: 1.15em;
        /* background-image: url(${darkBack}); */
        background-position: center;
        background-size: cover;
    }
`;

export default GlobalStyles;
