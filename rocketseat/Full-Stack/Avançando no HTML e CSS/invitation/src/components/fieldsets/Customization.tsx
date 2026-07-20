import { PaintbrushVertical } from 'lucide-react';
import type { InvitationFormData } from "../../types/invitation";
import { ColorPicker } from '../form/ColorPicker';
import { ThemePicker } from '../form/ThemePicker';
import { ToggleSwitch } from '../form/ToggleSwitch';
import birthday from '../../assets/images/Image01.png'
import kids from '../../assets/images/Image02.png'
import formatura from '../../assets/images/Image03.png'
import wedding from '../../assets/images/Image04.png'
import babyShower from '../../assets/images/Image05.png'
import bridalShower from '../../assets/images/Image06.png'
import Carnival from '../../assets/images/Image07.png'
import Easter from '../../assets/images/Image08.png'
import SaintJohn from '../../assets/images/Image09.png'
import Halloween from '../../assets/images/Image10.png'
import Christmas from '../../assets/images/Image11.png'
import Other from '../../assets/images/Image12.png'
import { UploadInput } from '../form/UploadInput';

function Customization(){

    return(

        <fieldset className='mt-10'>
            <legend className="flex items-center gap-3">
                <PaintbrushVertical
                    className="text-[#869198]"
                />
                <span className="font-semibold font-['Baloo_2'] text-[18px]">
                    Personalização
                </span>
            </legend>
            <div className='mt-6'>
                <ColorPicker<InvitationFormData>
                    name="primaryColor"
                    label="Cor principal"
                    options={[
                        { value: "azulClaro", color: "#59B2FF" },
                        { value: "azulEscuro", color: "#6A59FF" },
                        { value: "lavanda", color: "#B259FF" },
                        { value: "lavandaClara", color: "#FF59F9" },
                        { value: "rosa", color: "#FF598B" },
                        { value: "rosaClara", color: "#FF5959" },
                        { value: "laranja", color: "#FF8B59" },
                        { value: "amarelo", color: "#FFCD59" },
                        { value: "lima", color: "#E1FF59" },
                        { value: "verde", color: "#59FF90" },
                        { value: "azulPiscina", color: "#59FFF9" }
                    ]}
                />
            </div>
            <div className='mt-7'>
                <ThemePicker<InvitationFormData>
                    name="theme"
                    label="Tema do evento"
                    options={[
                        {
                            value: "birthday",
                            title: "Aniversário",
                            image: birthday,
                        },
                        {
                            value: "kids",
                            title: "Infantil",
                            image: kids,
                        },
                        {
                            value: "formatura",
                            title: "Formatura",
                            image: formatura,
                        },
                        {
                            value: "wedding",
                            title: "Casamento",
                            image: wedding,
                        },
                        {
                            value: "babyShower",
                            title: "Chá de bebê",
                            image: babyShower,
                        },
                        {
                            value: "bridalShower",
                            title: "Chá de panela",
                            image: bridalShower,
                        },
                        {
                            value: "Carnival",
                            title: "Carnaval",
                            image: Carnival,
                        },
                        {
                            value: "Easter",
                            title: "Páscoa",
                            image: Easter,
                        },
                        {
                            value: "SaintJohn",
                            title: "São joão",
                            image: SaintJohn,
                        },
                        {
                            value: "Halloween",
                            title: "Halloween",
                            image: Halloween,
                        },
                        {
                            value: "Christmas",
                            title: "Natal",
                            image: Christmas,
                        },
                        {
                            value: "Other",
                            title: "Outro",
                            image: Other,
                        },
                    ]}
                />
            </div>
            <div className='mt-7 flex'>
                <ToggleSwitch<InvitationFormData>
                    name="isDark"
                    label="Estilo"
                    activeText="Escuro"
                    inactiveText="Claro"
                />
                <UploadInput<InvitationFormData>
                    name="cover"
                    label="Foto de capa"
                    rules={{
                        required: "Selecione uma imagem"
                    }}
                />
            </div>
        </fieldset>

    )

}

export default Customization