import { User } from "lucide-react";
import { Controller, type Control } from "react-hook-form";

interface Props {
  control: Control<any>;
}

function ClientInput({ control }: Props) {
  return (
    <Controller
      control={control}
      name="client"
      rules={{
        required: "Informe o nome do cliente.",
      }}
      render={({ field }) => (
        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Cliente
          </label>

          <div className="flex items-center bg-[#2E2C30] rounded-lg px-4">
            <User
              size={18}
              className="text-zinc-500"
            />

            <input
              {...field}
              placeholder="Nome do cliente"
              className="w-full bg-transparent outline-none p-3"
            />
          </div>
        </div>
      )}
    />
  );
}

export default ClientInput;