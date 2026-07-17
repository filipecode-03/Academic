import { type FieldValues, type Path, useFormContext } from "react-hook-form";

interface Option {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface SegmentedControlProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  options: Option[];
}

export function SegmentedControl<T extends FieldValues>({
  name,
  label,
  options,
}: SegmentedControlProps<T>) {
  const { register, watch } = useFormContext<T>();

  const selected = watch(name);

  return (
    <div className="w-full">
        <label className="text-zinc-300 font-['Open_Sans']">
            {label}
        </label>

        <div className="mt-3 flex w-full rounded-xl border border-zinc-700 bg-zinc-900 p-1">
            {options.map(({ value, label, icon }) => {
            const isSelected = selected === value;

            return (
                <label
                key={value}
                className={`
                    flex flex-1 cursor-pointer items-center justify-center gap-2
                    rounded-lg py-3 transition-colors
                    ${isSelected ? "bg-zinc-800" : "hover:bg-zinc-800/40"}
                `}
                >
                <input
                    type="radio"
                    value={value}
                    {...register(name)}
                    className="hidden"
                />

                <span className={isSelected ? "text-blue-400" : "text-zinc-400"}>
                    {icon}
                </span>

                <span
                    className={`font-medium text-sm ${
                    isSelected ? "text-white" : "text-zinc-400"
                    }`}
                >
                    {label}
                </span>
                </label>
            );
            })}
        </div>
    </div>
  );
}