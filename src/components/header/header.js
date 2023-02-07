import React from "react";
import styles from "./header.module.css";

const Header = ({ title, style }) => (
  <div className={styles.Header} style={style} data-testid="Header">
    <h1> {title} </h1>
  </div>
);

export default Header;
