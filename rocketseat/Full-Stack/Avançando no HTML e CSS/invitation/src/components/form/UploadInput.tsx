import {
  type FieldValues,
  type Path,
  type RegisterOptions,
  useFormContext,
} from "react-hook-form";
import { Upload, FileText } from "lucide-react";

interface UploadInputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  rules?: RegisterOptions<T>;
}

export function UploadInput<T extends FieldValues>({
  name,
  label,
  rules,
}: UploadInputProps<T>) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<T>();

  const file = watch(name) as FileList | undefined;

  const error = errors[name];

  return (
    <div className="w-full">
      <label className="font-['Open_Sans'] text-zinc-300">
        {label}
      </label>

      <div className="mt-3 flex items-center gap-4">
        <label
          htmlFor={String(name)}
          className="
            flex cursor-pointer items-center gap-2
            rounded-lg
            bg-zinc-800
            px-4
            py-2.5
            transition-colors
            hover:bg-zinc-700
          "
        >
          <Upload size={18} className="text-blue-500" />
          <span className="font-medium">
            Selecionar
          </span>
        </label>
        <span className="text-zinc-400">
          {file?.[0]?.name ?? "Nenhum arquivo selecionado"}
        </span>
      </div>
      <input
        id={String(name)}
        type="file"
        {...register(name, rules)}
        className="hidden"
      />
      {error && (
        <p className="mt-2 text-sm text-red-400">
          {String(error.message)}
        </p>
      )}
    </div>
  );
}