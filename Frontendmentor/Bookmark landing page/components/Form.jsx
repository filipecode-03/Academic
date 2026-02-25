import { useForm } from "react-hook-form";
import erro from '../src/assets/images/icon-error.svg'

function Form() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <section className="bg-[#5266DF] mt-20 p-8 py-16 text-white">
            <p className="tracking-[5px] text-[12px] text-center">35.000+ ALREADY JOINED</p>
            <h1 className="text-[25px] font-medium w-[80%] mx-auto text-center leading-8 mt-2">Stay up-to-date with what we-re doing</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-6 text-[14px] gap-4">
                <div className={`relative w-[80%] mx-auto rounded-[5px] p-1 transition-all ${errors.email ? "bg-[#FB5859]" : ""}`}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-white text-black placeholder:text-gray-400 p-3 rounded-[5px] w-full outline-none"
                        {...register("email", {
                        required: "Whoops, make sure it's an email"
                        })}
                    />
                    {errors.email && (
    <img
      src={erro}
      alt="error icon"
      className="absolute right-5 top-6.5 -translate-y-1/2"
    />
  )}
                    {errors.email && <span className="block mt-2 mb-0.5 pl-3 text-white text-[12px]">{errors.email.message}</span>}
                </div>
                <button type="submit" className="cursor-pointer bg-[#FB5859] p-3 rounded-[5px] w-[80%] mx-auto">Contact Us</button>
            </form>
        </section>
    )
}

export default Form