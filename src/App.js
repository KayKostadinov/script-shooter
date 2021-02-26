import './App.css';
import Hud from "./components/Hud";
import Player from "./components/Player";
import { useState, useEffect } from "react";

function App() {
  const [stats, setStats] = useState({
    hp: 3,
    score: 0,

  })

  const [mouse, setMouse] = useState({x: 0, y:0});


  return (
    <div className="game" onMouseMove={e => setMouse({x: e.pageX, y: e.pageY})}>
      <Hud props={stats} setStats={setStats}/>
      <Player mouse={mouse} />
    </div>
  );
}

export default App;
