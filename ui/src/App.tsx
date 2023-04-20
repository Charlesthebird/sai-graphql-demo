import { useEffect } from "react";
import BatImg from "./assets/bat.png";

function App() {
  // TODO: Uncomment this.
  // const [data, setData] = useState<any>();

  useEffect(() => {
    (async () => {
      // TODO: Update URL here.
      // const data = await fetch("localhost:8080", {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // setData(await data.json());
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
            {/* 
            // TODO: Do this for rendering the data and remove the placeholders.
            {data.map(d=>(<img key={d.image_src_url} className='plan-item' src={d.image_src_url}/>))} 
            */}
            <img className="plan-item" />
            <img className="plan-item" />
            <img className="plan-item" />
            <img className="plan-item" />
          </div>
        </div>
        <div className="phones">
          Phones:
          <div className="phones-list">
            {/* 
            // TODO: Do this for rendering the data and remove the placeholders.
            {data.map(d=>(<img key={d.image_src_url} className='phone-item' src={d.image_src_url}/>))} 
            */}
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
