import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Hero from "./Hero";
import NavBar from "./components/NavBar";
import Cursor from "./components/Cursor";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
    useEffect(() => {
        window.lenis = new Lenis({
            syncTouch: true,
            touchMultiplier: 1.5,
        });

        window.lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            window.lenis.raf(time * 50);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            window.lenis.destroy();
            window.lenis = null;
        };
    }, []);

    const deviceWidth = window.innerWidth;
    return (
        <>
            {deviceWidth > 768 && <Cursor />}
            <div className="h-[2500vh] w-full" id="main">
                <NavBar />
                <Hero />
                <About />
                <Gallery />
                <Contact />
            </div>
        </>
    );
}

export default App;
