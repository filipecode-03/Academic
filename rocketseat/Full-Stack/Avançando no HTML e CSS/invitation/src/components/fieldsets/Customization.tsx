import { useFormContext } from "react-hook-form";
import type { InvitationFormData } from "../../types/invitation";

function Customization(){

    const { register } = useFormContext<InvitationFormData>();

    return(

        <fieldset>

            ...

        </fieldset>

    )

}

export default Customization