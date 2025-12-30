import { useForm } from "react-hook-form";
import { useState } from "react"
import success from "./assets/images/icon-success-check.svg"

function App() {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  function onSubmit(data) {
    setSucesso(true);
    console.log(data);
  }
  
  const [sucesso, setSucesso] = useState(false);
  
  return (
    <div className="min-h-screen bg-green-200 font-['Karla'] p-7">
      {sucesso && (
        <div className="rounded-[10px] bg-gray-900 text-white p-5 space-y-2 lg:w-fit lg:mx-auto">
          <div className="flex gap-3">
            <img src={success} alt="ok" />
            <h2 className="font-bold">Message Sent!</h2>
          </div>
          <p className="text-[14px] text-gray-300">Thanks for completing the form, We'll be in touch soon!</p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-[10px] py-3 pb-7 px-6 lg:w-[50%] lg:mx-auto">
        <h1 className="font-bold text-[28px]">Contact Us</h1>
        <div className="lg:flex lg:gap-5">
          <div className="flex flex-col mt-[15px] lg:w-1/2">
            <label htmlFor="first" className="text-[18px]">First Name <span className="text-green-600">*</span></label>
            <input 
            type="text"
            id="first"
            {...register("first", { required: "This field is required" })}
            className={errors.first ? "border border-red-600 rounded-lg h-10 mt-1 text-black px-3" : "border hover:border-green-600 rounded-lg h-10 mt-1 text-black px-3"}/>
            {errors.first && <span className="text-red-600 mt-2">{errors.first.message}</span>}
          </div>
          <div className="flex flex-col mt-5 lg:mt-[15px] lg:w-1/2">
            <label htmlFor="last" className="text-[18px]">Last Name <span className="text-green-600">*</span></label>
            <input 
            type="text"  
            id="last"
            {...register("last", { required: "This field is required" })}
            className={errors.last ? "border border-red-600 rounded-lg h-10 mt-1 text-black px-3" : "border hover:border-green-600 rounded-lg h-10 mt-1 text-black px-3"}/>
            {errors.last && <span className="text-red-600 mt-2">{errors.last.message}</span>}
          </div>
        </div>  
        <div className="flex flex-col mt-5">
          <label htmlFor="email" className="text-[18px]">Email Address <span className="text-green-600">*</span></label>
          <input 
          type="email" 
          id="email"
          {...register("email", { required: "Please enter a valid email address" })}
          className={errors.email ? "border border-red-600 rounded-lg h-10 mt-1 text-black px-3" : "border hover:border-green-600 rounded-lg h-10 mt-1 text-black px-3"}/>
          {errors.email && <span className="text-red-600 mt-2">{errors.email.message}</span>}
        </div>
        <div className="flex flex-col mt-5">
          <label className="text-[18px]">
            Query Type <span className="text-green-600">*</span>
          </label>

          {/* OPTION 1 */}
          <div className="lg:flex lg:gap-5">
            <label
              className={`
                border rounded-lg py-3 px-6 text-[18px] mt-2 lg:w-1/2 flex items-center cursor-pointer
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
                  required: "Please select a query type"
                })}
                className="mr-3 scale-150 accent-green-600 cursor-pointer"
              />
              General Enquiry
            </label>

            {/* OPTION 2 */}
            <label
              className={`
                border rounded-lg py-3 px-6 text-[18px] mt-4 lg:mt-2 lg:w-1/2 flex items-center cursor-pointer
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
          </div>

          {/* ERRO */}
          {errors.opcao && (
            <span className="text-red-600 text-sm mt-2">
              {errors.opcao.message}
            </span>
          )}
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="message" className="text-[18px]">Message <span className="text-green-600">*</span></label>
          <textarea id="message" 
          {...register("message", { required: "This field is required" })}
          className={errors.message ? "border border-red-500 rounded-lg p-3 w-full h-32 mt-2" : "border hover:border-green-600 rounded-lg p-3 w-full h-32 mt-2"}></textarea>
          {errors.message && <span className="text-red-600 text-sm mt-2">{errors.message.message}</span>}
        </div>
        <div className="mt-5 px-1">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox"      
            {...register("consent", { required: "To submit this form, please consent to being contacted" })}
            className="mr-3 scale-120 accent-[#0C7D69] cursor-pointer"/>
            I consent to being contacted by the team <span className="text-green-600">*</span>
          </label>
          {errors.consent && <span className="text-red-600 text-sm mt-2 block">{errors.consent.message}</span>}
        </div>
        <button type="submit" className="bg-[#0C7D69] rounded-lg mt-5 text-white w-full py-4 text-[18px] font-medium cursor-pointer hover:bg-[#063F36]">Submit</button>
      </form>
    </div>
  )
}

export default App 
