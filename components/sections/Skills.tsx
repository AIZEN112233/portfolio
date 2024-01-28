"use client";
import { fromBottomToTop, fromleftToRight } from "@/varients";
import { motion } from "framer-motion";
import MagnifyEffect from "../MagnifyEffect";
import { icons } from "@/constants";
const Skills = () => {
    return (
        <div>
            <MagnifyEffect className='mx-auto w-fit p-10'>
                <motion.h1
                    variants={fromBottomToTop}
                    initial='initial'
                    whileInView='animate'
                    transition={{ duration: 2, type: "spring" }}
                    drag
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    className='text-center text-[40px] font-[500]'
                >
                    Skills
                </motion.h1>
            </MagnifyEffect>
            <div className='mx-auto flex max-w-[700px] flex-wrap justify-center gap-x-[36px] gap-y-[42px] max-md:gap-4'>
                {icons.map((I, index) => (
                    <MagnifyEffect>
                        <motion.div
                            variants={fromleftToRight}
                            initial='initial'
                            whileInView='animate'
                            transition={{
                                duration: 2,
                                type: "spring",
                                delay: index / 4,
                            }}
                        >
                            <I />
                        </motion.div>
                    </MagnifyEffect>
                ))}
            </div>
        </div>
    );
};

export default Skills;
