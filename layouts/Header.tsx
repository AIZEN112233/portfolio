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
            transition={{ duration: 1.5, type: "spring" }}
            className='sticky top-7 flex justify-center'
        >
            <nav className='hover:shadow-primary-shadow flex list-none gap-[52px] rounded-full border-4 border-primary bg-glassy-white px-[62px] py-[17px] font-normal duration-500'>
                {navLinks.map((link) => (
                    <li
                        key={link.title}
                        className='duration-500 hover:scale-110'
                    >
                        <Link href={link.path}>{link.title}</Link>
                    </li>
                ))}
            </nav>
        </motion.header>
    );
};

export default Header;
