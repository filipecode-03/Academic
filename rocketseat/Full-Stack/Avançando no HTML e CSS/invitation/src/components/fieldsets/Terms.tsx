import type { InvitationFormData } from "../../types/invitation";
import { Checkbox } from "../form/Checkbox";

function Terms() {
    return (
        <fieldset className="border-[#363B40] border-t-3 pt-10 mt-12 flex flex-col gap-3">
            <Checkbox<InvitationFormData> rules={{ required: "Você precisa aceitar os termos." }} name="terms">
                Li e concordo com os{" "}
                <span className="text-blue-400 underline">
                    Termos e Condições
                </span>
                {" "} e com a{" "}
                <span className="text-blue-400 underline">
                    Políticas de Privacidade
                </span>
            </Checkbox>
            <Checkbox<InvitationFormData> 
                name="tEmail" 
                children="Aceito receber atualizações e promoções por e-mail" 
            />
            <Checkbox<InvitationFormData> 
                name="tSms" 
                children="Aceito receber atualizações e promoções por SMS" 
            />
        </fieldset>
    )
}

export default Terms