import { User } from "lucide-react";

interface ClientInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

function ClientInput({
  value,
  onChange,
  error,
}: ClientInputProps) {
  return (
    <div>
      <label className="text-sm text-zinc-400 block mb-2">
        Cliente
      </label>

      <div className="bg-[#2E2C30] rounded-lg flex items-center px-4">
        <User
          size={18}
          className="text-zinc-500"
        />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Nome do cliente"
          className="bg-transparent w-full outline-none p-3"
        />
      </div>

      {error && (
        <span className="text-red-400 text-sm mt-1 block">
          {error}
        </span>
      )}
    </div>
  );
}

export default ClientInput;