import profile from '../assets/images/ProfileBig.png'
import { MapPin, Plane, Image } from 'lucide-react';


function Profile() {
    return (
        <header className='p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8'>
            <div className='flex lg:w-[592px] lg:gap-8 flex-col lg:flex-row gap-4 items-start lg:items-center'>
                <img src={profile} alt="profile" />
                <div>
                    <h1 className='text-[24px] font-bold'>Isabela Torres</h1>
                    <p className='text-gray-500 text-[14px]'>Amante de viagens, cultura e gastronomia. 🌍✈️</p>
                    <p className='text-gray-500 text-[14px]'>Aqui compartilho as histórias registradas em cada clique, explorando cantinhos fascinantes do nosso planeta a partir da movimentada cidade de São Paulo. 🏙️📸</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 lg:w-[280px] text-gray-500'>
                <div className='flex items-center gap-2'>
                    <MapPin className='text-[#EF5F4C]' />
                    <p className='text-[14px]'>São Paulo, Brazil</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Plane className='text-[#EF5F4C]' />
                    <p className='text-[14px]'>37 países</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Image className='text-[#EF5F4C]' />
                    <p className='text-[14px]'>240 fotos</p>
                </div>
            </div>
        </header>
    )
}

export default Profile