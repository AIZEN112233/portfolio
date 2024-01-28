import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Rate from "@/components/sections/Rate";
import Skills from "@/components/sections/Skills";

const page = () => {
    return (
        <main>
            <section className='screen-container'>
                <Home />
            </section>

            <section className='screen-container'>
                <About />
            </section>

            <section className='screen-container'>
                <Skills />
            </section>

            <section className='screen-container'>
                <Rate />
            </section>

            <section className='screen-container'>
                <Projects />
            </section>

            <section className='screen-container'>
                <Contact />
            </section>
        </main>
    );
};

export default page;
