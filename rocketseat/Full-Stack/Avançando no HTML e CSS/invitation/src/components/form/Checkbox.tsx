import {
  type FieldValues,
  type Path,
  useFormContext,
} from "react-hook-form";
import { Check } from "lucide-react";

interface CheckboxProps<T extends FieldValues> {
  name: Path<T>;
  children: React.ReactNode;
}

export function Checkbox<T extends FieldValues>({
  name,
  children,
}: CheckboxProps<T>) {
  const { register, watch } = useFormContext<T>();

  const checked = watch(name);

  return (
    <label className="flex cursor-pointer items-center gap-3">
      <input
        type="checkbox"
        {...register(name)}
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
  );
}