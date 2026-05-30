import logoMark from '../../public/images/logo-mark.svg'
import github from '../../public/images/icon-github.svg'

function Ticket({ userData }) {

    const avatarUrl = userData?.avatar?.[0]
        ? URL.createObjectURL(userData.avatar[0])
        : "";
    
    return (
        <div className="px-8 mt-10 pb-85 text-white">
            <div className="text-center">
                <h1 className="text-[38px] font-extrabold leading-tight max-w-110 mx-auto">Congrats,{" "} <span className="bg-linear-to-r from-[#F08178] to-[#FAE5E6] bg-clip-text text-transparent">{userData.fullName}</span>! {" "} Your ticket is ready.</h1>
                <p className="mt-6 text-neutral-300 text-[25px] max-w-150 lg:w-full mx-auto leading-8">We've emailed your ticket to {" "} <span className="text-orange-400">{userData.email}</span> {" "}and will send updates in the run up to the event.</p>
            </div>
            {/* Ticket */}
            <div className="relative mx-auto mt-20 w-full max-w-150 aspect-600/280 bg-[url('../../public/images/pattern-ticket.svg')] bg-contain bg-center bg-no-repeat">                
            {/* Top */}
                <div className="absolute top-[12%] left-[5%] flex items-start gap-3">
                    <img src={logoMark} alt="logo mark"/>
                    <div>
                        <h2 className="font-bold leading-5 text-[30px]">
                            Coding Conf
                        </h2>
                        <p className="text-neutral-400 mt-3 text-[17px]">
                            Jan 31, 2025 / Austin, TX
                        </p>
                    </div>
                </div>
                {/* Bottom */}
                <div className="absolute bottom-[10%] left-[5%] flex items-center gap-3">
                    <img src={avatarUrl} alt="avatar" className="w-15 h-15 rounded-xl object-cover"/>
                    <div>
                        <h3 className="font-semibold text-[28px]">
                            {userData.fullName}
                        </h3>
                        <div className='flex items-center gap-1'>
                            <img src={github} alt="github" />
                            <p className="text-neutral-400 text-[20px]">
                                @{userData.github}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Ticket Number */}
                <div className="absolute right-[0%] top-1/2 -translate-y-1/2 rotate-90 text-neutral-400 text-[28px]">
                    #01609
                </div>
            </div>
        </div>
    )
}

export default Ticket