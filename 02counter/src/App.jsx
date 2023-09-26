
import { useState } from 'react';
import './App.css'

function App() {
  
  // let counter = 15
  let [counter, setCounter] = useState(10)

  const increase = () => {
    setCounter(() => (
      counter < 20 ? counter + 1 : 20
    ))
    // console.log("clicked", {counter});
    console.log("clicked", Math.random());
  }

  const decrease = () => {
    setCounter(() => {
      return counter > 0 ? counter - 1 : 0
    }
    )
    // console.log("clicked", {counter});
    console.log("clicked", Math.random());
  }

  return (
    <div>
      <h1>Counter is : {counter}</h1>
      <button onClick={increase}>Increse {counter}</button>
      <br/>
      <button onClick={decrease}>Decrease {counter}</button>
    </div>
  )
}

export default App
