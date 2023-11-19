import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); //react hook for updating specific values
  return (
    <>
      <button
        onClick={() => {
          const prevCount = count;
          setCount(prevCount + 1);
        }}
      ></button>
      <p>{count}</p>
    </>
  );
}

export default App;
