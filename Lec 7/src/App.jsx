import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from "./components/card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center mt-56">
        <h1 className="bg-amber-500 p-4 rounded-xl">
          Tailwind CSS
        </h1>
      </div>
      <Card name="Linked In" btn="View Profile"/>
      <Card name="Github" btn="View Streak"/>
      <Card />

    </>
  )
}

export default App
