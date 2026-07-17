import {
  type FieldValues,
  type Path,
  type RegisterOptions,
  useFormContext,
} from "react-hook-form";

interface TextareaProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  rows?: number;
  rules?: RegisterOptions<T>;
}

export function Textarea<T extends FieldValues>({
  name,
  label,
  placeholder,
  rows = 5,
  rules,
}: TextareaProps<T>) {
  const { register } = useFormContext<T>();

  return (
    <div>

      <label className="text-zinc-300 font-['Open_Sans']">{label}</label>

      <textarea
        rows={rows}
        placeholder={placeholder}
        {...register(name, rules)}
        className="w-full rounded-lg mt-3 border border-zinc-700 bg-zinc-900 p-3"
      />

    </div>
  );
}