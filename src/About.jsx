import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const textRefs = useRef([]);

    useEffect(() => {
        const texts = textRefs.current;

        gsap.set(".text-div", {
            x: -5000,
            opacity: 1,
        });
        ScrollTrigger.create({
            trigger: ".text-div",
            start: "0 0",
            end: "0 0",
            scrub: 1,
            onEnter: () => {
                gsap.to(".text-div", {
                    x: 0,
                    ease: "none",
                });
            },
            onLeaveBack: () => {
                gsap.to(".text-div", {
                    x: -5000,
                    ease: "none",
                });
            },
        });

        ScrollTrigger.create({
            trigger: ".text-div",
            start: "1200 0",
            end: "1200 0",
            scrub: 1,
            onEnter: () => {
                gsap.to(".text-div", {
                    x: 10000,
                    duration: 1,
                    ease: "power2.in",
                });
            },
            onLeaveBack: () => {
                gsap.to(".text-div", {
                    x: 0,
                    duration: 1,
                    ease: "power2.out",
                });
            },
        });

        gsap.set("#about-div", {
            x: -5000,
            opacity: 1,
        });
        ScrollTrigger.create({
            trigger: "#about-div",
            start: "1250 0",
            end: "1250 0",
            scrub: 1,
            onEnter: () => {
                gsap.to("#about-div", {
                    x: 0,
                    ease: "none",
                });
            },
            onLeaveBack: () => {
                gsap.to("#about-div", {
                    x: -5000,
                    ease: "none",
                });
            },
        });

        ScrollTrigger.create({
            trigger: "#about-div",
            start: "2600 0",
            end: "2600 0",
            scrub: 1,
            onEnter: () => {
                gsap.to("#about-div", {
                    x: -5000,
                    ease: "none",
                });
            },
            onLeaveBack: () => {
                gsap.to("#about-div", {
                    x: 0,
                    ease: "none",
                });
            },
        });

        const wordElements = document.querySelectorAll(".hover-text");

        wordElements.forEach((word) => {
            word.addEventListener("mouseenter", () => {
                gsap.to(word, {
                    color: "#EEC446",
                    duration: 0.3,
                });
            });

            word.addEventListener("mouseleave", () => {
                gsap.to(word, {
                    color: "#152C49",
                    duration: 0.3,
                });
            });
        });

        gsap.set(".about-text", {
            opacity: 0,
            immediateRender: true,
            force3D: true,
        });
        const abouttexts = document.querySelectorAll(".about-text");
        abouttexts.forEach((text, index) => {
            ScrollTrigger.create({
                trigger: text,
                start: "1300 0",
                end: "1400 0",
                toggleActions: "play none none reverse",
                onEnter: () => {
                    gsap.to(text, {
                        opacity: 1,
                        duration: 1,
                    });
                },
                onLeaveBack: () => {
                    gsap.to(text, {
                        opacity: 0,
                        duration: 1,
                    });
                },
            });
            ScrollTrigger.create({
                trigger: text,
                start: "2000 0",
                end: "2100 0",
                toggleActions: "play none none reverse",

                onEnter: () => {
                    gsap.to(text, {
                        opacity: 0,
                        duration: 1,
                    });
                },
                onLeaveBack: () => {
                    gsap.to(text, {
                        opacity: 1,
                        duration: 1,
                    });
                },
            });
        });

        texts.forEach((text, index) => {
            gsap.fromTo(
                text,
                {
                    opacity: 0,
                    x: -1000,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "100 0",
                        end: "300 0",
                        toggleActions: "play none none reverse",
                        scrub: 1,
                    },
                }
            );
        });

        texts.forEach((text, index) => {
            gsap.fromTo(
                text,
                {
                    x: 0,
                },
                {
                    opacity: 0,
                    x: "100vw",
                    duration: 1,
                    ease: "power2.in",
                    scrollTrigger: {
                        trigger: text,
                        start: "600 0",
                        end: "900 0",
                        toggleActions: "play none none reverse",
                        scrub: 1,
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const intro = [
        "AMITY UNIVERSITY JHARKHAND",
        '"NOT ME BUT YOU"',
        "NATIONAL SERVICE SCHEME",
    ];

    const about = [
        "The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. It provides opportunity to the student youth of 11th & 12th Class of schools at +2 Board level and student youth of Technical Institution, Graduate & Post Graduate at colleges and University level of India to take part in various Government led community service activities & programmes. The primary objective of developing the personality and character of the student youth through voluntary community service. ‘Education through Service’ is the purpose of the NSS. NSS was launched in 1969 in 37 Universities involving about 40,000 volunteers which has now spread over 657 Universities and 51+2 Councils/Directorates, covering 20,669 Colleges/Technical Institutions and 11,988 Senior Secondary School. Since inception, over 7.4 crore students have benefitted from NSS.",
    ];

    return (
        <div ref={containerRef} className="">
            <div className="fixed top-[50vh] -translate-y-1/2 space-y-12 w-full text-center text-[#152C49] opacity-0 text-div">
                {intro.map((text, index) => (
                    <p
                        ref={(el) => (textRefs.current[index] = el)}
                        className="text-4xl font-bold opacity-0"
                        key={index}
                    >
                        {text.split(" ").map((word, index) => (
                            <span className="hover-text" key={index}>
                                {word}{" "}
                            </span>
                        ))}
                    </p>
                ))}
            </div>
            <div
                className="fixed top-20 w-full  text-[#152C49] px-6 opacity-0"
                id="about-div"
            >
                <p className="text-4xl font-bold mb-6 md:mb-12">
                    <span className="hover-text about-text">ABOUT </span>
                    <span className="hover-text about-text">NSS</span>
                </p>

                {about.map((text, index) => (
                    <p
                        className="text-[16px] md:text-3xl font-semibold text-justify leading-[20px] md:leading-[40px]"
                        style={{}}
                        key={index}
                    >
                        {text.split(" ").map((word, index) => (
                            <span
                                className="hover-text about-text "
                                key={index}
                            >
                                {word}{" "}
                            </span>
                        ))}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default About;
