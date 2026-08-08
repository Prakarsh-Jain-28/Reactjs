import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [onlynumber, setOnlyNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(onlynumber) str="0123456789"
    if(number) str+="0123456789"
    if(character) str+="!@#$%^&*(){}-=+<>?/|"
    for(let i=0;i<length;i++)
    {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
    
  },[length,character,number,onlynumber,setPassword])

  useEffect(()=>{passwordGenerator()},[length,character,number,onlynumber,passwordGenerator])


   //useRef hook
  const passwordRef = useRef(null)

  const copyClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <h1 className='mt-20 text-5xl font-bold text-white text-center'>Password Generator</h1>
        <div className='mt-10 justify-center w-full max-w-md mx-auto
          shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-500 font-bold text-xl'>

          <div className='flex rounded-lg overflow-hidden mb-8 border-none mt-4'>

            <input
              type="text"
              value={password}
              placeholder="password"
              className='outline-none border-none focus:outline-none focus:ring-0
                        w-full py-1 px-3 bg-white text-black mt-4 rounded-xl'
              readOnly
              ref={passwordRef}
            />

            <button
              className='mx-2 bg-blue-500 cursor-pointer mt-4 p-2 rounded-xl
                        border-none text-white outline-none focus:outline-none focus:ring-0'
              onClick={copyClipboard}
            >
              Copy
            </button>

          </div>


          <div className='flex justify-center text-sm gap-x-2 pb-4'>
            <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={100}
              value={length} className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}></input>
              <label>Length: {length}</label>
            </div>
          </div>


          <div className='flex justify-center text-sm gap-x-2 pb-4'>
            <div className='flex items-center gap-x-1 mx-3'>
              <input type='checkbox' checked={number}
              id="numberInput" 
              onChange={()=>{
                setNumber((prev)=>!prev)
                setOnlyNumber(false)
              }}></input>
              <label>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1 mx-3'>
              <input type='checkbox' checked={character}
              id="characterInput" 
              onChange={()=>{
                setCharacter((prev)=>!prev)
                setOnlyNumber(false)
              }}></input>
              <label>Character</label>
            </div>
            <div className='flex items-center gap-x-1 mx-3'>
              <input type='checkbox' checked={onlynumber}
              id="onlynumberInput" 
              onChange={()=>{
                setOnlyNumber((prev)=>!prev)
                setNumber(false)
                setCharacter(false)
              }}></input>
              <label>Only Numbers</label>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
