import styled from "styled-components";
import { uiSize } from "../../utils/mobileSize";

export const StyledScroll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5em;
  /* background-color: white; */

  p {
    font-size: 20px;
    color: #fefefe;
  }

  img {
    margin-left: 10px;
    height: 30px;
    border-radius: 50%;
  }

  @media ${uiSize.mobile} {
    display: none;
`;
