import { useForm } from "react-hook-form";
import { format } from "date-fns";

import CalendarInput from "./CalendarInput";
import ClientInput from "./ClientInput";
import TimeInput from "./TimeInput";

import { useSchedule } from "../hooks/useSchedule";

interface FormData {
  date: Date;
  time: string;
  client: string;
}

function Form() {
  const {
    control,
    watch,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const { addSchedule, isTimeAvailable } =
    useSchedule();

  const selectedDate = watch("date");

  function onSubmit(data: FormData) {
    const success = addSchedule({
      client: data.client,
      date: format(data.date, "yyyy-MM-dd"),
      time: data.time,
    });

    if (!success) {
      alert("Horário ocupado.");
      return;
    }

    reset();
  }

  return (
    <div className="bg-[#232225] text-white rounded-xl max-w-[500px] w-full p-8">
      <h1 className="text-2xl font-bold">
        Agende um atendimento
      </h1>

      <p className="text-[#98959D] mt-2">
        Selecione data, horário e informe o nome do cliente.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 mt-8"
      >
        <CalendarInput control={control} />

        <TimeInput
          control={control}
          selectedDate={
            selectedDate
              ? format(selectedDate, "yyyy-MM-dd")
              : undefined
          }
          isTimeAvailable={isTimeAvailable}
        />

        <ClientInput control={control} />

        <button
          type="submit"
          className="w-full py-4 rounded-lg bg-[#B8952E] text-black font-bold uppercase"
        >
          Agendar
        </button>
      </form>
    </div>
  );
}

export default Form;