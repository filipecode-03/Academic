import { motion } from "motion/react";
import type { TeamMember } from "../../../data/team";

interface Props {
    member: TeamMember;
}

export default function TeamSlide({ member }: Props) {
    return (
        <div
            className="
            flex
            flex-col
            md:flex-row
            items-center
            gap-8
            w-full
        "
        >
            <motion.img
                key={member.image}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .6 }}
                src={member.image}
                alt={member.name}
                className="
                    w-40
                    h-40
                    rounded
                    object-cover
                    shadow-xl
                    shrink-0
                "
            />

            <div className="flex-1">

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .15 }}
                    className="
                    text-yellow-400
                    font-bold
                    uppercase
                    tracking-wider
                    text-sm
                "
                >
                    {member.role}
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .3 }}
                    className="
                    text-white
                    text-3xl
                    font-bold
                "
                >
                    {member.name}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .45 }}
                    className="
                    text-gray-300
                    mt-4
                    leading-7
                "
                >
                    {member.description}
                </motion.p>

            </div>

        </div>
    );
}