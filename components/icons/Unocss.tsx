import { SVGProps, useState } from "react";

export default function VscodeIconsFileTypeUnocss(
    props: SVGProps<SVGSVGElement>,
) {
    const [hover, setHover] = useState(false);
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className='relative w-fit rounded-xl border-4 border-[#858585] p-2 drop-shadow-[0_0px_30px_#858585] after:absolute after:left-1/2 after:top-1/2 after:-z-50 after:h-0 after:w-0 after:rounded-[1000px] after:bg-[#858585] after:duration-500 after:content-[""] hover:after:inset-0 hover:after:h-full hover:after:w-full hover:after:rounded-md'
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 32 32'
                {...props}
            >
                <g stroke-width='.13'>
                    <path
                        fill={!hover ? "#858585" : "#fff"}
                        className='duration-500'
                        d='M17.007 23.491a6.52 6.52 0 1 1 13.04 0a6.52 6.52 0 0 1-13.04 0'
                    ></path>
                    <path
                        fill={!hover ? "#ccc" : "#fff"}
                        className='duration-500'
                        d='M17.007 8.51a6.52 6.52 0 0 1 13.04 0v5.867c0 .36-.292.652-.652.652H17.659a.652.652 0 0 1-.652-.652z'
                    ></path>
                    <path
                        fill={!hover ? "#4d4d4d" : "#fff"}
                        className='duration-500'
                        d='M14.993 23.491a6.52 6.52 0 1 1-13.04 0v-5.868c0-.36.292-.652.652-.652h11.736c.36 0 .652.292.652.652z'
                    ></path>
                </g>
            </svg>
        </div>
    );
}
