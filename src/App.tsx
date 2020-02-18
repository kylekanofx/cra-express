import React from "react";
import styles from "./App.module.scss";
import Button from "./Button/Button";
import ButtonStyled from "./ButtonStyled/ButtonStyled";
import ButtonFox from "./ButtonFox/ButtonFox";

const App = () => (
  <div className={styles.app}>
    {/*<Button>I am a SCSS modules button</Button>*/}
    {/*<ButtonStyled>I am a Styled Component Button</ButtonStyled>*/}
    <ButtonFox>I am a Fox Component Button</ButtonFox>
  </div>
);

export default App;
