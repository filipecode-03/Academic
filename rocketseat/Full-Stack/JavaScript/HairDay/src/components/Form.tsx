function Form() {
    return(
        <div className="bg-[#232225] text-white rounded-xl max-w-125 p-20">
            <h1 className="font-bold text-[24px]">Agende um atendimento</h1>
            <p className="text-[#98959D] mt-1">Selecione data, horário e informe o nome do cliente para criar o agendamento</p>
            <form className="mt-6">
                <button type="submit" className="bg-[#B8952E] rounded-lg py-4 text-black font-bold uppercase w-full">
                    Agendar
                </button>
            </form>
        </div>
    )
}

export default Form