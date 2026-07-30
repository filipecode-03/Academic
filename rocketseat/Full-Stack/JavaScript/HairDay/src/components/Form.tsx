import { Controller, useForm } from "react-hook-form";
import { format } from "date-fns";

import CalendarInput from "./CalendarInput";
import ClientInput from "./ClientInput";
import TimeInput from "./TimeInput";

import { useSchedule } from "../hooks/useSchedule";

interface FormData {
  date?: Date;
  time: string;
  client: string;
}

function Form() {
  const {
    control,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      client: "",
      time: "",
      date: undefined,
    },
  });

  const { addSchedule, isTimeAvailable } = useSchedule();

  const selectedDate = watch("date");

  function onSubmit(data: FormData) {
    if (!data.date) return;

    const success = addSchedule({
      client: data.client,
      date: format(data.date, "yyyy-MM-dd"),
      time: data.time,
    });

    if (!success) {
      alert("Horário indisponível.");
      return;
    }

    reset();
  }

  return (
    <div className="bg-[#232225] text-white rounded-xl max-w-[500px] w-full p-8">
      <h1 className="font-bold text-2xl">
        Agende um atendimento
      </h1>

      <p className="text-[#98959D] mt-2">
        Selecione uma data, um horário e informe o nome do cliente.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 mt-8"
      >
        <Controller
          control={control}
          name="date"
          rules={{
            required: "Selecione uma data.",
          }}
          render={({ field }) => (
            <CalendarInput
              value={field.value}
              onChange={field.onChange}
              error={errors.date?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="time"
          rules={{
            required: "Selecione um horário.",
          }}
          render={({ field }) => (
            <TimeInput
              value={field.value}
              onChange={field.onChange}
              error={errors.time?.message}
              selectedDate={
                selectedDate
                  ? format(selectedDate, "yyyy-MM-dd")
                  : undefined
              }
              isTimeAvailable={isTimeAvailable}
            />
          )}
        />

        <Controller
          control={control}
          name="client"
          rules={{
            required: "Informe o nome do cliente.",
          }}
          render={({ field }) => (
            <ClientInput
              value={field.value}
              onChange={field.onChange}
              error={errors.client?.message}
            />
          )}
        />

        <button
          type="submit"
          className="bg-[#B8952E] rounded-lg py-4 w-full uppercase font-bold text-black hover:brightness-110 transition"
        >
          Agendar
        </button>
      </form>
    </div>
  );
}

export default Form;