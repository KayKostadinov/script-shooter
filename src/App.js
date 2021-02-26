import './App.css';
import Hud from "./components/Hud";
import Player from "./components/Player";
import Bullet from "./components/Bullet";
import { useState, useEffect } from "react";

function App() {
  const [stats, setStats] = useState({
    hp: 3,
    score: 0,

  })

  const [mouse, setMouse] = useState({x: 0, y:0});
  const [shoot, setShoot] = useState(false);
  const [shots, setShots] = useState([]);

  const handleShooting = () => {
    setShoot(false);
    setShots([...shots, 1]);
    setTimeout(() => {
      setShoot(true);
    }, 1000);
  }



  return (
    <div className="game" onMouseMove={e => setMouse({x: e.pageX, y: e.pageY})} onMouseDown={() => handleShooting()} >
      <Hud props={stats} setStats={setStats}/>
      <Player mouse={mouse} />
      <Bullet canShoot={shoot} shots={shots} position={mouse} />
    </div>
  );
}

export default App;
