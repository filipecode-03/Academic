import Nav from "../components/Nav"
import SectionOne from "../components/SectionOne"
import SectionTwo from "../components/SectionTwo"
import Footer from "../components/Footer"
import Form from "../components/Form"
import SectionThree from "../components/SectionThree"
import SectionAccordion from "../components/SectionAccordion"

function App() {

  return (
    <div className="font-['Rubik'] min-h-screen">
      <Nav />
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionAccordion />
        <Form />
        <Footer />
      </main>
    </div>
  )
}

export default App
