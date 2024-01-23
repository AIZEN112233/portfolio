"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import { motion } from "framer-motion";
import { fromTopToBottom } from "@/varients";

const Header = () => {
    return (
        <motion.header
            variants={fromTopToBottom}
            initial='initial'
            animate='animate'
            transition={{ duration: 1.5, ease: "easeOut" }}
            className='sticky flex justify-center top-7'
        >
            <nav className='flex gap-[52px] border-4 border-primary rounded-full px-[62px] py-[17px] bg-glassy-white list-none font-normal'>
                {navLinks.map((link) => (
                    <li key={link.title}>
                        <Link href={link.path}>{link.title}</Link>
                    </li>
                ))}
            </nav>
        </motion.header>
    );
};

export default Header;
