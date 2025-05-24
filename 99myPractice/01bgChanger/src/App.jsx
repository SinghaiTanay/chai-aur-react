import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <>
      <div className="bg-amber-500 h-screen flex items-end justify-center duration-1000" style={{backgroundColor: color}}>
        <div className="fixed bg-white rounded-4xl py-2 px-3 flex justify-center gap-4 bottom-12">
          <button className="text-white rounded-3xl px-4 py-2" onClick={() => setColor("Red")} style={{backgroundColor: "Red"}}>Red</button>
          <button className="text-white rounded-3xl px-4 py-2" onClick={() => setColor("Green")} style={{backgroundColor: "Green"}}>Green</button>
          <button className="text-black rounded-3xl px-4 py-2" onClick={() => setColor("Yellow")} style={{backgroundColor: "Yellow"}}>Yellow</button>
          <button className="text-white rounded-3xl px-4 py-2" onClick={() => setColor("Gold")} style={{backgroundColor: "Gold"}}>Gold</button>
          <button className="text-white rounded-3xl px-4 py-2" onClick={() => setColor("Blue")} style={{backgroundColor: "Blue"}}>Blue</button>
          <button className="text-white rounded-3xl px-4 py-2" onClick={() => setColor("Brown")} style={{backgroundColor: "Brown"}}>Brown</button>
        </div>
      </div>
    </>
  );
}

export default App;
