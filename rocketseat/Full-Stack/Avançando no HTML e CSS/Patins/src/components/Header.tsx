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
            <motion.div
                className="relative mx-auto lg:mx-0 flex h-73.75 w-73.75 lg:h-122 lg:w-122"
                
            >
                <motion.img
                src={eclipse}
                alt="eclipse"
                className="absolute inset-0 z-10 h-full w-full object-contain"
                initial={{
                    opacity: 0,
                    scale: .75,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: .9,
                    ease: [0.22,1,0.36,1],
                }}
                />
                <motion.img
                    src={patins}
                    alt="patins"
                    className="absolute z-20 inset-0 m-auto object-contain"
                    initial={{
                        opacity: 0,
                        y: 40,
                        scale: .9,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    transition={{
                        delay: .45,
                        duration: .8,
                        ease: [0.22,1,0.36,1],
                    }}
                />
                <motion.img
                    src={star01}
                    alt="star01"
                    className="absolute -left-1 top-23 lg:top-40 z-30 w-14 h-11.25 lg:w-22 lg:h-18"
                    initial={{
                        opacity: 0,
                        x: -18,
                        y: 18,
                        rotate: -35,
                        scale: .2,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: [0,-8,0],
                        rotate: 0,
                        scale: 1,
                    }}
                    transition={{
                        delay: 1,
                        opacity:{duration:.5},
                        x:{duration:.5},
                        rotate:{duration:.5},
                        scale:{duration:.5},
                        y:{
                            delay:.6,
                            duration:3.2,
                            repeat:Infinity,
                            ease:"easeInOut",
                        }
                    }}
                />
                <motion.img
                    src={star02}
                    alt="star02"
                    className="absolute bottom-23 right-0 z-30 w-6.25 h-9.5"
                    initial={{
                        opacity: 0,
                        x: 18,
                        y: -18,
                        rotate: 35,
                        scale: .2,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: [0,8,0],
                        rotate: 0,
                        scale: 1,
                    }}
                    transition={{
                        delay:1.25,
                        opacity:{duration:.5},
                        x:{duration:.5},
                        rotate:{duration:.5},
                        scale:{duration:.5},
                        y:{
                            delay:.6,
                            duration:3.5,
                            repeat:Infinity,
                            ease:"easeInOut",
                        }
                    }}
                />
            </motion.div>
            <div className='flex flex-col gap-12'>
                <div className='font-bold text-[32px] lg:text-[64px] lg:leading-[125%]'>
                    <h1 className='font-["Syne"]'>Snitap, sua vida mais <AnimatedWord /></h1>
                </div>
                <div className='flex flex-col gap-6 lg:gap-10 w-71 lg:w-131.25 lg:flex-row-reverse lg:items-center lg:justify-end'>
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