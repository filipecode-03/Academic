import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import { useState } from 'react'
import './App.css'

function App() {

  const [dark, setDark] = useState(false)

  return (
    <div className={`font-['Inter'] min-h-screen p-8 ${ dark ? 'bg-black text-white' : 'bg-white'}`}>
      <Nav dark={dark} setDark={setDark} />
      <Main dark={dark} />
    </div>
  )
}

export default App
