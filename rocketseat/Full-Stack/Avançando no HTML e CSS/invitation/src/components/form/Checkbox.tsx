import {
  type FieldValues,
  type Path,
  type RegisterOptions,
  useFormContext,
} from "react-hook-form";

import { Check } from "lucide-react";

interface CheckboxProps<T extends FieldValues> {
  name: Path<T>;
  children: React.ReactNode;
  rules?: RegisterOptions<T>;
}

export function Checkbox<T extends FieldValues>({
  name,
  children,
  rules,
}: CheckboxProps<T>) {
  const { register, watch, formState: { errors } } = useFormContext<T>();

  const checked = watch(name);
  const error = errors[name];

  return (
    <div className="w-full">
      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          {...register(name, rules)}
          className="hidden"
        />
        <div
          className={`
            flex h-5 w-5 shrink-0 items-center justify-center
            rounded-md border transition-colors
            ${
              checked
                ? "border-blue-400"
                : "border-zinc-600"
            }
          `}
        >
          {checked && (
            <Check
              size={14}
              strokeWidth={3}
              className="text-blue-400"
            />
          )}
        </div>
        <span className="font-['Open_Sans'] text-sm text-zinc-300">
          {children}
        </span>
      </label>
      {error && (
        <p className="mt-2 ml-8 text-sm text-red-400">
          {String(error.message)}
        </p>
      )}
    </div>
  );
}