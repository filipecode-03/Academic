import Cards from "./components/Cards"
import Form from "./components/Form"
import { useState } from "react"

function App() {

  const [cardData, setCardData] = useState({
        name: "",
        cardNumber: "",
        month: "",
        year: "",
        cvc: "",
    })
  
  return (
    <div className="font-['Space_Grotesk']">
      <Cards cardData={cardData} />
      <Form setCardData={setCardData} />
    </div>
  )
}

export default App
