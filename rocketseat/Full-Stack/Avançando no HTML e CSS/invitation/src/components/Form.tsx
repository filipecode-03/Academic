import { FormProvider, useForm } from "react-hook-form";

import AboutEvent from "./fieldsets/AboutEvent";
import Customization from "./fieldsets/Customization";
import Contact from "./fieldsets/Contact";

import type { InvitationFormData } from "../types/invitation";

function Form() {

    const methods = useForm<InvitationFormData>({
        defaultValues: {
            eventType: "presential",
            isDark: true
        }
    });

    function onSubmit(data: InvitationFormData) {
        console.log(data);
    }

    return (
        <div className="pl-108 text-white">
            <section className="rounded-3xl bg-[#212427] p-20">
                <h2 className='font-["Baloo_2"] text-[28px] font-bold'>
                    Crie seu convite
                </h2>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-10">
                        <AboutEvent />
                        <Customization />
                        <Contact />
                    </form>
                </FormProvider>
            </section>
        </div>
    );
}

export default Form;