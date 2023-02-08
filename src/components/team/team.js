import React, { useState } from "react";
import styles from "./team.module.css";

const Team = ({ name, type, begin, goalNotifier }) => {
  const [score, setScore] = useState(0);

  const handlerBtn = (e) => {
    const newScore =
      type === "home" ? { home: 1, away: 0 } : { home: 0, away: 1 };
    setScore(score + 1);
    goalNotifier(name, newScore);
  };

  return (
    <div className={styles.Team} data-testid="Team">
      <span data-test-id="teamName">{name}</span>
      <span data-test-id="score">{score}</span>
      {begin && <button onClick={handlerBtn}>make a goal</button>}
    </div>
  );
};

export default Team;
