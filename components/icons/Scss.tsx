import { SVGProps, useState } from "react";

export default function VscodeIconsFileTypeScss(
    props: SVGProps<SVGSVGElement>,
) {
    const [hover, setHover] = useState(false);
    return (
        <div className='relative w-fit rounded-xl border-4 border-[#cd6799] p-2 drop-shadow-[0_0px_30px_#cd6799] after:absolute after:left-1/2 after:top-1/2 after:-z-50 after:h-0 after:w-0 after:rounded-[1000px] after:bg-[#cd6799] after:duration-500 after:content-[""] hover:after:inset-0 hover:after:h-full hover:after:w-full hover:after:rounded-md'>
            <svg
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 32 32'
                {...props}
            >
                <path
                    fill={!hover ? "#cd6799" : "#fff"}
                    className='duration-500'
                    d='M16.171 18.7c-.481.221-1.008.509-2.063 1.088c-.4.225-.818.45-1.207.662c-.027-.027-.055-.061-.082-.089c-2.087-2.23-5.947-3.805-5.783-6.8c.061-1.091.436-3.955 7.413-7.433c5.742-2.83 10.311-2.046 11.1-.307c1.134 2.479-2.449 7.092-8.379 7.761a4.469 4.469 0 0 1-3.751-.948c-.314-.341-.361-.361-.477-.293c-.191.1-.068.409 0 .586a3.5 3.5 0 0 0 2.141 1.684a11.4 11.4 0 0 0 6.956-.689c3.594-1.391 6.4-5.258 5.578-8.5c-.825-3.287-6.281-4.371-11.443-2.537a26 26 0 0 0-8.79 5.047c-2.844 2.66-3.294 4.972-3.11 5.94c.662 3.437 5.4 5.674 7.3 7.331c-.1.055-.184.1-.259.143c-.948.471-4.562 2.36-5.463 4.358c-1.023 2.264.164 3.887.948 4.105a5.832 5.832 0 0 0 6.281-2.544a6.3 6.3 0 0 0 .559-5.8a5.03 5.03 0 0 1 .716-.477c.484-.286.945-.568 1.354-.786a10.475 10.475 0 0 1 4.475-.989c3.246.382 3.887 2.407 3.764 3.26a2.157 2.157 0 0 1-1.03 1.459c-.225.143-.3.191-.28.293c.027.15.136.143.327.116a2.535 2.535 0 0 0 1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753 7.753 0 0 0-2.946.587q-.225.093-.437.2Zm-4.825 7.839c-1.078 1.173-2.578 1.616-3.226 1.241c-.7-.4-.423-2.135.9-3.376a17.18 17.18 0 0 1 2.53-1.889c.157-.1.389-.232.668-.4l.075-.041l.164-.1a4.658 4.658 0 0 1-1.111 4.565'
                ></path>
            </svg>
        </div>
    );
}
