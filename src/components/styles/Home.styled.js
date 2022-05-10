import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .hello {
    display: flex;
  }

  .hello img {
    margin-left: 20px;
    padding: 0;
    height: 8em;
    border: solid blue;
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
  }

  h1,
  h5 {
    color: #fefefe;
    margin: 0 0;
    padding: 0 0;
    border: solid blue;
  }

  h1 {
    font-size: 130px;
  }

  h5 {
    font-size: 40px;
  }
  img {
    height: 30em;
  }
`;
