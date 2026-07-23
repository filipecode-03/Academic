import profile from '../assets/images/instaPic.png'
import { motion } from "motion/react";

function Photos() {
    return (
        <section className="p-6">
            <div className='text-center'>
                <h3>GALERIA DE FOTOS</h3>
                <h2>#usesnitap por aí</h2>
            </div>
            <div className='mt-6 flex flex-col gap-6'>
                <div className='grid grid-cols-1 gap-6'>
                    <motion.div className="relative w-78 h-64 overflow-hidden rounded-[40px]"
                        initial={{
                            opacity: 0,
                            y: 80,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        whileHover="hover"
                    >
                        {/* Background */}
                        <motion.div
                            variants={{
                            hover: {
                                scale: 1.15,
                            },
                            }}
                            transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            }}
                            className="absolute inset-0 bg-[url(./assets/images/imageMobile01.png)] bg-cover bg-center"
                        />

                        {/* Perfil */}
                        <motion.div
                            variants={{
                            hover: {
                                opacity: 1,
                                y: 0,
                            },
                            }}
                            initial={{
                            opacity: 0,
                            y: 20,
                            }}
                            transition={{
                            duration: .35,
                            }}
                            className="absolute bottom-5 left-37 flex items-center gap-3"
                        >
                            <img src={profile} alt="profile" />

                            <p className="font-semibold text-white text-[14px]">
                            @laviniapereira
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