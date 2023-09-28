import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-3'>
        <div className='flex flex-wrap justify-center bg-white shadow-lg px-3 py-2 gap-3 rounded-lg'>
          <button className='outline-none px-4 text-white rounded-lg shadow-lg py-1' style={{backgroundColor: "red"}} onClick={() => setColor("red")}
          >Red</button>
          <button className='outline-none px-4 text-white rounded-lg shadow-lg py-1' style={{backgroundColor: "green"}} onClick={() => setColor("green")}
          >Green</button>
          <button className='outline-none px-4 text-white rounded-lg shadow-lg py-1' style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}
          >Blue</button>
          <button className='outline-none px-4 text-black rounded-lg shadow-lg py-1' style={{backgroundColor: "Yellow"}} onClick={() => setColor("yellow")}
          >Yellow</button>
          <button className='outline-none px-4 text-white rounded-lg shadow-lg py-1' style={{backgroundColor: "olive"}}  onClick={() => setColor("olive")}
          >Olive</button>
          <button className='outline-none px-4 text-black rounded-lg shadow-lg py-1' style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}
          >Pink</button>
          <button className='outline-none px-4 text-black rounded-lg shadow-lg py-1' style={{backgroundColor: "White"}} onClick={() => setColor("white")}
          >White</button>
          <button className='outline-none px-4 text-white rounded-lg shadow-lg py-1' style={{backgroundColor: "black"}} onClick={() => setColor("black")}
          >Black</button>
          <button className='outline-none px-4 text-white rounded-lg shadow-lg py-1' style={{backgroundColor: "orange"}} onClick={() => setColor("orange")}
          >Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
