import { navLinks } from "@/constants";
import Link from "next/link";

const Header = () => {
    return (
        <header className='sticky flex justify-center top-7'>
            <nav className='flex gap-[52px] border-4 border-primary rounded-full px-[62px] py-[17px] bg-glassy-white list-none font-400'>
                {navLinks.map((link) => (
                    <li key={link.title}>
                        <Link href={link.path}>{link.title}</Link>
                    </li>
                ))}
            </nav>
        </header>
    );
};

export default Header;

// color: #FFF;
// text-align: center;
// font-family: "Poller One";
// font-style: normal;
// font-weight: 400;
// line-height: normal;
