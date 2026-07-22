import logo from '../assets/images/Logo.png'
import { Search } from 'lucide-react';
import profile from '../assets/images/ProfileLow.png'

function Nav() {
    return(
        <nav className='p-4 flex items-center justify-between'>
            <img src={logo} alt="logo" />
            <div className='flex items-center gap-4'>
                <Search className='text-gray-500' />
                <img src={profile} alt="profile" />
            </div>
        </nav>
    )
}

export default Nav