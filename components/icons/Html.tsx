import { useState } from "react";

const Html = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='relative w-fit rounded-xl border-4 border-[#e44f26] p-2 after:absolute after:left-1/2 after:top-1/2 after:-z-50 after:h-0 after:w-0 after:rounded-[100px] after:bg-[#e44f26] after:duration-500 after:content-[""] hover:after:inset-0 hover:after:h-full hover:after:w-full hover:after:rounded-md'
        >
            <svg
                width='50'
                height='50'
                viewBox='0 0 32 32'
                xmlns='http://www.w3.org/2000/svg'
            >
                <title>file_type_html</title>
                <polygon
                    className='duration-500'
                    points='5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201'
                    fill={!isHovered ? "#e44f26" : "#fff"}
                />
                <polygon
                    className='duration-500'
                    points='16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858'
                    fill={!isHovered ? "#f1662a" : "#fff"}
                />
                <polygon
                    className='duration-500'
                    points='16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407'
                    fill={!isHovered ? "#ebebeb" : "#f1662a"}
                />
                <polygon
                    className='duration-500'
                    points='16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434'
                    fill={!isHovered ? "#fff" : "#f1662a"}
                />
                <polygon
                    className='duration-500'
                    points='15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407'
                    fill={!isHovered ? "#fff" : "#f1662a"}
                />
                <polygon
                    className='duration-500'
                    points='15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151'
                    fill={!isHovered ? "#fff" : "#f1662a"}
                />
            </svg>
        </div>
    );
};

export default Html;
