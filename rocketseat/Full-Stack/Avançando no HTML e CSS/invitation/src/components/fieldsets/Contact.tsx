import { ContactRound } from 'lucide-react';
import type { InvitationFormData } from "../../types/invitation";
import { Input } from '../form/Input';

function Contact(){
    return(
        <fieldset className='mt-10'>
            <legend className="flex items-center gap-3">
                <ContactRound className="text-[#869198]" />
                <span className="font-semibold font-['Baloo_2'] text-[18px]">
                    Dados para contato
                </span>
            </legend>
            <div className="mt-6">
                <Input<InvitationFormData>
                    name="name"
                    label="Nome"
                    placeholder="Nome completo"
                    rules={{
                        required: "Campo obrigatório"
                    }}
                />
            </div>
            <div className="mt-4 flex items-center gap-5">
                <Input<InvitationFormData>
                    name="email"
                    label="E-mail"
                    type="email"
                    placeholder="email@exemplo.com"
                    rules={{
                        required: "Informe um e-mail",
                        pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Informe um e-mail válido",
                        },
                    }}
                />
                <Input<InvitationFormData>
                    name="phone"
                    label="Telefone"
                    type="tel"
                    placeholder="(99) 99999-9999"
                    rules={{
                        required: "Informe um telefone",
                        pattern: {
                        value: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
                        message: "Telefone inválido",
                        },
                    }}
                />
            </div>
        </fieldset>
    )
}

export default Contact