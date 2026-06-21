import Footer from "./components/Footer"
import Header from "./components/Header"
import Timer from "./components/Timer"
import star from './assets/images/bg-stars.svg'

function App() {

  return (
    <div className="font-['Red_Hat_Text'] relative min-h-screen">
      <img src={star} alt="star" className="absolute" />
      <Header />
      <Timer />
      <Footer />
    </div>
  )
}

export default App
