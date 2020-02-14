import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children }: { children: any }) => (
  <button className={styles.txt}>{children}</button>
);

export default Button;
