import {
  type FieldValues,
  type Path,
  useFormContext,
} from "react-hook-form";

interface ColorOption {
  value: string;
  color: string;
}

interface ColorPickerProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  options: ColorOption[];
}

export function ColorPicker<T extends FieldValues>({
  name,
  label,
  options,
}: ColorPickerProps<T>) {
  const { register, watch } = useFormContext<T>();

  const selected = watch(name);

  return (
    <div className="w-full">
      <label className="font-['Open_Sans'] text-zinc-300">
        {label}
      </label>

      <div className="mt-3 flex gap-3">
        {options.map(({ value, color }) => {
          const isSelected = selected === value;

          return (
            <label
              key={value}
              className="cursor-pointer"
            >
              <input
                type="radio"
                value={value}
                {...register(name)}
                className="hidden"
              />

              <div
                className={`
                  flex h-10.5 w-10.5 items-center justify-center
                  rounded-full border-2 transition-all
                  ${
                    isSelected
                      ? "border-blue-500"
                      : "border-transparent hover:border-zinc-600 bg-[#2D3136]"
                  }
                `}
              >
                <div
                  className="h-7 w-7 rounded-full"
                  style={{ backgroundColor: color }}
                />
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}