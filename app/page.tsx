import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Rate from "@/components/Rate";
import Skills from "@/components/Skills";

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
