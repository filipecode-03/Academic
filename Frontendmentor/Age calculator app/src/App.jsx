import { useForm } from "react-hook-form";
import { useState } from "react";
import arrow from "./images/icon-arrow.svg";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [age, setAge] = useState(null);

  const onSubmit = (data) => {
    const { day, month, year } = data;

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    // validações extras
    if (birthDate > today) {
      alert("Data no futuro");
      return;
    }

    // validação de data inválida (ex: 31/04)
    if (
      birthDate.getDate() != day ||
      birthDate.getMonth() != month - 1 ||
      birthDate.getFullYear() != year
    ) {
      alert("Data inválida");
      return;
    }

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
      <section className="bg-white w-90 p-6 rounded-t-[20px] rounded-bl-[20px] rounded-br-[70px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Inputs */}
          <div className="flex justify-between">
            {/* DAY */}
            <div className="flex flex-col">
              <label className="text-[11px] mb-0.5 font-bold tracking-[2px] text-gray-500">DAY</label>
              <input
                type="number"
                placeholder="DD"
                className="border font-bold p-2 rounded-md w-20"
                {...register("day", {
                  required: "Required",
                  min: 1,
                  max: 31,
                })}
              />
              {errors.day && <span className="text-red-500 text-xs">this field is required</span>}
            </div>

            {/* MONTH */}
            <div className="flex flex-col">
              <label className="text-[11px] mb-0.5 font-bold tracking-[2px] text-gray-500">MONTH</label>
              <input
                type="number"
                placeholder="MM"
                className="border font-bold p-2 rounded-md w-20"
                {...register("month", {
                  required: "Required",
                  min: 1,
                  max: 12,
                })}
              />
              {errors.month && <span className="text-red-500 text-xs">this field is required</span>}
            </div>

            {/* YEAR */}
            <div className="flex flex-col">
              <label className="text-[11px] mb-0.5 font-bold tracking-[2px] text-gray-500">YEAR</label>
              <input
                type="number"
                placeholder="YYYY"
                className="border font-bold p-2 rounded-md w-20"
                {...register("year", {
                  required: "Required",
                })}
              />
              {errors.year && <span className="text-red-500 text-[11px]">this field is required</span>}
            </div>
          </div>

          {/* Linha + botão */}
          <div className="relative mt-12">
            <hr className="border-2 border-[#EDEDED]" />
            <button
              type="submit"
              className="absolute cursor-pointer left-1/2 -translate-x-1/2 -top-6 bg-[#864CFF] p-4 rounded-full hover:bg-black transition"
            >
              <img src={arrow} alt="arrow" className="w-6" />
            </button>
          </div>
        </form>
          <div className="mt-15 text-[50px] leading-13 font-bold italic">
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