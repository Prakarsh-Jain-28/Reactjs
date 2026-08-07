import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [Counter,setCounter] = useState(0)


  const addVal = () => {
    Counter += 1
    setCounter(Counter)
  }
  const decVal = () => {
    Counter -= 1
    setCounter(Counter)
  }
  const resetVal = () => {
    Counter = 0
    setCounter(Counter)
  }

  return (
    <>
        <h1>Counter App</h1>
        <h2>Counter Value: {Counter}</h2>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={addVal}>Increment</button>
        <br></br>
        <button onClick={decVal}>Decrement</button>
        <br />
        <button onClick={resetVal}>Reset</button>
    </>
  )
}

export default App
