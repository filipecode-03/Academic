import { type FieldValues, type Path, useFormContext } from "react-hook-form";

interface ToggleSwitchProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  activeText?: string;
  inactiveText?: string;
}

export function ToggleSwitch<T extends FieldValues>({
  name,
  label,
}: ToggleSwitchProps<T>) {
  const { register, watch, setValue } = useFormContext<T>();

  const checked = watch(name);

  return (
    <div className="w-100">
      <label className="font-['Open_Sans'] text-zinc-300">
        {label}
      </label>

      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setValue(name, !checked as never)}
          className={`
            relative h-8.5 w-16 border-[#363B40] border rounded-full transition-colors
            ${
              checked
                ? "bg-blue-500"
                : "bg-[#1C1F21]"
            }
          `}
        >
          <span
            className={`
              absolute top-1 h-6 w-6 rounded-full bg-[#363B40] transition-all
              ${
                checked
                  ? "left-9"
                  : "left-1"
              }
            `}
          />

          <input
            type="checkbox"
            {...register(name)}
            className="hidden"
          />
        </button>

        <span className="text-sm text-zinc-300">
          Escuro
        </span>
      </div>
    </div>
  );
}