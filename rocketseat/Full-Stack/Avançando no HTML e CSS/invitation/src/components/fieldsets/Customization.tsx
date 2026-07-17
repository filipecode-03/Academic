import { PaintbrushVertical } from 'lucide-react';
import type { InvitationFormData } from "../../types/invitation";
import { ColorPicker } from '../form/ColorPicker';
import { ThemePicker } from '../form/ThemePicker';
import birthday from '../../assets/images/Image01.png'
import kids from '../../assets/images/Image02.png'
import formatura from '../../assets/images/Image03.png'
import wedding from '../../assets/images/Image04.png'

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
                    ]}
                />
            </div>
        </fieldset>

    )

}

export default Customization