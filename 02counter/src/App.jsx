import "./App.css";
import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  const addValue = () => {
    setcount((prevCount) => prevCount + 1);
  };
  const removeValue = () => {
    setcount(count - 1);
  };
  return (
    <>
      <h1>Starting React Course</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer</p>
    </>
  );
}

export default App;
