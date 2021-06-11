import "./App.css";
import React, {useState} from 'react';
import bg from "./images/pattern-bg.png";
import Map from "./components/Map";
import IpTracker from "./components/IpTracker";

function App() {
  const [position, setPosition] = useState([0,0])
	return (
		<div>
			<img src={bg}></img>
      <IpTracker setPosition={setPosition}/>
      <Map position={position}/>
		</div>
	);
}

export default App;
