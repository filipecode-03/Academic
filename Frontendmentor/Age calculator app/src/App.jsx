import { useForm } from "react-hook-form";
import { useState } from "react";
import arrow from "./images/icon-arrow.svg";

function App() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [age, setAge] = useState(null);
  const currentYear = new Date().getFullYear();

  const onSubmit = (data) => {
    const { day, month, year } = data;

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let years = today.getFullYear() - year;
    let months = today.getMonth() - (month - 1);
    let days = today.getDate() - day;

    if (days < 0) {
      months--;
      const lastMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += lastMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="font-['Poppins'] pt-25 min-h-screen bg-[#F0F0F0]">
      <section className="bg-white w-90 lg:w-150 p-6 rounded-t-[20px] rounded-bl-[20px] rounded-br-[70px] lg:rounded-br-[140px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Inputs */}
          <div className="flex justify-between lg:justify-start gap-7">
            {/* DAY */}
            <div className="flex flex-col">
                <label
                  className={`text-[11px] mb-0.5 font-bold tracking-[2px] ${
                    errors.day ? "text-red-500" : "text-gray-500"
                  }`}>
                  DAY
                </label>              
                <input
                type="number"
                placeholder="DD"
                className={`border font-bold p-2 rounded-md w-full lg:w-28 outline-none ${
                  errors.day
                    ? "border-red-500"
                    : "border-black focus:border-[#864CFF]"
                }`}
                {...register("day", {
                  required: "This field is required",
                  min: {
                    value: 1,
                    message: "Must be a valid day",
                  },
                  max: {
                    value: 31,
                    message: "Must be a valid day",
                  },
                  validate: (value) => {
                  const { month, year } = getValues();

                  if (!month || !year) return true;

                  const date = new Date(year, month - 1, value);

                  // verifica se a data é válida
                  if (
                    date.getDate() !== Number(value) ||
                    date.getMonth() !== Number(month) - 1 ||
                    date.getFullYear() !== Number(year)
                  ) {
                    return "Must be a valid date";
                  }

                  return true;
                },
                })}
                />
              {errors.day && <span className="text-red-500 text-[11px] italic">{errors.day.message}</span>}
            </div>

            {/* MONTH */}
            <div className="flex flex-col">
                <label
                  className={`text-[11px] mb-0.5 font-bold tracking-[2px] ${
                    errors.month ? "text-red-500" : "text-gray-500"
                  }`}>
                  MONTH
                </label>              
                <input
                type="number"
                placeholder="MM"
                className={`border font-bold p-2 rounded-md w-full lg:w-28 outline-none ${
                  errors.month
                    ? "border-red-500"
                    : "border-black focus:border-[#864CFF]"
                }`}
                {...register("month", {
                required: "This field is required",
                min: {
                  value: 1,
                  message: "Must be a valid month",
                },
                max: {
                  value: 12,
                  message: "Must be a valid month",
                },
              })}
              />
              {errors.month && <span className="text-red-500 text-[11px] italic">{errors.month.message}</span>}
            </div>

            {/* YEAR */}
            <div className="flex flex-col">
                <label
                  className={`text-[11px] mb-0.5 font-bold tracking-[2px] ${
                    errors.year ? "text-red-500" : "text-gray-500"
                  }`}>
                  YEAR
                </label>              
                <input
                type="number"
                placeholder="YYYY"
                className={`border font-bold p-2 rounded-md w-full lg:w-28 outline-none ${
                  errors.year
                    ? "border-red-500"
                    : "border-black focus:border-[#864CFF]"
                }`}
                {...register("year", {
                required: "This field is required",
                validate: (value) => {
                  if (value > currentYear) {
                    return "Must be in the past";
                  }
                  return true;
                },
              })}
              />
              {errors.year && <span className="text-red-500 text-[11px] italic">{errors.year.message}</span>}
            </div>
          </div>

          {/* Linha + botão */}
          <div className="relative mt-12 lg:mr-5">
            <hr className="border-2 border-[#EDEDED]" />
            <button
              type="submit"
              className="absolute cursor-pointer left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 -top-6 lg:-top-8 bg-[#864CFF] p-4 rounded-full hover:bg-black transition"
            >
              <img src={arrow} alt="arrow" className="w-6 lg:w-10" />
            </button>
          </div>
        </form>
          <div className="mt-15 lg:mt-10 text-[50px] lg:text-[75px] leading-13 lg:leading-18 font-bold italic">
            <p>
              <span className="text-[#864CFF]">
                {age ? age.years : "--"}
              </span>{" "}
              years
            </p>
            <p>
              <span className="text-[#864CFF]">
                {age ? age.months : "--"}
              </span>{" "}
              months
            </p>
            <p>
              <span className="text-[#864CFF]">
                {age ? age.days : "--"}
              </span>{" "}
              days
            </p>
          </div>
      </section>
    </div>
  );
}

export default App;