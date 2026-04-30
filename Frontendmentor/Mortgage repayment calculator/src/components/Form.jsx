import Painel from "./Pailnel"

function Form() {
    return (
        <div className="p-5 bg-white">
            <div>
                <h1 className="text-[#18303C] font-bold text-[25px]">Mortgage Calculator</h1>
                <button className="underline">
                    Clear All
                </button>
                <form action="">
                </form>
            </div>
            <Painel />
        </div>
    )
}

export default Form