import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-2 rounded-3xl">
          <button
            className="outline-none py-1 px-4 rounded-full shadow-lg text-white bg-red-700 pl-3"
            onClick={() => setColor("#FF0000")}
          >
            Red
          </button>
          <button
            className="outline-none py-1 px-4 rounded-full shadow-lg text-white bg-green-700 pl-3"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none py-1 px-4 rounded-full shadow-lg text-white bg-blue-700 pl-3"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
