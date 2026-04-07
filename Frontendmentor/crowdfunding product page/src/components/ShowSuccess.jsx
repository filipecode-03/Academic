import check from '../assets/images/icon-check.svg'

function ShowSuccess({ setShowSuccess }) {
  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      
      <div className="bg-white rounded-[10px] p-8 w-[90%] max-w-100 text-center">
        
        <img src={check} alt="success" className="mx-auto" />
        
        <h2 className="mt-5 font-bold text-[20px] text-black">
          Thanks for your support!
        </h2>

        <p className="mt-5 text-gray-500">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
        </p>

        <button 
          onClick={() => setShowSuccess(false)}
          className="mt-6 bg-[#3CB4AB] text-white px-6 py-3 rounded-full font-medium"
        >
          Got it!
        </button>

      </div>

    </div>
  )
}

export default ShowSuccess