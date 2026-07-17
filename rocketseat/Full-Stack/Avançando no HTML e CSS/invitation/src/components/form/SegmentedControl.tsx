import { type FieldValues, type Path, useFormContext } from "react-hook-form";

interface Option {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface SegmentedControlProps<T extends FieldValues> {
  name: Path<T>;
  options: Option[];
}

export function SegmentedControl<T extends FieldValues>({
  name,
  options,
}: SegmentedControlProps<T>) {
  const { register, watch } = useFormContext<T>();

  const selected = watch(name);

  return (
    <div className="flex w-full rounded-xl border border-zinc-700 bg-zinc-900 p-1">
      {options.map((option) => (
        <label
          key={option.value}
          className={`
            flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg py-3 text-sm transition

            ${
              selected === option.value
                ? "bg-zinc-800 text-blue-400"
                : "text-zinc-400 hover:bg-zinc-800/40"
            }
          `}
        >
          <input
            type="radio"
            value={option.value}
            {...register(name)}
            className="hidden"
          />
          {option.icon}
          {option.label}
        </label>
      ))}
    </div>
  );
}