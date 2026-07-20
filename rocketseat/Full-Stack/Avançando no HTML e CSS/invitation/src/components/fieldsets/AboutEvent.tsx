import { Calendar, Building2, Video } from "lucide-react";
import { Input } from "../form/Input";
import { SegmentedControl } from "../form/SegmentedControl";
import { Textarea } from "../form/Textarea";
import type { InvitationFormData } from "../../types/invitation";

function AboutEvent() {

    return (
        <fieldset>
            <legend className="flex items-center gap-3">
                <Calendar
                    className="text-[#869198]"
                />
                <span className="font-semibold font-['Baloo_2'] text-[18px]">
                    Sobre o evento
                </span>
            </legend>
            <div className="mt-6">
                <Input<InvitationFormData>
                    name="title"
                    label="Título"
                    placeholder="Nome do evento"
                    rules={{
                        required: "Informe o título"
                    }}
                />
            </div>
            <div className="flex items-center gap-5 mt-4">
                <Input<InvitationFormData>
                    name="startsAt"
                    type="datetime-local"
                    label="Início"
                    rules={{
                        required: "Informe a data"
                    }}
                />

                <Input<InvitationFormData>
                    name="endsAt"
                    type="datetime-local"
                    label="Fim"
                    rules={{
                        required: "Informe a data"
                    }}
                />
            </div>
            <div className="flex items-center gap-5 mt-4">
                <SegmentedControl<InvitationFormData>
                    name="eventType"
                    label="Tipo"
                    options={[
                        {
                        value: "presential",
                        label: "Presencial",
                        icon: <Building2 size={16} />,
                        },
                        {
                        value: "online",
                        label: "Online",
                        icon: <Video size={16} />,
                        },
                    ]}
                />
                
                <Input<InvitationFormData>
                    name="local"
                    label="Local"
                    placeholder="Link ou endereço"
                    rules={{
                        required: "Informe o link ou endereço"
                    }}
                />
            </div>
            <div className="mt-4">
                <Textarea<InvitationFormData>
                    name="description"
                    label="Descrição"
                    placeholder="Escreva sobre os detalhes do evento"
                />
            </div>
        </fieldset>
    );
}

export default AboutEvent;