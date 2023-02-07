import React from "react";
import styles from "./scoreboard.module.css";
import { useSelector } from "react-redux";

const Scoreboard = () => {
  const boardData = useSelector((state) => state.board);

  return (
    <>
      <div className={styles.Scoreboard} data-testid="Scoreboard"></div>
    </>
  );
};

export default Scoreboard;
