import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("Grey");

  document.body.style.backgroundColor = color;

  return (
    <div className="main">
      <div className="btns" style={{display: "flex", flexWrap: "wrap"}}>
        <button className="btn" onClick={() => setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
        <button className="btn" onClick={() => setColor('white')} style={{backgroundColor:"white"}}>White</button>
        <button className="btn" onClick={() => setColor('red')} style={{backgroundColor:"red"}}>Red</button>
        <button className="btn" onClick={()=> setColor('yellow')} style={{backgroundColor:"yellow"}} >Yellow</button>
        <button className="btn" onClick={()=> setColor('orange')} style={{backgroundColor:"orange"}} >orange</button>
        <button className="btn" onClick={()=> setColor('blue')} style={{backgroundColor:"blue" }}>Blue</button>
        <button className="btn" onClick={()=> setColor('green')} style={{backgroundColor:"green"}}>Green</button>
        <button className="btn" onClick={() => setColor('Grey')} style={{backgroundColor:"Grey"}}>Grey</button>
      </div>
    </div>
  ); 
}

export default App;
