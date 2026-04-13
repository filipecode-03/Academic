import Nav from "./components/Nav"
import bgPattern from './images/bg-pattern.svg'
import Card from "./components/Card"

function App() {

  return (
    <div className="min-h-screen overflow-hidden font-['Manrope']">
      <img src={bgPattern} alt="bg" className="h-120 w-full" />
      <Nav />
      <Card />
    </div>
  )
}

export default App
