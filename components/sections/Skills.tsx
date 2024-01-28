"use client";
import { fromBottomToTop } from "@/varients";
import { motion } from "framer-motion";
import Nuxt from "../icons/Nuxt";
import React from "../icons/React";
import Vue from "../icons/Vue";
import Pinia from "../icons/Pinia";
import Javascript from "../icons/Javascript";
import Typescript from "../icons/Typescript";
import Tailwind from "../icons/Tailwind";
import Redux from "../icons/Redux";
import Css from "../icons/Css";
import Html from "../icons/Html";
const Skills = () => {
    return (
        <div>
            <motion.h1
                variants={fromBottomToTop}
                initial='initial'
                whileInView='animate'
                drag
                dragConstraints={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
                className='hover:(text-red bg-yellow) text-center text-[40px] font-[500]'
            >
                Skills
            </motion.h1>
            <div className='mt-24 flex justify-center gap-10'>
                <Nuxt />
                <React />
                <Vue />
                <Pinia />
                <Javascript />
                <Typescript />
                <Tailwind />
                <Redux />
                <Css />
                <Html />
            </div>
        </div>
    );
};

export default Skills;
