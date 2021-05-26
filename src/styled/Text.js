import styled, { css } from "styled-components";
// #364fc7
const Text = styled.span`
  ${(props) =>
    props.special &&
    css`
      background: #4263eb;
      color: white;
      display: inline-block;
      padding: 5px;
      border-radius: 4px;
    `}
  ${(props) =>
    props.inline &&
    css`
      background: lightgray;
      display: inline-block;
      padding: 5px;
      border-radius: 4px;
    `};
`;

export default Text;
