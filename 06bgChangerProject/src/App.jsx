import { useState } from 'react'

function App() {
  let [color, setColor] = useState("olive")
  return (
    <>
      <div className='w-full h-screen duration-2000' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor("Red")} style={{backgroundColor:"Red"}}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor("Green")} style={{backgroundColor:"Green"}}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor("Blue")} style={{backgroundColor:"Blue"}}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor("Violet")} style={{backgroundColor:"Violet"}}>Violet</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App