"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import { motion } from "framer-motion";
import { fromTopToBottom } from "@/varients";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            variants={fromTopToBottom}
            initial='initial'
            animate='animate'
            transition={{ duration: 1.5, type: "spring" }}
            className='absolute top-7 flex w-full justify-center max-md:top-0 max-md:justify-between max-md:p-10'
        >
            <Link
                href='/'
                className='hidden text-2xl font-bold hover:text-primary max-md:block'
            >
                AIZEN
            </Link>
            <nav
                className={`flex list-none gap-[52px] rounded-full border-4 border-primary bg-glassy-white px-[62px] py-[17px] font-normal duration-500 hover:shadow-primary-shadow max-md:absolute max-md:top-0 max-md:h-screen max-md:w-screen max-md:flex-col max-md:items-center max-md:justify-center max-md:rounded-none max-md:border-0 max-md:text-[32px] ${isOpen ? " left-0 block" : " left-0 max-md:hidden"}`}
            >
                {navLinks.map((link) => (
                    <li
                        key={link.title}
                        className='duration-500 hover:scale-110'
                    >
                        <Link href={link.path}>{link.title}</Link>
                    </li>
                ))}
                <li
                    className='absolute right-4 top-8 hidden max-md:block'
                    onClick={() => setIsOpen(false)}
                >
                    <IoClose className='' />
                </li>
            </nav>
            <IoMenuOutline
                onClick={() => setIsOpen(true)}
                className='hidden text-[29px] hover:text-primary max-md:block'
            />
        </motion.header>
    );
};

export default Header;
