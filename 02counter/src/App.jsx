// hooks

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let counter = 15;

  const count = document.getElementsByTagName("h2");
  console.log(count);

  const addValue = () => {
    counter += 1;
    console.log(counter);
  };

  const removeValue = () => {
    console.log(counter);
    counter -= 1;
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
