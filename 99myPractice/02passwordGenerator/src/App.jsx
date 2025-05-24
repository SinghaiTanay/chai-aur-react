import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(6)
  const [charAllowed, setCharAllowed] = useState(false)
  const [numAllowed, setNumAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (charAllowed) str += "!@#$%^&*"
    if (numAllowed) str += "1234567890"

    for (let i = 1; i <= length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length + 1))
      pass += char
    }

    setPassword(pass)
  }, [length, charAllowed, numAllowed, setPassword])

  const clipToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numAllowed])

  return (
    <>
      <div>
        <h1>Password Generator</h1>
        <div>
          <input type="text"
          placeholder="Password"
          value={password}
          readOnly
          ref={passwordRef}
          />
          <button onClick={clipToClipboard}>Copy</button>
        </div>
        <div>
          <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-progress"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          <label>Length: {length}</label>
        </div>
        <div>
          <input
          type="checkbox"
          name=""
          id="numAllowed"
          defaultValue={numAllowed}
          onChange={() => {
                setNumAllowed((prev) => !prev);
              }}/>
          <label>Number Allowed</label>
        </div>
        <div>
          <input
          type="checkbox"
          name=""
          id="charAllowed"
          defaultValue={charAllowed}
          onChange={() => {
                setCharAllowed((prev) => !prev);
              }}/>
          <label>Character Allowed</label>
        </div>
      </div>
    </>
  );
}

export default App;
