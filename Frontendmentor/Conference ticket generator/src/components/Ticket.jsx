import logoMark from '../../public/images/logo-mark.svg'

function Ticket({ userData }) {

    const avatarUrl = userData?.avatar?.[0]
        ? URL.createObjectURL(userData.avatar[0])
        : "";
    
    return (
        <div className="px-5 pb-20 text-white">
            <div className="text-center">
                <h1 className="text-[35px] font-extrabold leading-tight max-w-100 mx-auto">Congrats,{" "} <span className="text-orange-400">{userData.fullName}</span>! Your ticket is ready.</h1>
                <p className="mt-6 text-neutral-300 text-lg max-w-150 mx-auto leading-relaxed">We've emailed your ticket to {" "} <span className="text-orange-400">{userData.email}</span> {" "}and will send updates in the run up to the event.</p>
            </div>
            {/* Ticket */}
            <div className="flex justify-center mt-16">
                <div className="w-full h-70 bg-[url('../../public/images/pattern-ticket.svg')] bg-center bg-no-repeat p-6 relative overflow-hidden">
                    {/* Top */}
                    <div className="flex items-center gap-4">
                        <img src={logoMark} alt="logo mark" className="w-12"/>
                        <div>
                            <h2 className="text-3xl font-bold">
                                Coding Conf
                            </h2>
                            <p className="text-neutral-300">
                                Jan 31, 2025 / Austin, TX
                            </p>
                        </div>
                    </div>
                    {/* Bottom */}
                    <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <img src={avatarUrl} alt="avatar" className="w-20 h-20 rounded-2xl object-cover border-2 border-white/20"/>
                        <div>
                            <h3 className="text-2xl font-semibold">
                                {userData.fullName}
                            </h3>
                            <p className="text-neutral-300 text-lg">
                                @{userData.github}
                            </p>
                        </div>
                    </div>
                    {/* Ticket Number */}
                    <div className="absolute -right-7.5 top-1/2 -translate-y-1/2 rotate-90 text-neutral-400 text-2xl tracking-[4px]">
                        #01609
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket