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
            <div className='mt-24 flex flex-col items-center justify-center gap-[42px] max-md:gap-6'>
                {icons.map((i, index) => (
                    <motion.div
                        variants={fromleftToRight}
                        initial='initial'
                        whileInView='animate'
                        transition={{
                            duration: 2,
                            type: "spring",
                            delay: index / 2,
                        }}
                        className='flex flex-wrap gap-[36px] max-md:justify-center'
                    >
                        {i.map((Icon, index) => (
                            <motion.div
                                variants={fromleftToRight}
                                initial='initial'
                                whileInView='animate'
                                transition={{
                                    duration: 2,
                                    type: "spring",
                                    delay: index / 2,
                                }}
                            >
                                <MagnifyEffect>
                                    <Icon />
                                </MagnifyEffect>
                            </motion.div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
