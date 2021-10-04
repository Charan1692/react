import React, { useState } from "react";
import "./styles/style.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="app">
      <h1>Current Value: {counter}</h1>
      <button
        onClick={() => {
          if (counter > 0) {
            setCounter((prev) => prev - 1);
          }
        }}
      >
        Decrease
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button
        onClick={() => {
          if (counter < 9) {
            setCounter((prev) => prev + 1);
          }
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default App;
