import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import star from './assets/images/icon-star.svg'
import Numbers from './assets/components/Numbers.jsx'
function App() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (selectedNumber) {
      // envia o número selecionado via estado de navegação
      navigate("/thanks", { state: { selectedNumber } });
    } else {
      alert("Por favor, selecione um número antes de enviar!");
    }
  };

  return (
    <div className="font-['Overpass'] bg-[#141519] h-screen">
      <div className='space-y-5 bg-[#202731] mx-[35px] lg:mx-auto lg:w-[430px] p-[30px] relative top-[100px] rounded-xl'>
        <img src={star} alt="icon star" className='bg-[#262D37] rounded-full p-3'/>
        <h1 className='font-medium text-white text-[25px]'>How did we do?</h1>
        <p className='text-gray-500'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <Numbers selected={selectedNumber} onSelect={setSelectedNumber} />
        <button
        onClick={handleSubmit}
        className='bg-[#FC7613] hover:bg-white tracking-[3px] w-full rounded-full py-2.5 font-semibold'>SUBMIT</button>
      </div>
    </div>
  )
}

export default App