import { Check } from "lucide-react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface OptionCardProps {
  value: string;
  label: string;
  image: React.ReactNode;
  register: UseFormRegisterReturn;
  checked: boolean;
}

export default function OptionCard({
  value,
  label,
  image,
  register,
  checked,
}: OptionCardProps) {
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        value={value}
        {...register}
        className="sr-only"
      />
      <div
        className={`relative flex flex-col items-center rounded-xl border p-6 transition-all ${
          checked
            ? "border-[#E43A12]"
            : "border-stone-300 hover:border-[#E43A12]"
        }`}
      >
        <div
          className={`absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full border ${
            checked
              ? "border-[#E43A12] bg-[#E43A12]"
              : "border-stone-300"
          }`}
        >
          {checked && (
            <Check
              size={16}
              strokeWidth={3}
              className="text-white"
            />
          )}
        </div>
        <div className="mt-3">{image}</div>
        <span className="mt-3 font-medium text-stone-700">
          {label}
        </span>
      </div>
    </label>
  );
}