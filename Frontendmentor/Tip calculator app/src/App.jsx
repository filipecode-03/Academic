import { useForm } from "react-hook-form";
import logo from './images/logo.svg'
import dollar from './images/icon-dollar.svg'
import person from './images/icon-person.svg'

function App() {

  const { register, setValue, watch, reset, formState: { touchedFields } } = useForm({
  defaultValues: {
    bill: "",
    tip: 15,
    customTip: "",
    people: 0
  }
});

  const bill = watch("bill") || 0;
  const tip = watch("tip") || 0;
  const customTip = watch("customTip");
  const people = watch("people") || 0;

  const tipTotal = bill * (tip / 100);

  const tipPerPerson =
    people > 0 ? (tipTotal / people).toFixed(2) : "0.00";

  const totalPerPerson =
    people > 0 ? ((Number(bill) + tipTotal) / people).toFixed(2) : "0.00";

  const showError = touchedFields.people && people === 0;

  return (
    <div className="font-['Space_Mono'] min-h-screen bg-[#C5E4E7] pt-15">
      <img src={logo} alt="logo" className='mx-auto'/>
      <form className='bg-white rounded-t-[30px] mt-10 px-8 py-10 lg:rounded-2xl lg:max-w-[900px] lg:mx-auto'>
        <section className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col">
            {/* BILL INPUT */}
            <div className="flex flex-col gap-2">
              <label className="text-[#6F8383] font-bold">
                Bill
              </label>
              <div className="relative">
                <img src={dollar} alt="dollar icon" className="absolute left-4 top-1/2 -translate-y-1/2"/>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0"
                  {...register("bill")}
                  className="w-full bg-[#F3F8FB] text-right text-2xl font-bold text-[#00494D] p-3 pl-10 rounded-lg outline-none focus:ring-2 focus:ring-[#26C0AB]"
                />
              </div>
            </div>
            {/* TIP SELECT */}
            <div className="flex flex-col gap-4 mt-6">
              <label className="text-gray-500 font-bold">
                Select Tip %
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[5, 10, 15, 25, 50].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setValue("tip", value);
                      setValue("customTip", ""); // limpa o custom
                    }}
                    className={`py-3 rounded-lg font-bold text-xl transition
                      ${tip === value && customTip === ""
                        ? "bg-[#26C0AB] text-[#00494D]"
                        : "bg-[#00494D] text-white hover:bg-[#9FE8DF] hover:text-[#00494D]"
                      }`}
                  >
                    {value}%
                  </button>
                ))}
                {/* CUSTOM INPUT */}
                <input
                  type="number"
                  placeholder="Custom"
                  {...register("customTip", {
                    onChange: (e) => {
                      setValue("tip", Number(e.target.value)); // atualiza o tip final
                    }
                  })}
                  className="bg-[#F3F9FA] text-center text-xl font-bold text-[#00494D] rounded-lg outline-none focus:ring-2 focus:ring-[#26C0AB]"
                />
              </div>
            </div>
                {/* NUMBER OF PEOPLE */}
              <div className="flex flex-col gap-2 mt-6">
                <div className="flex justify-between items-center">
                  <label className="text-gray-500 font-bold">
                    Number of People
                  </label>
                  {/* mensagem de erro */}
                  {showError && (
                  <span className="text-red-500 text-sm font-bold">
                    Can't be zero
                  </span>
                  )}
                </div>
                <div className="relative">
                  <img
                    src={person}
                    alt="person icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                  />
                  <input
                    type="number"
                    placeholder="0"
                    {...register("people", {
                      valueAsNumber: true,
                      min: 1
                    })}
                    className={`w-full bg-[#F3F9FA] text-[#00494D] text-right text-2xl font-bold p-3 pl-10 rounded-lg outline-none
                      ${showError
                        ? "ring-2 ring-red-500"
                        : "focus:ring-2 focus:ring-[#26C0AB]"
                      }`}
                  />
                </div>
              </div>
          </div>
          {/* RESULT PANEL */}
          <div className="bg-[#00494D] rounded-2xl p-6 lg:p-8 lg:pt-14 pt-10 mt-8 flex flex-col gap-6">
            {/* TIP PER PERSON */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white font-bold">Tip Amount</p>
                <span className="text-gray-400 text-sm">/ person</span>
              </div>
              <h2 className="text-[#26C0AB] text-3xl font-bold">
                ${tipPerPerson}
              </h2>
            </div>
            {/* TOTAL PER PERSON */}
            <div className="flex justify-between items-center lg:mt-10">
              <div>
                <p className="text-white font-bold">Total</p>
                <span className="text-gray-400 text-sm">/ person</span>
              </div>
              <h2 className="text-[#26C0AB] text-3xl font-bold">
                ${totalPerPerson}
              </h2>
            </div>
            {/* RESET BUTTON */}
            <button
              type="button"
              onClick={() =>
                reset({
                  bill: "",
                  tip: 15,
                  customTip: "",
                  people: ""
                })
              }
              className="mt-4 lg:mt-auto bg-[#26C0AB] text-[#00494D] font-bold py-3 rounded-lg hover:bg-[#9FE8DF] transition"
            >
              RESET
            </button>
          </div>
        </section>
      </form>
    </div>
  )
}

export default App
