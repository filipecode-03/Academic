import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import { useState } from 'react'

function App() {

  const [dark, setDark] = useState(false)

  return (
    <div className={`font-['Inter'] min-h-screen p-8 lg:px-40 ${ dark ? 'bg-[#1D2029] text-white' : 'bg-white'}`}>
      <Nav dark={dark} setDark={setDark} />
      <Main dark={dark} />
    </div>
  )
}

export default App
