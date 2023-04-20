import { useEffect } from "react";
import BatImg from "./assets/bat.png";

function App() {
  useEffect(() => {
    (async () => {
      // TODO: Update URL here
      // const data = await fetch("localhost:8080");
    })();
  }, []);

  return (
    <div className="app-container">
      <div className="batman-container">
        <img src={BatImg} alt="Bat" />
      </div>
      <div className="bottom-drawer">
        <div className="family-plans">
          Family Plan:
          <div className="family-plans-list">
            <img className="plan-item" />
            <img className="plan-item" />
            <img className="plan-item" />
            <img className="plan-item" />
          </div>
        </div>
        <div className="phones">
          Phones:
          <div className="phones-list">
            <img className="phone-item" />
            <img className="phone-item" />
            <img className="phone-item" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
