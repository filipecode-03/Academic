import empty from '../images/illustration-empty.svg'

function Painel({ result }) {
    if (!result) {
        return (
            <div className="bg-[#133040] text-white text-center p-7">
                <img src={empty} alt="empty" className='mx-auto' />
                <h1 className='font-bold text-[25px] mt-2'>Results shown here</h1>
                <p className='mt-3 text-gray-400'>
                    Complete the form and click “calculate repayments” to see what your monthly repayments would be.
                </p>
            </div>
        )
    }
    const formatCurrency = (value) => {
        return value.toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP"
        })
    }
    return (
        <div className="bg-[#133040] text-white p-7">
            <h2 className="text-lg text-gray-300">Your monthly repayments</h2>
            <p className="text-3xl font-bold mt-2 text-[#D9DB30]">
                {formatCurrency(result.monthly)}
            </p>
            <hr className="my-6 border-gray-600" />
            <h2 className="text-gray-300">Total you'll repay over the term</h2>
            <p className="text-xl font-bold mt-2">
                {formatCurrency(result.total)}
            </p>
        </div>
    )
}

export default Painel