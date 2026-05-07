import empty from '../images/illustration-empty.svg'

function Painel({ result }) {
    if (!result) {
        return (
            <div className="bg-[#133040] lg:rounded-bl-[100px] text-white text-center p-7 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
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
        <div className="bg-[#133040] text-white p-7 lg:w-1/2 lg:rounded-bl-[100px] lg:pb-20">
            <h1 className='text-[30px] font-bold'>Your results</h1>
            <p className='mt-4 text-gray-300'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
            <div className='bg-[#0E2431] mt-8 p-5 rounded-[10px] border-t-5 border-[#D6D930]'>
                <h2 className="text-[18px] text-gray-300">Your monthly repayments</h2>
                <p className="text-[42px] lg:text-[60px] font-bold mt-2 text-[#D9DB30]">
                    {formatCurrency(result.monthly)}
                </p>
                <hr className="my-6 border-gray-600" />
                <h2 className="text-gray-300 text-[18px]">Total you'll repay over the term</h2>
                <p className="text-[26px] font-bold mt-2">
                    {formatCurrency(result.total)}
                </p>
            </div>
        </div>
    )
}

export default Painel