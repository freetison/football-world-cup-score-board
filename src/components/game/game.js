import React, { useEffect, useState, useRef } from "react";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { addSummary } from "../../app/features/summary/summarySlice";
import styles from "./game.module.css";
import Team from "../team/team";

const Game = ({ data }) => {
  const maxGameTime = 9;
  const [game] = useState(data);
  const [gameBegin, setGameBegin] = useState(false);
  const [finished] = useState(false);
  const [score, setScore] = useState({});
  const [playingTime, setPlayingTime] = useState(0);
  const [beginTime, setBeginTime] = useState();

  const dispatch = useDispatch();

  const thisGame = useRef(null);
  const gameTimer = useRef(null);

  const handlerBeginBtn = (e) => {
    setGameBegin(true);
    timerStart();
    setScore({ time: 0, home: 0, away: 0 });
    setBeginTime(format(new Date(), "dd-MM-yyyy hh:MM:ss"));
  };

  const goalHandler = async (team, newScore) => {
    console.log("Goooool  from: " + team);
    const homeScore = score.home + newScore.home;
    const awayScore = score.away + newScore.away;
    setScore({
      time: playingTime,
      home: homeScore,
      away: awayScore,
    });
  };

  const timerStart = () => {
    gameTimer.current = setInterval(() => {
      setPlayingTime((time) => (time < maxGameTime ? time + 1 : time));
    }, 1000);
  };

  const timerStop = () => {
    clearInterval(gameTimer.current);
    setPlayingTime(maxGameTime);
  };

  useEffect(() => {
    if (playingTime === maxGameTime && finished === false) {
      dispatch(
        addSummary({
          beginAt: beginTime,
          teams: { home: game.home, away: game.away },
          score: { time: playingTime, home: score.home, away: score.away },
        })
      );
      thisGame.current.style.display = "none";
      timerStop();
    }
  }, [beginTime, playingTime]);

  return (
    <div className={styles.Game} data-testid="Game" ref={thisGame}>
      <Team
        name={game.home}
        type={"home"}
        begin={gameBegin}
        goalNotifier={goalHandler}
      ></Team>
      <div>
        {!gameBegin && <button onClick={handlerBeginBtn}>Start</button>}
        <span>{game.stadium}</span>
        <span>{`${playingTime}'`}</span>
      </div>
      <Team
        name={game.away}
        type={"away"}
        begin={gameBegin}
        goalNotifier={goalHandler}
      ></Team>
    </div>
  );
};

export default Game;
