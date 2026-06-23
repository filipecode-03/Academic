import Calc from "./Calc"

function Content() {
    return (
        <div className="p-8">
            <h2 className="text-gray-500 font-semibold tracking-[1px]">SNEAKER COMPANY</h2>
            <h1 className="font-bold text-4xl mt-2">Fall Limied Edition Sneakers</h1>
            <p className="text-gray-500 mt-4">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <Calc />
        </div>
    )
}

export default Content