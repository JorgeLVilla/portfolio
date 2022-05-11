import styled from "styled-components";

export const StyledContact = styled.div`
  height: 80vh;

  h1 {
    font-size: 90px;
    text-align: center;
    color: #fefefe;
  }

  h3 {
    color: #fefefe;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

export const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  form input {
    height: 40px;
    width: 500px;
    margin: 10px;

    text-align: center;
  }
`;

export const StyledSend = styled.div`
  input {
    text-align: center;
    color: #fefefe;
    background-color: #1a1d23;
    border-width: 1px;
    border-color: #0000;
  }
`;
