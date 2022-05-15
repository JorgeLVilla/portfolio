import styled from "styled-components";
import phoneIcon from "../../assets/phoneIcon.svg";

export const StyledContact = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  margin-left: 250px;
  margin-top: 150px;

  h1 {
    font-size: 90px;
    text-align: center;
    color: #fefefe;
  }

  h3 {
    color: #fefefe;
    margin: 0 auto;
    text-align: center;
    width: 80%;
  }
`;

export const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  padding: 0;
  height: 40%;
  margin-top: 40px;

  form input {
    height: 40px;
    width: 550px;
    margin-bottom: 10px;
    border-radius: 5px;
    text-align: center;
    border: 0;
  }
`;

export const StyledSend = styled.div`
  input {
    background-color: #1a1d23;
    border-color: green;
    color: #fefefe;
    transition: all 0.5s;
    &:hover {
      box-shadow: inset 18em 0 0 0 #5ea9be, inset -18em 0 0 0 #5ea9be;
      border-color: #5ea9be;
      color: #1a1d23;
      background-color: #5ea9be;
    }
    cursor: pointer;
  }
  /* text-align: center;
    color: #fefefe;
    background-color: #1a1d23;
    border-width: 1px;
    border-color: #0000;
    cursor: pointer;
    border: solid white 1px; */
`;

export const PhoneContainer = styled.div`
  height: 80%;

  img {
    height: 480px;
    margin-bottom: 100px;
  }
`;

export const PhoneImg = styled.div`
  background-image: url(${phoneIcon});
  background-position: center;
  background-repeat: no-repeat;
`;

export const ContactMasterContainer = styled.div`
  display: flex;
  height: 80vh;
`;
