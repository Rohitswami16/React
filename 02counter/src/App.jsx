// hooks

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const [msg, setMsg] = useState("");

  // let counter = 15;
  // const count = document.getElementsByTagName("h2");
  // console.log(count);

  const addValue = () => {
    // counter += 1
    // console.log(counter);
    if (counter == 20) {
      // alert("You have reached the maximum value");
      setMsg("You have reached the maximum value");
    } else {
      setMsg("");
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    // console.log(counter);
    // counter -= 1;
    if (counter === 0) {
      // alert("you have reached minimum value");
      setMsg("You have reached the minimum value");
    } else {
      setMsg("");
      setCounter(counter - 1);
    }
  };

  return (
    <div className="maincon">
      <h1>Simple Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <div className="con">
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
      <h2>{msg}</h2>
      </div>
  );
}

export default App;
