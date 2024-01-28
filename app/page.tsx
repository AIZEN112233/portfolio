import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Rate from "@/components/sections/Rate";
import Skills from "@/components/sections/Skills";

const page = () => {
    return (
        <main>
            <section className='screen-container pt-[100px]'>
                <Home />
            </section>

            <section className='screen-container pt-[100px]'>
                <About />
            </section>

            <section className='screen-container pt-[100px]'>
                <Skills />
            </section>

            <section className='screen-container pt-[100px]'>
                <Rate />
            </section>

            <section className='screen-container pt-[100px]'>
                <Projects />
            </section>

            <section className='screen-container pt-[100px]'>
                <Contact />
            </section>
        </main>
    );
};

export default page;
