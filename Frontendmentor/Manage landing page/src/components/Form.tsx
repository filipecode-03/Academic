import { useForm } from "react-hook-form";

type FormData = {
  email: string;
};

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 lg:gap-2 items-start justify-center lg:justify-normal mt-5 lg:mt-0">
      <div className="flex flex-col">
          <input
            type="email"
            placeholder={errors.email ? "johnmadden/mail" : "Updates in your inbox..."}
            {...register("email", {
              required: "Please insert a valid email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className={`rounded-full px-8 lg:px-6 pr-18 lg:pr-14 py-3 bg-white ${
                        errors.email
                        ? "placeholder:text-red-400 font-medium border-2 border-red-500"
                        : "text-gray-800"
                    }`}
          />
          {errors.email && (
            <span className="text-sm ml-8 mt-2 text-red-500 italic">
              {errors.email.message}
            </span>
          )}
      </div>
      <button
        type="submit"
        className="rounded-full bg-[#F2613C] px-10 lg:px-7 py-3 font-semibold text-white transition hover:opacity-90">
        GO
      </button>
    </form>
  );
}