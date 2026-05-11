import { useState } from "react"
import Cards from "./components/Cards"
import Form from "./components/Form"

function App() {
    const initialCardData = {
        name: "",
        cardNumber: "",
        month: "",
        year: "",
        cvc: "",
    }
    const [cardData, setCardData] = useState(initialCardData)
    const [isSubmitted, setIsSubmitted] = useState(false)
    return (
        <main className="font-['Space_Grotesk'] lg:flex">
            <Cards
                cardData={cardData}
                isSubmitted={isSubmitted}
            />
            <Form
                setCardData={setCardData}
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted}
                initialCardData={initialCardData}
            />
        </main>
    )
}

export default App