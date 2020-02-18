import React from "react";
import styled from "styled-components";
// import Fox from "@ofx-com/fox-design-tokens";
const { default: Fox } = require("@ofx-com/fox-design-tokens");

const ButtonFox = styled.button`
  ${Fox.styles.button1};
  font-size: 32px;
  background: ${Fox.colors.primary.ofxOrange};
  padding: ${Fox.space.l}px;
  border-radius: 10px;
  cursor: pointer;
  border: 0;
  outline: 0;
`;

export default ButtonFox;
