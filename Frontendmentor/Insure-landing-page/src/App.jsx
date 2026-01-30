import { useState } from 'react'
import NavBar from './components/NavBar'
import Prin from './components/Prin'
import End from './components/End'

function App() {

  return (
    <div className='min-h-screen font-["Karla"]'>
      <NavBar />
      <Prin />
      <End />
    </div>
  )
}

export default App
