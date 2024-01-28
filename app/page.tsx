"use client";
import { motion } from "framer-motion";
import { sections } from "@/constants";
import { fromBottomToTop } from "@/varients";

const page = () => {
    return (
        <main>
            {sections.map((Page, index) => (
                <motion.section
                    variants={fromBottomToTop}
                    initial='initial'
                    whileInView='animate'
                    transition={{ duration: 1.5, type: "spring" }}
                    className={`screen-container ${index !== 0 && "pt-[80px]"}`}
                >
                    <Page />
                </motion.section>
            ))}
        </main>
    );
};

export default page;
