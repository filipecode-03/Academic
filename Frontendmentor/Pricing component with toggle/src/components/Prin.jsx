import Button from './Button.jsx'
import Cards from './Cards.jsx'
import { useState } from 'react'

function Prin() {

    const [monthly, setMonthly] = useState(false)

    return (
        <main className="text-center">
            <h1 className="text-[35px] font-bold">Our Pricing</h1>
            <Button monthly={monthly} setMonthly={setMonthly} />
            <Cards monthly={monthly} />
        </main>
    )
}

export default Prin