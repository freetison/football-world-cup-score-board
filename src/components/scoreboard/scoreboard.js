import React from "react";
import styles from "./scoreboard.module.css";
import Game from "../game/game";
import Summary from "../summary/summary";
import { useSelector } from "react-redux";

const Scoreboard = () => {
  const boardData = useSelector((state) => state.board);

  return (
    <>
      <div className={styles.Scoreboard} data-testid="Scoreboard">
        {boardData.map((game) => {
          return (
            <div key={game.id}>
              <Game data={game}></Game>
            </div>
          );
        })}
      </div>
      <Summary />
    </>
  );
};

export default Scoreboard;
