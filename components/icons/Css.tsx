import { useState } from "react";

const Css = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='relative w-fit rounded-xl border-4 border-[#264de4] p-2 drop-shadow-[0_0px_30px_#264de4] after:absolute after:left-1/2 after:top-1/2 after:-z-50 after:h-0 after:w-0 after:rounded-[1000px] after:bg-[#264de4] after:duration-500 after:content-[""] hover:after:inset-0 hover:after:h-full hover:after:w-full hover:after:rounded-md'
        >
            <svg
                height='50'
                width='50'
                xmlns='http://www.w3.org/2000/svg'
                aria-label='CSS3'
                role='img'
                viewBox='0 0 512 512'
            >
                <path
                    className='duration-500'
                    fill={!isHovered ? "#264de4" : "#ebebeb"}
                    d='M72 460L30 0h451l-41 460-184 52'
                />
                <path
                    className='duration-500'
                    fill={!isHovered ? "#2965f1" : "#ebebeb"}
                    d='M256 37V472l149-41 35-394'
                />
                <path
                    className='duration-500'
                    fill={!isHovered ? "#ebebeb" : "#2965f1"}
                    d='m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382'
                />
                <path
                    className='duration-500'
                    fill={!isHovered ? "#fff" : "#2965f1"}
                    d='m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z'
                />
            </svg>
        </div>
    );
};

export default Css;
