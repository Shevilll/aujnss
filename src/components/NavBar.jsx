import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#nav", {
            scrollTrigger: {
                trigger: "#nav",
                start: "250px top",
                end: "300px top",
                scrub: true,
            },
            height: "60px",
            display: "flex",
        });
    }, []);

    useEffect(() => {
        const menu = document.querySelector("#menu");
        const lenisWrapper = document.querySelector("[data-lenis-wrapper]");

        if (open) {
            if (window.lenis) {
                window.lenis.stop();
            }

            if (lenisWrapper) {
                lenisWrapper.style.overflow = "hidden";
            }

            gsap.to(menu, {
                height: "calc(100vh - 60px)",
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
                display: "block",
            });

            gsap.to("#nav", {
                backgroundColor: "#152C49",
                duration: 1,
                ease: "power2.out",
                color: "#EEC446",
            });

            gsap.fromTo(
                "#menu-item",
                {
                    x: -50,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                }
            );

            gsap.fromTo(
                "#menu-arrow",
                {
                    x: 50,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                }
            );
        } else {
            if (window.lenis) {
                window.lenis.start();
            }

            if (lenisWrapper) {
                lenisWrapper.style.overflow = "";
            }

            gsap.to(menu, {
                height: 0,
                opacity: 0.5,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    menu.style.display = "none";
                },
            });

            gsap.to("#nav", {
                backgroundColor: "transparent",
                duration: 1,
                ease: "power2.out",
                color: "#152C49",
            });

            gsap.fromTo(
                "#menu-item",
                {
                    x: 0,
                    opacity: 1,
                },
                {
                    x: -50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.1,
                }
            );

            gsap.fromTo(
                "#menu-arrow",
                {
                    x: 0,
                    opacity: 1,
                },
                {
                    x: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.1,
                }
            );
        }
    }, [open]);

    return (
        <div
            className="bg-transparent h-0 w-full sticky z-50 top-0 hidden items-center justify-between cursor-none text-[#152C49]"
            id="nav"
        >
            <a
                href="/"
                className="font-extrabold ml-5 relative underline-link"
                style={{
                    textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                    (e.currentTarget.querySelector(".underline").style.width =
                        "100%")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.querySelector(".underline").style.width =
                        "0%")
                }
            >
                AUJ-NSS
                <span
                    className="underline"
                    style={{
                        position: "absolute",
                        bottom: "-2px",
                        left: 0,
                        width: "0%",
                        height: "2px",
                        backgroundColor: "#eec446",
                        transition: "width 0.3s ease",
                    }}
                ></span>
            </a>
            <div
                className="w-10 mr-2"
                onClick={() => {
                    setOpen(!open);
                }}
            >
                {!open ? (
                    <svg viewBox="0 0 346 346" fill="none">
                        <path
                            d="M72.0835 216.25H273.917M72.0835 129.75H273.917"
                            stroke="#152C49"
                            strokeWidth="20.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ) : (
                    <svg
                        fill="#EEC446"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path>
                    </svg>
                )}
            </div>
            <div
                id="menu"
                className="text-[#152C49] text-2xl font-bold overflow-auto"
                style={{
                    position: "fixed",
                    top: "60px",
                    left: 0,
                    width: "100%",
                    height: "0",
                    backgroundColor: "#EEC446",
                    display: "none",
                    cursor: "none",
                }}
                data-lenis-prevent
            >
                <div>
                    {[
                        ["JOIN US", "", true],
                        [
                            "ABOUT US",
                            "https://amity.edu/ranchi/amity-ranchi.aspx",
                            true,
                        ],
                        [
                            "MORE ABOUT NSS",
                            "https://nss.gov.in/nss-detail-page",
                            true,
                        ],
                        [
                            "AMITY UNIVERSITY JHARKHAND",
                            "https://amity.edu/ranchi/",
                            true,
                        ],
                        [
                            "NATIONAL SERVICE SCHEME",
                            "https://nss.gov.in/",
                            true,
                        ],
                        [
                            "MINISTRY OF YOUTH AFFAIRS AND SPORTS",
                            "https://yas.gov.in/",
                            true,
                        ],
                        [
                            "CREDITS",
                            "https://www.linkedin.com/in/shevilll/",
                            true,
                        ],
                    ].map((item) => (
                        <div
                            className="flex border-b border-[#152C49] justify-between items-center py-2"
                            key={item}
                            id="menu-item-div"
                        >
                            <a
                                key={item}
                                href={item[1]}
                                target={item[2] ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="flex items-center justify-between underline-link relative ml-4 max-w-[275px] sm:max-w-[300px] md:max-w-full"
                                style={{
                                    textDecoration: "none",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.querySelector(
                                        ".underline"
                                    ).style.width = "100%";
                                }}
                                onMouseLeave={(e) =>
                                    (e.currentTarget.querySelector(
                                        ".underline"
                                    ).style.width = "0%")
                                }
                                id="menu-item"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                {item[0]}
                                <span
                                    className="underline"
                                    style={{
                                        position: "absolute",
                                        bottom: "0px",
                                        left: 0,
                                        width: "0%",
                                        height: "2px",
                                        backgroundColor: "#152C49",
                                        transition: "width 0.3s ease",
                                    }}
                                ></span>
                            </a>
                            <div className="mr-2">
                                <a
                                    href={item[1]}
                                    target={item[2] ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: "none",
                                    }}
                                >
                                    <div className="w-14" id="menu-arrow">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7 17L17 7M17 7H8M17 7V16"
                                                stroke="#152C49"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
