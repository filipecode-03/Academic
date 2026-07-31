import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import TeamSlide from "./TeamSlide";
import { teamMembers } from "../../../data/team";

export default function Integrantes() {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;

        const timer = setInterval(() => {
            nextSlide();
        }, 100000);

        return () => clearInterval(timer);
    }, [current, paused]);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % teamMembers.length);
    };

    return (
        <section
            className="
            bg-[#06263d]
            py-10
            px-6 mt-[45px]
        "
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="max-w-5xl mx-auto relative">

                <AnimatePresence mode="wait">

                    <motion.div
                        key={teamMembers[current].id}
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -80 }}
                        transition={{
                            duration: .55
                        }}
                    >
                        <TeamSlide member={teamMembers[current]} />
                    </motion.div>

                </AnimatePresence>

                {/* Indicadores */}

                <div className="flex justify-center gap-3 mt-10">

                    {teamMembers.map((_, index) => (

                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`
                                h-3
                                rounded-full
                                transition-all
                                duration-300
                                ${
                                    current === index
                                        ? "w-8 bg-white"
                                        : "w-3 bg-gray-500"
                                }
                            `}
                        />

                    ))}

                </div>

            </div>
        </section>
    );
}