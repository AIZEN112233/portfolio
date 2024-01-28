"use client";

const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='grid h-full max-h-[392px] w-full max-w-[570px] place-items-center rounded-[17px] border-4 border-primary bg-glassy-white backdrop-blur-[35px]'>
            {children}
        </div>
    );
};

export default Card;
