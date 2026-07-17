import { Calendar } from 'lucide-react';

function Form() {
    return (
        <div className="pl-108 text-white">
            <section className="rounded-3xl bg-[#212427] p-20">
                <h2 className='font-["Baloo_2"] text-[28px] font-bold'>Crie seu convite</h2>
                <section className='mt-10'>
                    <div className='flex items-center gap-3'>
                        <Calendar className='text-[#869198]' />
                        <h3>Sobre o evento</h3>
                    </div>
                    <form>

                    </form>
                </section>
            </section>
        </div>
    )
}

export default Form