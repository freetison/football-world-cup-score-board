import React from "react";
import styles from "./summary.module.css";
import { useSelector } from "react-redux";

const Summary = () => {
  // const [totalScore, setTotalScore] = useState([]);
  const gameResults = useSelector((state) => state.summary);

  console.log("filters", gameResults);

  const totalScore = gameResults
    .map((item) => ({
      ...item,
      totalScore: item.score.home + item.score.away,
    }))
    .sort(
      (a, b) =>
        b.totalScore - a.totalScore ||
        a.score.time - b.score.time ||
        b.beginAt - a.beginAt
    );

  const renderedResults = [...totalScore].map((game, index) => (
    <div key={index}>
      <span>
        {game.teams.home} {game.score.home} - {game.teams.away}{" "}
        {game.score.away}
      </span>
    </div>
  ));

  return (
    <div className={styles.Summary} data-testid="Summary">
      {renderedResults}
    </div>
  );
};

export default Summary;
