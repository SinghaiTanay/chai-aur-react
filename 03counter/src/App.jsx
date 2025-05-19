import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 15

  const addValue = () => {
    // counter = counter + 1;
    // document.querySelector('h2').innerHTML = `Counter Value: ${counter}`
    if ((counter+1) <= 20){
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    }
  }
  
  const decreaseValue = () => {
    // counter--;
    // document.querySelector('h2').innerHTML = `Counter Value: ${counter}`
    if ((counter-1) >= 0){
    setCounter(--counter) // dom bhi changge hoga
    }
  }

  let [counter, setCounter] = useState(0)

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
