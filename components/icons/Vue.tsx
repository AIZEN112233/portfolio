import { useState } from "react";

const Vue = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            onMouseLeave={() => setIsHovered(false)}
            onMouseEnter={() => setIsHovered(true)}
            className='relative w-fit rounded-xl border-4 border-[#41B883] p-2 drop-shadow-[0_0px_30px_#41B883] after:absolute after:left-1/2 after:top-1/2 after:-z-50 after:h-0 after:w-0 after:rounded-[1000px] after:bg-[#41B883] after:duration-500 after:content-[""] hover:after:inset-0 hover:after:h-full hover:after:w-full hover:after:rounded-md'
        >
            <svg
                className='relative  top-1'
                width='50'
                height='50'
                viewBox='0 0 256 221'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='xMinYMin meet'
            >
                <path
                    className='duration-500'
                    d='M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z'
                    fill={!isHovered ? "#41B883" : "#fff"}
                />
                <path
                    className='duration-500'
                    d='M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z'
                    fill={!isHovered ? "#41B883" : "#fff"}
                />
                <path
                    className='duration-500'
                    d='M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z'
                    fill='#35495E'
                />
            </svg>
        </div>
    );
};

export default Vue;
