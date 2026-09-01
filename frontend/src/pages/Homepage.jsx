import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Homepage = () => {
    return (
        <>
            {/* Global smooth scroll + offset for fixed navbar */}
            <style>{`
                html {
                    scroll-behavior: smooth;
                }
                .section-offset {
                    scroll-margin-top: 120px; /* accounts for fixed navbar height */
                }
                @media (min-width: 1024px) {
                    .section-offset {
                        scroll-margin-top: 130px;
                    }
                }
            `}</style>

            <Navbar />

            {/* Each section has an id and scroll offset */}
            <section id="home" className="section-offset">
                <Hero />
            </section>

            <section id="menu" className="section-offset">
                <Menu />
            </section>

            <section id="about" className="section-offset">
                <About />
            </section>

            <section id="gallery" className="section-offset">
                <Gallery />
            </section>

            <section id="contact" className="section-offset">
                <Contact />
            </section>
        </>
    );
};

export default Homepage;