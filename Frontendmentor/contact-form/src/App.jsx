import { useForm } from "react-hook-form";
import { useState } from "react"

function App() {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
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
          id="first"
          {...register("first", { required: "This field is required" })}
          className={errors.first ? "border-red-600" : "border hover:border-green-600 rounded-lg h-10 mt-1 text-black px-3"}/>
          {errors.first && <span className="text-red-600">{errors.first.message}</span>}
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="last" className="text-[18px]">Last Name <span className="text-green-600">*</span></label>
          <input 
          type="text"  
          id="last"
          {...register("last", { required: "This field is required" })}
          className={errors.last ? "border-red-600" : "border hover:border-green-600 rounded-lg h-10 mt-1 text-black px-3"}/>
          {errors.last && <span className="text-red-600">{errors.last.message}</span>}
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="email" className="text-[18px]">Email Address <span className="text-green-600">*</span></label>
          <input 
          type="email" 
          id="email"
          {...register("email", { required: "Please enter a valid email address" })}
          className={errors.email ? "border-red-600" : "border hover:border-green-600 rounded-lg h-10 mt-1 text-black px-3"}/>
          {errors.email && <span className="text-red-600">{errors.email.message}</span>}
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
              ${
                watch("opcao") === "1"
                  ? "bg-green-100 border-green-600"
                  : ""
              }
            `}
          >
            <input
              type="radio"
              value="1"
              {...register("opcao", {
                required: "Selecione uma opção"
              })}
              className="mr-3 scale-150 accent-green-600 cursor-pointer"
            />
            General Enquiry
          </label>

          {/* OPTION 2 */}
          <label
            className={`
              border rounded-lg py-3 px-6 text-[18px] mt-4 flex items-center cursor-pointer
              hover:border-green-600
              ${
                watch("opcao") === "2"
                  ? "bg-green-100 border-green-600"
                  : ""
              }
            `}
          >
            <input
              type="radio"
              value="2"
              {...register("opcao")}
              className="mr-3 scale-150 accent-green-600 cursor-pointer"
            />
            Support Request
          </label>

          {/* ERRO */}
          {errors.opcao && (
            <span className="text-red-600 text-sm mt-2">
              {errors.opcao.message}
            </span>
          )}
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
