import google from '@/public/google-safe-color.png'
import Image from 'next/image'

export default function Certificados() {
    return(
        <div>
            <h2 className='font-semibold text-[20px] uppercase'>Certificados</h2>
            <div className='mt-3'>
                <Image src={google} alt="google" className='w-50' loading="eager" />
            </div>
        </div>
     )
}