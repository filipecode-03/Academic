import {
  type FieldValues,
  type Path,
  useFormContext,
} from "react-hook-form";

interface ThemeOption {
  value: string;
  title: string;
  image: string;
}

interface ThemePickerProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  options: ThemeOption[];
}

export function ThemePicker<T extends FieldValues>({
  name,
  label,
  options,
}: ThemePickerProps<T>) {
  const { register, watch } = useFormContext<T>();

  const selected = watch(name);

  return (
    <div className="w-full">
      <label className="font-['Open_Sans'] text-zinc-300">
        {label}
      </label>

      <div className="mt-3 grid grid-cols-4 gap-4">
        {options.map(({ value, title, image }) => {
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
                  overflow-hidden rounded-xl border p-1 transition-all

                  ${
                    isSelected
                      ? "border-blue-500"
                      : "border-zinc-700 hover:border-zinc-500"
                  }

                  bg-zinc-900
                `}
              >
                <img
                  src={image}
                  alt={title}
                  className="h-24 w-full rounded-lg object-cover"
                />

                <p
                  className={`
                    py-3 text-center text-sm font-medium

                    ${
                      isSelected
                        ? "text-white"
                        : "text-zinc-300"
                    }
                  `}
                >
                  {title}
                </p>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}