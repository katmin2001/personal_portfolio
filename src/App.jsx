import React, { useState, useEffect } from 'react';
import { Navbar, Hero, Experience, Awards, Projects, Contact, Footer } from './components';

const App = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative z-0">
            <div className="bg-primary">
                <Navbar scrolled={scrolled} />
                <Hero />
            </div>

            <Experience />
            <Awards />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
