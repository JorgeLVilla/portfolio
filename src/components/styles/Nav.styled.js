import styled from "styled-components";

export const StyledNav = styled.div`
  /* background-color: ${({ theme }) => theme.colors.div}; */
  color: #fefefe;
  display: flex;
  justify-content: center;
  border: solid red;

  div {
    display: flex;
    justify-content: center;
    align-self: center;
    padding: 0 5px;
    margin: 0 5px;
  }

  p {
    font-size: 30px;
  }

  img {
    height: 2em;
    align-self: center;
  }

  .homeIcon img {
    margin: 5px 25px;
    padding: 0 5px;
    position: absolute;
    left: 0;
    height: 2.5em;
    align-self: center;
  }

  .socialIcons img {
    display: flex;
    justify-items: end;
  }
`;
