import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [countletter, setCountletter] = useState("")

  const handletext = (e)=>{setCountletter(e.target.value)}
 return(
  <>
  <input onChange={handletext} value={countletter} type="text" />

  <p>Textlenth:{countletter.length}</p>

  {countletter.length <= 15 ? <p>The text is too short</p>: null}

  {countletter.length > 15 ? <p>The text is too long</p>: null}

  </>


 )

}

export default App
