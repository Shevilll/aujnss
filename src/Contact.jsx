import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.refresh();
        gsap.set(".contact", {
            x: -5000,
            opacity: 1,
        });
        ScrollTrigger.create({
            trigger: ".gallery-main",
            start: "bottom top",
            end: "bottom top",
            scrub: 1,
            onEnter: () => {
                gsap.to(".contact", {
                    x: 0,
                    ease: "none",
                });
            },
            onLeaveBack: () => {
                gsap.to(".contact", {
                    x: -5000,
                    ease: "none",
                });
            },
        });
    }, []);
    return (
        <div className="fixed top-16 w-full h-[70vh] md:h-[85vh] flex justify-between flex-col text-[#152C49] contact opacity-0">
            <div>
                <p className="text-2xl md:text-4xl font-bold mb-0 md:mb-12 p-4 text-[#152C49]">
                    <span className="hover-text">CONNECT </span>
                    <span className="hover-text">WITH </span>
                    <span className="hover-text">US</span>
                </p>
            </div>
            <div className="w-full  h-full flex flex-col md:flex-row">
                <div className=" h-full w-full flex flex-col justify-center p-10 space-y-2 md:space-y-4">
                    <div className="flex items-center">
                        <div className="absolute w-6 md:w-8 mr-4">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div className="text-xl md:text-2xl ml-10">
                            <p className="font-bold hover-text">
                                Amity University Jharkhand
                            </p>
                            <p className="hover-text">
                                HEC Core Capital Area, Near Railway Crossing
                                Pundag,
                            </p>
                            <p className="hover-text">
                                Ranchi Jharkhand 835303
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-6 md:w-8 mr-4">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div className="text-xl md:text-2xl">
                            <p className="hover-text">+918340168700</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-6 md:w-8 mr-4">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div className="text-xl md:text-2xl">
                            <p className="hover-text">nssauj@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className=" h-full w-full flex flex-col justify-center p-10 space-y-2 md:space-y-4">
                    <div className="flex items-center text-xl md:text-2xl justify-end flex-row-reverse md:flex-row">
                        <div>
                            <a
                                href="https://www.instagram.com/nss_auj?igsh=MWY5anJja3RuNjg2YQ=="
                                className="relative underline-link"
                                target="_blank"
                                style={{
                                    textDecoration: "none",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.querySelector(
                                        ".underline"
                                    ).style.width = "100%")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.querySelector(
                                        ".underline"
                                    ).style.width = "0%")
                                }
                            >
                                Instagram
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
                        </div>
                        <div className="w-6 md:w-8 mr-4 md:ml-4 md:mr-0">
                            <svg
                                viewBox="0 0 20 20"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>instagram [#167]</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs> </defs>
                                    <g
                                        id="Page-1"
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            id="Dribbble-Light-Preview"
                                            transform="translate(-340.000000, -7439.000000)"
                                            fill="#000000"
                                        >
                                            <g
                                                id="icons"
                                                transform="translate(56.000000, 160.000000)"
                                            >
                                                <path
                                                    d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                                                    id="instagram-[#167]"
                                                ></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center text-xl md:text-2xl justify-end flex-row-reverse md:flex-row">
                        <div>
                            <a
                                href="https://www.linkedin.com/in/nss-auj-a94a5b346"
                                className="relative underline-link"
                                target="_blank"
                                style={{
                                    textDecoration: "none",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.querySelector(
                                        ".underline"
                                    ).style.width = "100%")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.querySelector(
                                        ".underline"
                                    ).style.width = "0%")
                                }
                            >
                                LinkedIn
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
                        </div>
                        <div className="w-6 md:w-8 mr-4 md:ml-4 md:mr-0">
                            <svg
                                viewBox="0 0 20 20"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>linkedin [#161]</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs> </defs>
                                    <g
                                        id="Page-1"
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            id="Dribbble-Light-Preview"
                                            transform="translate(-180.000000, -7479.000000)"
                                            fill="#000000"
                                        >
                                            <g
                                                id="icons"
                                                transform="translate(56.000000, 160.000000)"
                                            >
                                                <path
                                                    d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                                                    id="linkedin-[#161]"
                                                ></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center text-xl md:text-2xl justify-end flex-row-reverse md:flex-row">
                        <div>
                            <a
                                href="https://www.facebook.com/profile.php?id=61572169376444"
                                className="relative underline-link"
                                target="_blank"
                                style={{
                                    textDecoration: "none",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.querySelector(
                                        ".underline"
                                    ).style.width = "100%")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.querySelector(
                                        ".underline"
                                    ).style.width = "0%")
                                }
                            >
                                Facebook
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
                        </div>
                        <div className="w-6 md:w-8 mr-4 md:ml-4 md:mr-0">
                            <svg
                                viewBox="-5 0 20 20"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>facebook [#176]</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs> </defs>
                                    <g
                                        id="Page-1"
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            id="Dribbble-Light-Preview"
                                            transform="translate(-385.000000, -7399.000000)"
                                            fill="#000000"
                                        >
                                            <g
                                                id="icons"
                                                transform="translate(56.000000, 160.000000)"
                                            >
                                                <path
                                                    d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                                                    id="facebook-[#176]"
                                                ></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center w-full mt-6 md:mt-12 space-y-0 md:space-y-2">
                <p className="mx-auto text-xs text-gray-600 px-4 hover-text">
                    COPYRIGHT © 2025 - AMITY UNIVERSITY JHARKHAND - ALL RIGHTS
                    RESERVED
                </p>
                <p className="mx-auto text-xs text-gray-600 px-4">
                    WEBSITE BY{" "}
                    <a
                        href="https://www.linkedin.com/in/shevilll/"
                        className="relative underline-link"
                        target="_blank"
                        style={{
                            textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.querySelector(
                                ".underline"
                            ).style.width = "100%")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.querySelector(
                                ".underline"
                            ).style.width = "0%")
                        }
                    >
                        AHMAD FARAZ
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
                </p>
            </div>
        </div>
    );
};

export default Contact;
