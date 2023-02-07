import React from "react";
import styles from "./header.module.css";

const Header = ({ title }) => (
  <div className={styles.Header} data-testid="Header">
    <h1> {title} </h1>
  </div>
);

export default Header;
