import styled from "styled-components";

export const StyledNav = styled.div`
  /* background-color: ${({ theme }) => theme.colors.div}; */
  color: #fefefe;
  display: flex;
  justify-content: center;
  /* border: solid red; */
  max-height: 70px;

  div {
    display: flex;
    justify-content: center;
    align-self: center;
    padding: 0 5px;
    margin: 0 5px;
  }

  p {
    font-size: 20px;
  }

  img {
    height: 25px;
    align-self: center;
    margin-left: 10px;
  }

  .homeIcon img {
    margin: 10px 35px;
    padding: 0 5px;
    position: absolute;
    left: 0;
    height: 50px;
    align-self: center;
  }

  .socialIcons {
    position: absolute;
    right: 0;
    margin-right: 200px;
  }
  .socialIcons img {
    margin-left: 20px;
  }
`;
