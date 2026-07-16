import { MoveLeft, UploadCloud, Check } from "lucide-react";
import { useForm, type FieldError, type SubmitHandler } from "react-hook-form";
import type { ChildFormData } from "../types/childForm";
import { type ChangeEvent, useState } from "react";
import manha from '../assets/images/sun-cloud-02.png'
import tarde from '../assets/images/sun-02.png'
import OptionCard from "./OptionCard";
import futebol from '../assets/images/football.png'
import basquete from '../assets/images/basketball-02.png'
import natacao from '../assets/images/swimming.png'
import yoga from '../assets/images/yoga-02.png'
import volley from '../assets/images/volleyball.png'
import box from '../assets/images/boxing-glove-01.png'


function Form() {

  const {
    register,
    handleSubmit,
    watch,
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

  const turno = watch("turno");
  const esporte = watch("esporte");
  const termos = watch("termos");

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
          <fieldset className="space-y-6">
            <legend className="font-semibold text-stone-800">
              Opções de matrícula
            </legend>
            <div className="space-y-3">
              <label className="text-sm font-medium text-stone-700">
                Selecione o turno de estudo
              </label>
              <div className="grid grid-cols-2 mt-4 gap-4">
                {/* Manhã */}
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    value="manha"
                    {...register("turno", {
                      required: "Selecione um turno.",
                    })}
                    className="peer sr-only"
                  />
                  <div
                    className={`relative flex flex-col items-center gap-4 rounded-xl border p-6 transition ${
                      turno === "manha"
                        ? "border-[#E43A12]"
                        : "border-stone-300"
                    }`}
                  >          
                    <div
                      className={`absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border transition ${
                        turno === "manha"
                          ? "border-[#E43A12] bg-[#E43A12]"
                          : "border-stone-300"
                      }`}
                    >
                      {turno === "manha" && (
                        <Check size={16} className="text-white" strokeWidth={3} />
                      )}
                    </div>
                    {/* Imagem */}
                    <img src={manha} alt="manha" />
                    <span className="font-medium">Manhã</span>
                  </div>
                </label>

                {/* Tarde */}
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    value="tarde"
                    {...register("turno")}
                    className="peer sr-only"
                  />

                  <div
                    className={`relative flex flex-col items-center gap-4 rounded-xl border p-6 transition ${
                      turno === "tarde"
                        ? "border-[#E43A12]"
                        : "border-stone-300"
                    }`}
                  >          
                    <div
                      className={`absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border transition ${
                        turno === "tarde"
                          ? "border-[#E43A12] bg-[#E43A12]"
                          : "border-stone-300"
                      }`}
                    >
                      {turno === "tarde" && (
                        <Check size={16} className="text-white" strokeWidth={3} />
                      )}
                    </div>

                    {/* Imagem */}
                    <img src={tarde} alt="tarde" />

                    <span className="font-medium">Tarde</span>
                  </div>
                </label>
              </div>

              {errors.turno && (
                <span className="text-sm font-medium text-red-600">
                  {errors.turno.message}
                </span>
              )}
            </div>
            <label className="text-sm font-medium text-stone-700">
                Em qual esporte você gostaria de inscrever seu filho
            </label>
            <div className="grid grid-cols-4 mt-4 gap-4">
              <OptionCard
                value="futebol"
                label="Futebol"
                image={<img src={futebol} alt="Futebol"/>}
                register={register("esporte", {
                  required: "Selecione um esporte.",
                })}
                checked={esporte === "futebol"}
              />

              <OptionCard
                value="basquete"
                label="Basquete"
                image={<img src={basquete} alt="basquete"/>}
                register={register("esporte")}
                checked={esporte === "basquete"}
              />

              <OptionCard
                value="natacao"
                label="Natação"
                image={<img src={natacao} alt="Natação"/>}
                register={register("esporte")}
                checked={esporte === "natacao"}
              />

              <OptionCard
                value="yoga"
                label="Yoga"
                image={<img src={yoga} alt="Yoga"/>}
                register={register("esporte")}
                checked={esporte === "yoga"}
              />

              <OptionCard
                value="volei"
                label="Volley"
                image={<img src={volley} alt="volley"/>}
                register={register("esporte")}
                checked={esporte === "volei"}
              />

              <OptionCard
                value="box"
                label="Box"
                image={<img src={box} alt="box"/>}
                register={register("esporte")}
                checked={esporte === "box"}
              />
            </div>
            {errors.esporte && (
              <span className="text-sm font-medium text-red-600">
                {errors.esporte.message}
              </span>
            )}
          </fieldset>
          <fieldset>
            <label className="flex cursor-pointer items-start gap-4">
              <input
                type="checkbox"
                {...register("termos", {
                  required: "Você precisa aceitar os termos para continuar.",
                })}
                className="peer sr-only"
              />
              <div
                className={`flex h-5 w-7 items-center justify-center rounded-md border-2 ${
                  termos
                    ? "border-[#E43A12] bg-[#E43A12]"
                    : "border-stone-300"
                }`}
              >
                {termos && (
                  <Check
                    size={16}
                    strokeWidth={3}
                    className="text-white"
                  />
                )}
              </div>
              <p>Declaro que li e concordo com os <span className="text-[#E43A12] font-medium">Termos e Condições</span> e com a <span className="text-[#E43A12] font-medium">Política de Privacidade</span> da escola Estrela do Amanhã. </p>
            </label>
            {errors.termos && (
              <p className="text-sm font-medium text-red-600">
                {errors.termos.message}
              </p>
            )}
          </fieldset>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="py-3 px-6 rounded-lg border border-[#E43A12] bg-white font-semibold text-[#E43A12] transition hover:bg-[#FFF6F3]"
            >
              Salvar respostas
            </button>

            <button
              type="submit"
              className="py-3 px-6 rounded-lg bg-[#E43A12] font-semibold text-white transition hover:bg-[#cf3410]"
            >
              Fazer matrícula
            </button>
          </div>
      </form>
    </div>
  );
}

export default Form;