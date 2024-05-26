import { useState , useCallback , useEffect , useRef } from 'react'
import "./App.css"

function App() {

  const [password , setPassword] = useState("")
  const [AllowNumbers , setAllowNumbers] = useState(false)
  const [AllowCharacters , setAllowCharacters] = useState(false)
  const [length , setLength] = useState(8)
  const inputRefrence = useRef()
  

  const generatePassword = useCallback(()=>{
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     let pass = ""
     if(AllowNumbers){
      str += "123456890"
     }
     if(AllowCharacters){
      str += "!@#$%^&*_+=~`"
     }
     for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
     }
     setPassword(pass)
     console.log(pass);

  },[setPassword , length , AllowNumbers , AllowCharacters])

  useEffect(()=>{
    generatePassword()
  },[length , AllowCharacters , AllowNumbers , generatePassword ])

  const copyText = useCallback(()=>{
    inputRefrence.current?.select(password)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="h-screen main bg-gray-900 w-full flex justify-center items-center">
        <h1 className='absolute top-16  font-bold   text-white text-5xl'>Random Password Generator</h1>
        <div className="bg-gray-600 h-2/4 w-2/4 text-white rounded-lg justify-around">
          <div className="flex justify-center mt-14 mb-16">
            <input type="text" className='w-2/4  rounded-sm h-10 text-center font-semibold text-xl text-purple-500 selection:bg-green-300' placeholder='Password'
            value={password}
            readOnly
            ref={inputRefrence}
            />
            <button className='cursor-pointer bg-green-500 rounded-sm text-xl font-bold  h-10 p-1.5 hover:scale-105 hover:bg-green-400 duration-100 '
            onClick={copyText}
            >Copy</button>
          </div>
          <div className='flex justify-center'>
            <input className='cursor-pointer w-1/6'
             type="range"
              min={8}
              max={25}
              value={length}
              onChange={(e)=>{
                setLength(e.target.value)
              }}
            />
            <div className='mx-3'>
                <input className="mx-3 size-4 cursor-pointer "type="checkbox" id='AllowNum' 
                defaultChecked = {AllowNumbers}
                onChange={()=>{
                  setAllowNumbers((prev)=>!prev)
                }}/><label htmlFor="AllowNum" className='text-xl font-bold '>Numbers</label>
                <input className="mx-3 size-4 cursor-pointer"type="checkbox" id="AllowChar"
                defaultChecked={AllowCharacters}
                onChange={()=>{
                  setAllowCharacters((prev)=>!prev)
                }}/><label htmlFor="AllowChar" className='text-xl font-bold '>Characters</label>
            </div>
          </div>
          <h3 className='text-center mt-12 text-3xl font-semibold font-mono'>length({length})</h3>
        </div>
      </div>
    </>
  )
}

export default App
