import Nav from '../components/Nav.jsx'
import Intro from '../components/Intro.jsx'
import Main from '../components/Main.jsx'
import Footer from '../components/Footer.jsx'

function App() {

  return (
    <div className='font-["Public_Sans"] min-h-screen relative overflow-x-hidden'>
      <Nav />
      <Intro />
      <Main />
      <Footer />
    </div>
  )
}

export default App
