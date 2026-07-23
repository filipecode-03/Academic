import { Handbag, Play } from 'lucide-react';
import eclipse from '../assets/images/Ellipse.svg'
import patins from '../assets/images/patins-image.png'
import star01 from '../assets/images/Stars 1.svg'
import star02 from '../assets/images/Stars 2.svg'
import AnimatedWord from './AnimatedWord';
import { motion } from "motion/react";

function Header() {

    return (
        <header className='pt-4 pb-12 px-6 lg:px-8 lg:py-10 flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between gap-8'>
            <div className="relative mx-auto lg:mx-0 flex h-73.75 lg:h-122 lg:w-122 w-73.75">
                <img
                    src={eclipse}
                    alt="eclipse"
                    className="absolute animate-eclipse inset-0 z-10 h-full w-full object-contain"
                />

                <img
                    src={patins}
                    alt="patins"
                    className="absolute animate-patins z-20 w-78 lg:w-[488px] lg:h-[462px] h-73.75"
                />

                <img
                    src={star01}
                    alt="star01"
                    className="absolute animate-star-1 -left-1 top-23 lg:top-40 z-30 w-14 lg:w-[88px] lg:h-[72px] h-11.25"
                />

                <img
                    src={star02}
                    alt="star02"
                    className="absolute bottom-23 animate-star-2 right-0 z-30 w-6.25 h-9.5"
                />
            </div>
            <div className='flex flex-col gap-12'>
                <div className='font-bold text-[32px] lg:text-[64px] lg:leading-[125%]'>
                    <h1 className='font-["Syne"]'>Snitap, sua vida mais <AnimatedWord /></h1>
                </div>
                <div className='flex flex-col gap-6 w-71 lg:w-131.25 lg:flex-row-reverse lg:items-center lg:justify-end'>
                    <motion.button
                        whileHover={{
                            scale: 1.10,
                            y: 1,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 18,
                        }}
                        className="flex items-center gap-4"
                    >
                        <div className="bg-white shadow95 rounded-full p-6">
                            <Play />
                        </div>

                        <p>VEJA EM AÇÃO</p>
                    </motion.button>
                                        <motion.button
                        whileHover={{
                            scale: 1.10,
                            y: 1,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 18,
                        }}
                        className="flex shadow95 items-center gap-4 px-12 py-6 rounded-full bg-[#FFCD1E]"
                    >
                        <Handbag className="text-[24px]" />
                        COMPRAR AGORA
                    </motion.button>
                </div>
            </div>
        </header>
    )
}

export default Header