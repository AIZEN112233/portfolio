import MagnicEffect from "../MagnifyEffect";

const Home = () => {
    return (
        <div className=' grid h-screen place-items-center text-center text-[50px]'>
            <div>
                <h1>
                    <MagnicEffect>Home</MagnicEffect>
                </h1>
                <p className='text-2xl'>And yes i Fix bugs in production</p>
                <p className='text-2xl'>
                    And yes i dont know how to center a div
                </p>
            </div>
        </div>
    );
};

export default Home;
