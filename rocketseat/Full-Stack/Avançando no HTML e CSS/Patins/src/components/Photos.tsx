import profile from '../assets/images/instaPic.png'
import { motion } from "motion/react";

function Photos() {
    return (
        <section className="p-6">
            <div className='text-center '>
                <h3 className='font-["Montserrat"] text-[12px]'>GALERIA DE FOTOS</h3>
                <h2 className='font-["Syne"] text-[24px] font-bold'>#usesnitap por aí</h2>
            </div>
            <div className='mt-6 flex flex-col gap-6'>
                <div className='grid grid-cols-1 gap-6'>
                    <motion.div
                        className="relative mx-auto h-64 w-78 overflow-hidden rounded-[40px]"
                        initial={{
                            opacity: 0,
                            y: 80,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        whileHover="hover"
                    >
                        {/* Background */}
                        <motion.div
                            className="absolute inset-0 bg-[url(./assets/images/imageMobile01.png)] bg-cover bg-center"
                            variants={{
                                hover: {
                                    scale: 1.08,
                                },
                            }}
                            transition={{
                                duration: 0.45,
                                ease: "easeOut",
                            }}
                        />
                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 rounded-[40px] bg-linear-to-t from-black/85 to-transparent to-40%"
                            initial={{
                                opacity: 0,
                            }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                },
                            }}
                            transition={{
                                duration: 0.35,
                                ease: "easeOut",
                            }}
                        />
                        {/* Perfil */}
                        <motion.div
                            className="absolute bottom-5 left-37 flex items-center gap-2 "
                            initial={{
                                opacity: 0,
                                y: 12,
                            }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                                delay: 0.05,
                            }}
                        >
                            <img
                                src={profile}
                                alt="profile"
                                className="rounded-full"
                            />

                            <p className="text-[14px] font-semibold text-white">
                                @laviniapereira
                            </p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="relative mx-auto h-64 w-78 overflow-hidden rounded-[40px]"
                        initial={{
                            opacity: 0,
                            y: 80,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        whileHover="hover"
                    >
                        {/* Background */}
                        <motion.div
                            className="absolute inset-0 bg-[url(./assets/images/imageMobile02.png)] bg-cover bg-center"
                            variants={{
                                hover: {
                                    scale: 1.08,
                                },
                            }}
                            transition={{
                                duration: 0.45,
                                ease: "easeOut",
                            }}
                        />
                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 rounded-[40px] bg-linear-to-t from-black/85 to-transparent to-40%"
                            initial={{
                                opacity: 0,
                            }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                },
                            }}
                            transition={{
                                duration: 0.35,
                                ease: "easeOut",
                            }}
                        />
                        {/* Perfil */}
                        <motion.div
                            className="absolute bottom-5 left-37 flex items-center gap-2 "
                            initial={{
                                opacity: 0,
                                y: 12,
                            }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                                delay: 0.05,
                            }}
                        >
                            <img
                                src={profile}
                                alt="profile"
                                className="rounded-full"
                            />

                            <p className="text-[14px] font-semibold text-white">
                                @lucasantos
                            </p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="relative mx-auto h-64 w-78 overflow-hidden rounded-[40px]"
                        initial={{
                            opacity: 0,
                            y: 80,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        whileHover="hover"
                    >
                        {/* Background */}
                        <motion.div
                            className="absolute inset-0 bg-[url(./assets/images/imageMobile03.png)] bg-cover bg-center"
                            variants={{
                                hover: {
                                    scale: 1.08,
                                },
                            }}
                            transition={{
                                duration: 0.45,
                                ease: "easeOut",
                            }}
                        />
                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 rounded-[40px] bg-linear-to-t from-black/85 to-transparent to-40%"
                            initial={{
                                opacity: 0,
                            }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                },
                            }}
                            transition={{
                                duration: 0.35,
                                ease: "easeOut",
                            }}
                        />
                        {/* Perfil */}
                        <motion.div
                            className="absolute bottom-5 left-37 flex items-center gap-2 "
                            initial={{
                                opacity: 0,
                                y: 12,
                            }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                                delay: 0.05,
                            }}
                        >
                            <img
                                src={profile}
                                alt="profile"
                                className="rounded-full"
                            />

                            <p className="text-[14px] font-semibold text-white">
                                @theresacomt
                            </p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="relative mx-auto h-64 w-78 overflow-hidden rounded-[40px]"
                        initial={{
                            opacity: 0,
                            y: 80,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        whileHover="hover"
                    >
                        {/* Background */}
                        <motion.div
                            className="absolute inset-0 bg-[url(./assets/images/imageMobile04.png)] bg-cover bg-center"
                            variants={{
                                hover: {
                                    scale: 1.08,
                                },
                            }}
                            transition={{
                                duration: 0.45,
                                ease: "easeOut",
                            }}
                        />
                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 rounded-[40px] bg-linear-to-t from-black/85 to-transparent to-40%"
                            initial={{
                                opacity: 0,
                            }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                },
                            }}
                            transition={{
                                duration: 0.35,
                                ease: "easeOut",
                            }}
                        />
                        {/* Perfil */}
                        <motion.div
                            className="absolute bottom-5 left-37 flex items-center gap-2 "
                            initial={{
                                opacity: 0,
                                y: 12,
                            }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                                delay: 0.05,
                            }}
                        >
                            <img
                                src={profile}
                                alt="profile"
                                className="rounded-full"
                            />

                            <p className="text-[14px] font-semibold text-white">
                                @carolzinha__
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
                <div className='grid grid-cols-1 gap-6'>

                </div>
            </div>
        </section>
    )
}

export default Photos