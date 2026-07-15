import { MoveLeft, UploadCloud } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { ChildFormData } from "../types/childForm";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChildFormData>();

  const onSubmit: SubmitHandler<ChildFormData> = (data) => {
    console.log(data);

    if (data.certificate.length > 0) {
      console.log(data.certificate[0]);
    }
  };

  return (
    <div className="w-1/2 overflow-y-auto p-16">
      {/* Cabeçalho */}
      <section className="mb-10">
        <button
          type="button"
          className="mb-6 flex items-center gap-2 text-stone-600 hover:text-[#E43A12]"
        >
          <MoveLeft size={20} />
          <span>Voltar</span>
        </button>

        <h2 className="mb-3 text-4xl font-bold text-stone-900">
          Formulário de matrícula
        </h2>

        <p className="text-stone-600">
          Preencha os dados abaixo para matricular seu filho na escola de
          educação infantil Estrelas do Amanhã.
        </p>
      </section>

      {/* Formulário */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12">
        <fieldset className="space-y-6">
          <legend className="font-semibold text-stone-800">
            Informações da criança
          </legend>

          {/* Nome */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-stone-600">
              Nome completo
            </label>

            <input
              type="text"
              placeholder="Maria Luiza Alves"
              {...register("name", {
                required: "Informe o nome completo",
              })}
              className={`h-12 rounded-lg border px-4 outline-none transition
                ${
                  errors.name
                    ? "border-red-500"
                    : "border-stone-300 focus:border-[#E43A12] focus:shadow-2xs shadow-[#E43A12]"
                }`}
            />

            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Data */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-stone-600">
              Data de nascimento
            </label>

            <input
              type="date"
              {...register("birthDate", {
                required: "Informe a data de nascimento",
              })}
              className={`h-12 rounded-lg border px-4 outline-none transition
                ${
                  errors.birthDate
                    ? "border-red-500"
                    : "border-stone-300 focus:border-[#E43A12] focus:shadow-2xs shadow-[#E43A12]"
                }`}
            />

            {errors.birthDate && (
              <span className="text-sm text-red-500">
                {errors.birthDate.message}
              </span>
            )}
          </div>

          {/* Sexo */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-stone-600">
              Sexo
            </label>

            <select
              {...register("gender", {
                required: "Selecione um sexo",
              })}
              className={`h-12 rounded-lg border bg-white px-4 outline-none transition
                ${
                  errors.gender
                    ? "border-red-500"
                    : "border-stone-300 focus:border-[#E43A12] focus:shadow-2xs shadow-[#E43A12]"
                }`}
            >
              <option value="">Selecione</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
            </select>

            {errors.gender && (
              <span className="text-sm text-red-500">
                {errors.gender.message}
              </span>
            )}
          </div>

          {/* Informações médicas */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-stone-600">
              Informações médicas
            </label>

            <textarea
              rows={5}
              placeholder="Ex.: Ela tem alergia a glúten."
              {...register("medicalInfo")}
              className="resize-none rounded-lg border border-stone-300 p-4 outline-none transition focus:border-[#E43A12] focus:shadow-2xs shadow-[#E43A12]"
            />
          </div>

          {/* Upload */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-stone-600">
              Certidão de nascimento
            </label>

            <label
              htmlFor="certificate"
              className="flex h-44 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-stone-300 transition hover:border-[#E43A12]"
            >
              <UploadCloud
                size={42}
                className="mb-3 text-stone-400"
              />

              <span className="text-center text-sm text-stone-400">
                Clique aqui para
                <br />
                selecionar arquivos
              </span>
            </label>

            <input
              id="certificate"
              type="file"
              className="hidden"
              {...register("certificate", {
                required: "Envie a certidão de nascimento",
              })}
            />

            {errors.certificate && (
              <span className="text-sm text-red-500">
                {errors.certificate.message}
              </span>
            )}
          </div>

        </fieldset>
        <fieldset className="mt-10 space-y-6">
            <legend className="mb-6 text-xl font-semibold text-stone-800">
              Endereço residencial
            </legend>

            {/* CEP */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-stone-600">
                CEP
              </label>

              <input
                type="text"
                placeholder="00000-000"
                className="h-12 rounded-lg border border-stone-300 px-4 outline-none transition focus:border-[#E43A12] focus:ring-2 focus:ring-[#F9D2C4]"
              />
            </div>

            {/* Rua */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-stone-600">
                Rua
              </label>

              <input
                type="text"
                placeholder="Nome da rua"
                className="h-12 rounded-lg border border-stone-300 px-4 outline-none transition focus:border-[#E43A12] focus:ring-2 focus:ring-[#F9D2C4]"
              />
            </div>

            {/* Número */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-stone-600">
                Número
              </label>

              <input
                type="number"
                placeholder="123"
                className="h-12 rounded-lg border border-stone-300 px-4 outline-none transition focus:border-[#E43A12] focus:ring-2 focus:ring-[#F9D2C4]"
              />
            </div>

            {/* Cidade */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-stone-600">
                Cidade
              </label>

              <input
                type="text"
                placeholder="Sua cidade"
                className="h-12 rounded-lg border border-stone-300 px-4 outline-none transition focus:border-[#E43A12] focus:ring-2 focus:ring-[#F9D2C4]"
              />
            </div>

            {/* Estado */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-stone-600">
                Estado
              </label>

              <select className="h-12 rounded-lg border border-stone-300 bg-white px-4 outline-none transition focus:border-[#E43A12] focus:ring-2 focus:ring-[#F9D2C4]">
                <option value="">Selecione</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>
          </fieldset>
          {/* Botão */}
          <button
            type="submit"
            className="mt-6 h-12 w-full rounded-lg bg-[#E43A12] font-semibold text-white transition hover:bg-[#cf3410]"
          >
            Enviar matrícula
          </button>
      </form>
    </div>
  );
}

export default Form;