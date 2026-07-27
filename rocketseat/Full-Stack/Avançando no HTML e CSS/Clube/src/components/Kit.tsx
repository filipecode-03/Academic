import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import book from '../assets/images/book.png'
import folheto01 from '../assets/images/bookmark-yellow.png'
import folheto02 from '../assets/images/bookmark-purple.png'
import pin from '../assets/images/pin.png'
import arrowFolheto from '../assets/images/arrowFolheto.png'
import arrowBook from '../assets/images/arrowBook.png'
import arrowPin from '../assets/images/arrowPin.png'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Kit() {

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 80%", "end 100%"],
    });

    const folder1X = useTransform(scrollYProgress,[0,1],[0,65]);
    const folder1Rotate = useTransform(scrollYProgress,[0,1],[0,12]);

    const folder2X = useTransform(scrollYProgress,[0,1],[0,95]);
    const folder2Rotate = useTransform(scrollYProgress,[0,1],[0,14]);

    const pinX = useTransform(scrollYProgress,[0,1],[0,-80]);

    const pinY = useTransform(scrollYProgress,[0,1],[0,35]);

    const pinScale = useTransform(scrollYProgress,[0,1],[0,1]);

    const opacity = useTransform(
    scrollYProgress,
    [.35,.7],
    [0,1]
    );

    const textY = useTransform(
        scrollYProgress,
        [.35,.7],
        [20,0]
    );

    const arrowOpacity = useTransform(
    scrollYProgress,
    [.45,.8],
    [0,1]
    );

    const arrowScale = useTransform(
        scrollYProgress,
        [.45,.8],
        [.5,1]
    );

    return (
        <section className="px-8 py-26 text-white">
            <div className="flex items-center gap-3 justify-center">
                <FontAwesomeIcon icon={faStar} className="text-[#9446A4] text-[20px]" />
                <h2 className="text-[24px] font-bold">Conheça o kit mensal</h2>
                <FontAwesomeIcon icon={faStar} className="text-[#9446A4] text-[20px]" />
            </div>
            <h3 className="text-center">Recebe uma caixa surpresa todos os meses</h3>
            <section ref={sectionRef} className="mt-16">
                <motion.img
                    src={book}
                    className="relative w-50 mx-auto z-20"
                />

                <motion.img
                    style={{
                        x: folder1X,
                        rotate: folder1Rotate
                    }}
                    src={folheto01}
                    className="w-25"
                />
                <motion.img
                    style={{
                        x: folder2X,
                        rotate: folder2Rotate
                    }}
                    src={folheto02}
                    className="w-25"
                />
                <motion.img
                    style={{
                        x: pinX,
                        y: pinY,
                        scale: pinScale
                    }}
                />

                <motion.p
                    style={{
                        opacity,
                        y:textY
                    }}
                >
                Livro em capa dura
                </motion.p>
                <motion.p />
                <motion.p />

                <motion.img />
                <motion.img />
                <motion.img />
            </section>
        </section>
    )
}

export default Kit