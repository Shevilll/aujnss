import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Hero = () => {
    const ministryLogoRef = useRef(null);
    const amityLogoRef = useRef(null);
    const nssLogoRef = useRef(null);

    useEffect(() => {
        const createBorderAnimation = (element) => {
            const timeline = gsap.timeline({ paused: true });

            timeline
                .to(element, {
                    scale: 1.1,
                    duration: 0.5,
                })
                .to(element, {
                    borderTop: "1px solid #eec446",
                    duration: 0.1,
                    ease: "none",
                })
                .to(element, {
                    borderRight: "1px solid #eec446",
                    duration: 0.1,
                    ease: "none",
                })
                .to(element, {
                    borderBottom: "1px solid #eec446",
                    duration: 0.1,
                    ease: "none",
                })
                .to(element, {
                    borderLeft: "1px solid #eec446",
                    duration: 0.1,
                    ease: "none",
                });

            const handleMouseEnter = () => timeline.play();
            const handleMouseLeave = () => timeline.reverse();

            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseleave", handleMouseLeave);
            };
        };

        const cleanupMinistry = createBorderAnimation(ministryLogoRef.current);
        const cleanupAmity = createBorderAnimation(amityLogoRef.current);
        const cleanupNSS = createBorderAnimation(nssLogoRef.current);

        return () => {
            cleanupMinistry();
            cleanupAmity();
            cleanupNSS();
        };
    }, []);
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#header-logo", {
            scrollTrigger: {
                trigger: "#header-logo",
                start: "center center",
                end: "bottom center",
                scrub: 1,
            },
            scale: 0,
        });

        gsap.from("#header-logo", {
            y: 50,
            opacity: 0,
            duration: 2,
        });

        gsap.fromTo(
            "#arrow",
            {
                y: 0,
            },
            {
                y: 5,
                duration: 1,
                repeat: -1,
                yoyo: true,
            }
        );
        gsap.to("#arrow", {
            scrollTrigger: {
                trigger: "#arrow",
                start: "bottom bottom",
                end: "200px bottom",
                scrub: 1,
            },
            opacity: 0,
        });
    }, []);
    return (
        <div
            className="flex flex-col w-full justify-evenly items-center h-[100vh] md:flex-row sticky top-0"
            id="header-logo"
        >
            <div
                className="w-[250px] md:w-[250px] p-2"
                id="ministrylogo"
                ref={ministryLogoRef}
                style={{
                    position: "relative",
                    border: "1px solid transparent",
                    borderRadius: "10px",
                    overflow: "hidden",
                }}
            >
                <a
                    href="https://yas.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <img src="logo/Ministry.png" />
                </a>
            </div>
            <div
                className="w-[250px] md:w-[300px] p-2 border"
                id="amitylogo"
                ref={amityLogoRef}
                style={{
                    position: "relative",
                    border: "1px solid transparent",
                    borderRadius: "10px",
                    overflow: "hidden",
                }}
            >
                <a
                    href="https://amity.edu/ranchi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <img src="logo/Amity.png" />
                </a>
            </div>
            <div
                className="w-[100px] md:w-[100px] p-2 border"
                id="nsslogo"
                ref={nssLogoRef}
                style={{
                    position: "relative",
                    border: "1px solid transparent",
                    borderRadius: "10px",
                    overflow: "hidden",
                }}
            >
                <a
                    href="https://nss.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <img src="logo/NSS.png" />
                </a>
            </div>
            <div
                className="w-12 md:w-16 absolute bottom-16 right-10"
                id="arrow"
            >
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 32 32"
                    enableBackground="new 0 0 32 32"
                    xmlSpace="preserve"
                    fill="#000000"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <line
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            x1="16"
                            y1="26"
                            x2="16"
                            y2="4"
                        ></line>
                        <polyline
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            points="24.5,18 16,26.5 7.5,18 "
                        ></polyline>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
