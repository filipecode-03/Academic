import Footer from "./components/Footer"
import Started from "./components/Started"
import bg from './assets/images/bg-tablet-pattern.svg'

function App() {

  return (
    <div className="relative font-['Be_Vietnam_Pro'] min-h-screen">
      <img src={bg} alt="bg" className="absolute -top-20 -right-20" />
      
      <Started />
      <Footer />
    </div>
  )
}

export default App
