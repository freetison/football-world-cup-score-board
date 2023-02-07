import "./App.css";
import Header from "./components/header/header";
import Scoreboard from "./components/scoreboard/scoreboard";

function App() {
  return (
    <>
      <div className="row">
        <Header title="Scoreboard" style={{ flex: "0 0 100%" }}></Header>
      </div>

      <div className="row">
        <Scoreboard></Scoreboard>
      </div>
    </>
  );
}

export default App;
