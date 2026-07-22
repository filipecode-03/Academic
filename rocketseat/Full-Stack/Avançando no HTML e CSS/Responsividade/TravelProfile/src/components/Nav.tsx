import logo from '../assets/images/Logo.png'
import { Search } from 'lucide-react';
import profile from '../assets/images/ProfileLow.png'

function Nav() {
    return(
        <nav className='p-4 lg:px-8 lg:py-5 flex items-center justify-between'>
            <img src={logo} alt="logo" />
            <div className='flex items-center text-gray-500 gap-4'>
                <Search className='text-gray-500' />
                <p className='hidden lg:block'>Explorar</p>
                <p className='hidden lg:block'>Minhas viagens</p>
                <img src={profile} alt="profile" />
            </div>
        </nav>
    )
}

export default Nav