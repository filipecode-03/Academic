import Footer from "./components/footer/Footer"
import Started from "./components/Started"
import Nav from './components/Nav'
import Intro from './components/Intro'
import About from './components/About'
import Avatar from "./components/avatar/Avatar"
import bg from './assets/images/bg-tablet-pattern.svg'

function App() {

  return (
    <div className="relative font-['Be_Vietnam_Pro'] min-h-screen overflow-x-hidden">
      <img src={bg} alt="bg" className="absolute -z-1 -top-20 -right-20" />
      <img src={bg} alt="bg" className="absolute -z-1 w-90 lg:w-220 lg:-left-120 lg:top-220 top-145 -right-40" />
      <div>
        <Nav />
        <Intro />
        <About />
        <Avatar />
      </div>
      <Started />
      <Footer />
    </div>
  )
}

export default App
