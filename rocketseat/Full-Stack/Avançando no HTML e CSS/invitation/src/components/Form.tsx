import { FormProvider, useForm } from "react-hook-form";

import AboutEvent from "./fieldsets/AboutEvent";
import Customization from "./fieldsets/Customization";
import Contact from "./fieldsets/Contact";
import Terms from "./fieldsets/Terms";

import type { InvitationFormData } from "../types/invitation";
import { SubmitButton } from "./form/SubmitButton";

function Form() {

    const methods = useForm<InvitationFormData>({
        defaultValues: {
            eventType: "presential",
            isDark: true
        },
    });

    const {
        formState: { isSubmitting },
    } = methods;

    async function onSubmit(data: InvitationFormData) {
        console.log(data);

        // Simulação de uma requisição
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Convite criado!");
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
                        <Terms />
                        <SubmitButton isLoading={isSubmitting}>
                            Gerar convite
                        </SubmitButton>
                    </form>
                </FormProvider>
            </section>
        </div>
    );
}

export default Form;