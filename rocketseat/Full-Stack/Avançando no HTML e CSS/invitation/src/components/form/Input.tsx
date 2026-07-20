import {
  type FieldValues,
  type Path,
  type RegisterOptions,
  useFormContext,
} from "react-hook-form";

interface InputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
  rules?: RegisterOptions<T>;
}

export function Input<T extends FieldValues>({
  name,
  label,
  placeholder,
  type = "text",
  rules,
}: InputProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors[name];

  return (
    <div className="w-full">
      <label className="text-zinc-300 font-['Open_Sans']">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className="w-full rounded-lg mt-3 border border-zinc-700 bg-zinc-900 p-3"
      />
      {error && (
        <p className="text-sm mt-1.5 ml-3 text-red-400">
          {String(error.message)}
        </p>
      )}
    </div>
  );
}