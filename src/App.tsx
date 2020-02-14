import React from "react";
import styles from "./App.module.scss";
import Button from "./Button/Button";
import ButtonStyled from "./ButtonStyled/ButtonStyled";

const App = () => (
  <div className={styles.app}>
    {/*<Button>I am a SCSS modules button</Button>*/}
    <ButtonStyled>I am a Styled Component Button</ButtonStyled>
  </div>
);

export default App;
