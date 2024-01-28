import { SVGProps, useState } from "react";

export default function LogosNodejsIconAlt(props: SVGProps<SVGSVGElement>) {
    const [hover, setHover] = useState(false);
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className='relative w-fit rounded-xl border-4 border-[#41873F] p-2 drop-shadow-[0_0px_30px_#41873F] after:absolute after:left-1/2 after:top-1/2 after:-z-50 after:h-0 after:w-0 after:rounded-[1000px] after:bg-[#41873F] after:duration-500 after:content-[""] hover:after:inset-0 hover:after:h-full hover:after:w-full hover:after:rounded-md'
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 256 292'
                {...props}
            >
                <defs>
                    <linearGradient
                        id='logosNodejsIconAlt0'
                        x1='68.188%'
                        x2='27.823%'
                        y1='17.487%'
                        y2='89.755%'
                    >
                        <stop
                            offset='0%'
                            stopColor={!hover ? "#41873F" : "#fff"}
                            className='duration-500'
                        ></stop>
                        <stop
                            offset='32.88%'
                            stopColor={!hover ? "#418B3D" : "#fff"}
                            className='duration-500'
                        ></stop>
                        <stop
                            offset='63.52%'
                            stopColor={!hover ? "#419637" : "#fff"}
                            className='duration-500'
                        ></stop>
                        <stop
                            offset='93.19%'
                            stopColor={!hover ? "#3FA92D" : "#fff"}
                            className='duration-500'
                        ></stop>
                        <stop
                            offset='100%'
                            stopColor={!hover ? "#3FAE2A" : "#fff"}
                            className='duration-500'
                        ></stop>
                    </linearGradient>
                    <linearGradient
                        id='logosNodejsIconAlt1'
                        x1='43.277%'
                        x2='159.245%'
                        y1='55.169%'
                        y2='-18.306%'
                    >
                        <stop
                            offset='13.76%'
                            stopColor={!hover ? "#41873F" : "#fff"}
                            className='duration-500'
                        ></stop>
                        <stop
                            offset='40.32%'
                            stopColor={!hover ? "#54A044" : "#fff"}
                            className='duration-500'
                        ></stop>
                        <stop
                            offset='71.36%'
                            stopColor={!hover ? "#66B848" : "#fff"}
                            className='duration-500'
                        ></stop>
                        <stop
                            offset='90.81%'
                            stopColor={!hover ? "#6CC04A" : "#fff"}
                            className='duration-500'
                        ></stop>
                    </linearGradient>
                    <linearGradient
                        id='logosNodejsIconAlt2'
                        x1='-4.389%'
                        x2='101.499%'
                        y1='49.997%'
                        y2='49.997%'
                    >
                        <stop
                            offset='9.192%'
                            stopColor={!hover ? "#6CC04A" : "#fff"}
                            className='duration-500'
                        ></stop>
                        <stop
                            offset='28.64%'
                            stopColor={!hover ? "#66B848" : "#fff"}
                            className='duration-500'
                        ></stop>
                        <stop
                            offset='59.68%'
                            stopColor={!hover ? "#54A044" : "#fff"}
                            className='duration-500'
                        ></stop>
                        <stop
                            offset='86.24%'
                            stopColor={!hover ? "#41873F" : "#fff"}
                            className='duration-500'
                        ></stop>
                    </linearGradient>
                    <path
                        id='logosNodejsIconAlt3'
                        d='M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944z'
                    ></path>
                </defs>
                <path
                    fill='url(#logosNodejsIconAlt0)'
                    d='M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944z'
                ></path>
                <mask id='logosNodejsIconAlt4' fill='#fff'>
                    <use href='#logosNodejsIconAlt3'></use>
                </mask>
                <path
                    fill='url(#logosNodejsIconAlt1)'
                    d='M249.485 67.8L134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714'
                    mask='url(#logosNodejsIconAlt4)'
                ></path>
                <mask id='logosNodejsIconAlt5' fill='#fff'>
                    <use href='#logosNodejsIconAlt3'></use>
                </mask>
                <path
                    fill='url(#logosNodejsIconAlt2)'
                    d='M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63z'
                    mask='url(#logosNodejsIconAlt5)'
                ></path>
            </svg>
        </div>
    );
}
