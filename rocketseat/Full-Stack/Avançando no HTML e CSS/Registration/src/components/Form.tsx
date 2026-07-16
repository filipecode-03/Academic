import { MoveLeft, UploadCloud } from "lucide-react";
import { useForm, type FieldError, type SubmitHandler } from "react-hook-form";
import type { ChildFormData } from "../types/childForm";
import { type ChangeEvent, useState } from "react";

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

  const [cep, setCep] = useState("");

  const handleCepChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 8);

    if (value.length > 5) {
      value = value.replace(/(\d{5})(\d{1,3})/, "$1-$2");
    }

    setCep(value);
  };

  const inputStyle = (error?: FieldError) =>
  `h-12 rounded-lg border px-4 outline-none transition ${
    error
      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
      : "border-stone-300 focus:border-[#E43A12] focus:ring-2 focus:ring-[#F9D2C4]"
  }`;


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
              className={inputStyle(errors.name)}
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
              className={inputStyle(errors.birthDate)}
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
              className={inputStyle(errors.gender)}
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
        
        <fieldset className="space-y-6">
            <legend className="font-semibold text-stone-800">
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
                maxLength={9}
                {...register("cep", {
                  required: "Informe o CEP.",
                })}
                value={cep}
                onChange={handleCepChange}
                className={inputStyle(errors.cep)}
              />
              {errors.cep && (
                <span className="text-sm font-medium text-red-600">
                  {errors.cep.message}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-6">
              {/* Rua */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-stone-600">
                  Rua
                </label>
                <input
                  type="text"
                  placeholder="Nome da rua"
                  {...register("rua", {
                    required: "Informe a rua.",
                  })}
                  className={inputStyle(errors.rua)}
                />
                {errors.rua && (
                  <span className="text-sm font-medium text-red-600">
                    {errors.rua.message}
                  </span>
                )}
              </div>
              {/* Número */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-stone-600">
                  Número
                </label>

                <input
                  type="text"
                  placeholder="123"
                  {...register("numero", {
                    required: "Informe o número.",
                  })}
                  className={inputStyle(errors.numero)}
                />

                {errors.numero && (
                  <span className="text-sm font-medium text-red-600">
                    {errors.numero.message}
                  </span>
                )}
              </div>
              {/* Cidade */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-stone-600">
                  Cidade
                </label>

                <input
                  type="text"
                  placeholder="Sua cidade"
                  {...register("cidade", {
                    required: "Informe a cidade.",
                  })}
                  className={inputStyle(errors.cidade)}
                />

                {errors.cidade && (
                  <span className="text-sm font-medium text-red-600">
                    {errors.cidade.message}
                  </span>
                )}
              </div>
              {/* Estado */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-stone-600">
                  Estado
                </label>
                <select
                  {...register("estado", {
                    required: "Selecione um estado.",
                  })}
                  className={inputStyle(errors.estado)}
                >
                  <option value="">Selecione</option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
                {errors.estado && (
                  <span className="text-sm font-medium text-red-600">
                    {errors.estado.message}
                  </span>
                )}
              </div>
            </div>
          </fieldset>
          <fieldset className="space-y-6">
            <legend className="font-semibold text-stone-800">
              Informações do responsável
            </legend>

            {/* Nome */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="responsavel"
                className="text-sm font-medium text-stone-700"
              >
                Nome do responsável
              </label>
              <input
                id="responsavel"
                type="text"
                {...register("responsavel", {
                  required: "Informe o nome do responsável.",
                })}
                className={inputStyle(errors.responsavel)}
              />
              {errors.responsavel && (
                <span className="text-sm font-medium text-red-600">
                  {errors.responsavel.message}
                </span>
              )}
            </div>
            {/* Telefone */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="telefone"
                className="text-sm font-medium text-stone-700"
              >
                Telefone
              </label>
              <input
                id="telefone"
                type="tel"
                {...register("telefone", {
                  required: "Informe um telefone.",
                })}
                className={inputStyle(errors.telefone)}
              />
              {errors.telefone && (
                <span className="text-sm font-medium text-red-600">
                  {errors.telefone.message}
                </span>
              )}
            </div>
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-stone-700"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Informe um e-mail.",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Digite um e-mail válido.",
                  },
                })}
                className={inputStyle(errors.email)}
              />
              {errors.email && (
                <span className="text-sm font-medium text-red-600">
                  {errors.email.message}
                </span>
              )}
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