import Nav from "./components/Nav"
import Header from './components/Header'
import About from "./components/About"
import More from "./components/More"
import Price from './components/Price'
import Go from "./components/Go"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="font-['Inter'] text-white">
      <Nav />
      <Header />
      <About />
      <More />
      <Price />
      <Go />
      <Footer />
    </div>
  )
}

export default App
