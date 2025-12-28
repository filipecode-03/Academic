import { useForm } from "react-hook-form";
import { useState } from "react"

function App() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  function onSubmit(data) {
    setSucesso(true);
    console.log(data);
  }

  const [selected, setSelected] = useState(""); // State dos botões de radio
  
  const [sucesso, setSucesso] = useState(false);
  
  return (
    <div className="min-h-screen bg-green-200 font-['Karla'] p-7">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-[10px] py-3 pb-7 px-6">
        <h1 className="font-bold text-[28px]">Contact Us</h1>
        <div className="flex flex-col mt-[15px]">
          <label htmlFor="first" className="text-[18px]">First Name <span className="text-green-600">*</span></label>
          <input 
          type="text" 
          name="first" 
          id="first"
          required
          className="border hover:border-green-600 rounded-lg h-10 mt-1 text-black px-3" />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="last" className="text-[18px]">Last Name <span className="text-green-600">*</span></label>
          <input 
          type="text" 
          name="last" 
          id="last"
          required
          className="border hover:border-green-600 rounded-lg h-10 mt-1 text-black px-3" />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="first" className="text-[18px]">Email Address <span className="text-green-600">*</span></label>
          <input 
          type="email" 
          name="email" 
          id="email"
          required
          className="border hover:border-green-600 rounded-lg h-10 mt-1 text-black px-3" />
        </div>
        <div className="flex flex-col mt-5">
          <label className="text-[18px]">
            Query Type <span className="text-green-600">*</span>
          </label>

          {/* OPTION 1 */}
          <label
            className={`
              border rounded-lg py-3 px-6 text-[18px] mt-2 flex items-center cursor-pointer
              hover:border-green-600 
              ${selected === "1" ? "bg-green-100 border-green-600" : ""}
            `}
          >
            <input
              type="radio"
              name="opcao"
              value="1"
              checked={selected === "1"}
              onChange={() => setSelected("1")}
              required
              className="mr-3 scale-150 accent-green-600 cursor-pointer"
            />
            General Enquiry
          </label>

          {/* OPTION 2 */}
          <label
            className={`
              border rounded-lg py-3 px-6 text-[18px] mt-4 flex items-center cursor-pointer
              hover:border-green-600 
              ${selected === "2" ? "bg-green-100 border-green-600" : ""}
            `}
          >
            <input
              type="radio"
              name="opcao"
              value="2"
              checked={selected === "2"}
              onChange={() => setSelected("2")}
              required
              className="mr-3 scale-150 accent-green-600 cursor-pointer"
            />
            Support Request
          </label>
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="first" className="text-[18px]">Message <span className="text-green-600">*</span></label>
          <textarea className="border hover:border-green-600 rounded-lg p-3 w-full h-32 mt-2"></textarea>
        </div>
        <div className="mt-5 px-1">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" name="opcao" value="1" className="mr-3 scale-120 accent-[#0C7D69] cursor-pointer required" />
            I consent to being contacted by the team <span className="text-green-600">*</span>
          </label>
        </div>
        <button type="submit" className="bg-[#0C7D69] rounded-lg mt-5 text-white w-full py-4 text-[18px] font-medium cursor-pointer hover:bg-[#063F36]">Submit</button>
      </form>
    </div>
  )
}

export default App 
