import Footer from "./components/Footer"
import Started from "./components/Started"
import Nav from './components/Nav'
import bg from './assets/images/bg-tablet-pattern.svg'

function App() {

  return (
    <div className="relative font-['Be_Vietnam_Pro'] min-h-screen">
      <img src={bg} alt="bg" className="absolute -z-1 -top-20 -right-20" />
      <div className="p-8">
        <Nav />
      </div>
      <Started />
      <Footer />
    </div>
  )
}

export default App
