import { SquareUserRound } from "lucide-react";

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
      <label className="text-gray-200 text-[18px] block mb-2 font-semibold">
        Cliente
      </label>

      <div className="bg-[#232225] border border-gray-600 rounded-lg flex items-center px-4">
        <SquareUserRound
          size={18}
          className="text-[#B8952E]"
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