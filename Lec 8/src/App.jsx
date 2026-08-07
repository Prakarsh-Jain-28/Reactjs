import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [Counter,setCounter] = useState(0)


  const addVal = () => {
    // Counter += 1
    // setCounter(Counter)
    // setCounter(Counter)
    // setCounter(Counter)
    // setCounter(Counter) it goes as abundle and treats all as a one process so increments only 1


    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1) //now this treats prevCounter as the previous updated variable and hence individual change
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
