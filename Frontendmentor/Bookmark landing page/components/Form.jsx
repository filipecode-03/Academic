import { useForm } from "react-hook-form";

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
        <section className="bg-[#5266DF] text-center p-8 py-16 text-white">
            <p className="tracking-[5px] text-[12px]">35.000+ ALREADY JOINED</p>
            <h1 className="text-[25px] font-medium w-[80%] mx-auto leading-8 mt-2">Stay up-to-date with what we-re doing</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-6 text-[14px] gap-4">
                <input type="email" className="bg-white text-gray-400 p-3 rounded-[5px] w-[80%] mx-auto" placeholder="Enter your email address"
                {...register("email", { required: "Email é obrigatório" })} 
                />
                {errors.email && <span>{errors.email.message}</span>}
                <button type="submit" className="bg-[#FB5859] p-3 rounded-[5px] w-[80%] mx-auto">Contact Us</button>
            </form>
        </section>
    )
}

export default Form