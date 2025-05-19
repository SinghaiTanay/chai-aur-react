import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  let tanayPrice = 20
  let myArr = [1,2,3,4,5,6,7,8,9]
  return (
    <>
   <body class="bg-[#2f2f2f] h-screen m-0">
  <div>
    <Card name='Tanay' price={tanayPrice} arr={myArr}/>
    <Card name='Yash' arr={myArr}/>
  </div>
</body>
    
    </>
  )
}

export default App
