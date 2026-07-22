import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Photos from "./components/Photos"
import Profile from "./components/Profile"

function App() {

  return (
    <div className="font-['Poppins']">
      <div className="bg-[#F5F5F5]">
        <Nav />
        <Profile />
      </div>
      <Photos />
      <Footer />
    </div>
  )
}

export default App
