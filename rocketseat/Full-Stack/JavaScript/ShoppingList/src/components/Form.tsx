import { useForm } from "react-hook-form";

interface FormData {
  item: string;
}

interface FormProps {
  onAddItem: (item: string) => void;
}

function Form({ onAddItem }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    onAddItem(data.item);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-11 flex flex-col lg:flex-row gap-4"
    >
      <div>
        <input
          {...register("item", {
            required: "Digite um item",
          })}
          type="text"
          placeholder="Adicione um novo item"
          className="w-full lg:w-100 rounded-xl border-3 border-gray-300 px-4 py-3 outline-none focus:border-[#CA3884]"
        />

        {errors.item && (
          <span className="text-red-500 text-sm">
            {errors.item.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#CA3884] text-white cursor-pointer w-full py-3 rounded-xl font-medium hover:bg-[#b82d74] transition"
      >
        Adicionar item
      </button>
    </form>
  );
}

export default Form;