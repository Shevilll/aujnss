import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openMobileDropdowns, setOpenMobileDropdowns] = useState({});
    const navigate = useNavigate();
    const headerRef = useRef(null);
    const [isOpen, setIsOpen] = useState({
        about: false,
        gallery: false,
        program: false,
        downloads: false,
    });
    const dropdownRefs = useRef([]);

    const desktopMenuItems = [
        { type: "link", label: "HOME", path: "/" },
        {
            type: "dropdown",
            label: "ABOUT NSS",
            key: "about",
            items: [
                { label: "ABOUT NSS", path: "/about" },
                { label: "MOTTO", path: "/motto" },
                { label: "AIMS AND OBJECTIVES", path: "/aims-objectives" },
                { label: "BENEFITS OF JOINING NSS", path: "/benefits" },
                { label: "WEEKS AND DAYS OBSERVED", path: "/weeks-days" },
            ],
        },
        { type: "link", label: "PROGRAM OFFICERS", path: "/program-officers" },
        {
            type: "dropdown",
            label: "NSS GALLERY",
            key: "gallery",
            items: [
                { label: "IN MEDIA", path: "/media" },
                { label: "VIDEOS", path: "/videos" },
                { label: "EVENTS AND ACTIVITES", path: "/events" },
            ],
        },
        {
            type: "dropdown",
            label: "PROGRAM AND ACTIVITIES",
            key: "program",
            items: [
                { label: "REGULAR ACTIVITIES", path: "/regular" },
                { label: "SPECIAL CAMP", path: "/special-camp" },
            ],
        },
        {
            type: "dropdown",
            label: "DOWNLOADS",
            key: "downloads",
            items: [
                { label: "REPORTS", path: "/reports" },
                { label: "JOINING FORM", path: "/joining-form" },
                { label: "NSS VOLUNTEERS", path: "/volunteers" },
            ],
        },
        { type: "link", label: "HOW TO JOIN", path: "/how-to-join" },
        { type: "link", label: "CONTACT US", path: "/contact" },
    ];

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        const handleScroll = () => {
            setIsScrolled(
                (window.scrollY > 120 && windowWidth >= 768) ||
                    (window.scrollY > 80 && windowWidth < 768)
            );
        };
        const handleClickOutside = (event) => {
            const isOutsideAllDropdowns = dropdownRefs.current.every(
                (ref) => !ref || !ref.contains(event.target)
            );

            if (isOutsideAllDropdowns) {
                setIsOpen({
                    about: false,
                    gallery: false,
                    program: false,
                    downloads: false,
                });
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = (key) => {
        setIsOpen((prev) => ({
            ...Object.keys(prev).reduce(
                (acc, k) => ({
                    ...acc,
                    [k]: k === key ? !prev[k] : false,
                }),
                {}
            ),
        }));
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMobileDropdown = (key) => {
        setOpenMobileDropdowns((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const renderDropdown = (title, key, items, index) => (
        <div
            className="relative group"
            key={key}
            ref={(el) => (dropdownRefs.current[index] = el)}
        >
            <div
                className="flex items-center cursor-pointer"
                onClick={() => toggleDropdown(key)}
            >
                <p className="text-black group-hover:text-[#FF0000] transition-all duration-300">
                    {title}
                </p>
                <div className="w-[20px]">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`stroke-black transition-all duration-300 ${
                            isOpen[key]
                                ? "rotate-180 group-hover:stroke-[#FF0000]"
                                : "group-hover:stroke-[#FF0000]"
                        }`}
                    >
                        <path
                            d="M7 10L12 15L17 10"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </div>
            </div>
            <div
                className={`absolute left-0 mt-2 w-[200px] bg-white shadow-lg rounded-md 
                    transition-all duration-300 ease-in-out z-10 
                    group-hover:max-h-[500px] text-[14px] ${
                        isOpen[key]
                            ? "max-h-[500px]"
                            : "max-h-0 overflow-hidden"
                    }`}
            >
                <ul>
                    {items.map((item, idx) => (
                        <li
                            key={idx}
                            onClick={() => navigate(item.path)}
                            className="px-4 py-2 hover:bg-[#0F385F] 
                                hover:text-white cursor-pointer 
                                transition-all duration-300 ease-in-out"
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    const renderMobileMenuItem = (item, index) => {
        if (item.type === "link") {
            return (
                <div
                    key={index}
                    onClick={() => {
                        navigate(item.path);
                        setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-3 border-b hover:bg-gray-100 flex justify-between items-center"
                >
                    {item.label}
                </div>
            );
        }

        if (item.type === "dropdown") {
            const isOpen = openMobileDropdowns[item.key];
            return (
                <div key={index} className="border-b">
                    <div
                        onClick={() => toggleMobileDropdown(item.key)}
                        className="px-4 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer"
                    >
                        {item.label}
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-5 h-5 transition-transform duration-300 ${
                                isOpen ? "transform rotate-180" : ""
                            }`}
                        >
                            <path
                                d="M7 10L12 15L17 10"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </div>
                    {isOpen && (
                        <div className="bg-gray-50">
                            {item.items.map((subItem, subIndex) => (
                                <div
                                    key={subIndex}
                                    onClick={() => {
                                        navigate(subItem.path);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="px-6 py-2 hover:bg-gray-100"
                                >
                                    {subItem.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            );
        }
    };

    const renderDesktopMenu = () => (
        <div
            className={`${
                isScrolled ? "fixed top-0 left-0 right-0 z-50 bg-[#F7F5F5]" : ""
            } flex h-[60px] items-center justify-evenly px-[60px] font-light space-x-[10px] flex-wrap transition-all duration-300`}
        >
            {desktopMenuItems.map((item, index) =>
                item.type === "dropdown" ? (
                    renderDropdown(item.label, item.key, item.items, index)
                ) : (
                    <div
                        key={item.label}
                        onClick={() => navigate(item.path)}
                        className="cursor-pointer"
                    >
                        <p className="hover:text-[#FF0000] transition-all duration-300">
                            {item.label}
                        </p>
                    </div>
                )
            )}
        </div>
    );

    const renderMobileMenu = () => (
        <div
            className={`${
                isScrolled
                    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F7F5F5]"
                    : ""
            }  transition-all duration-300 `}
        >
            <div
                className="flex justify-end px-[10px] py-[10px] cursor-pointer"
                onClick={toggleMobileMenu}
            >
                <div className="w-[50px] h-[50px]">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 6H20M4 12H20M4 18H20"
                            stroke="#000000"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="absolute left-0 right-0 bg-white shadow-lg max-h-[80vh] overflow-y-auto z-50">
                    {desktopMenuItems.map(renderMobileMenuItem)}
                </div>
            )}
        </div>
    );

    return (
        <header ref={headerRef}>
            <div className="w-full h-[80px] md:h-[120px] flex justify-between bg-[#F7F5F5] px-[10px] space-x-2 md:px-[30px] lg:px-[60px] items-center">
                <a href="https://nss.gov.in/" target="_blank" rel="noreferrer">
                    <div className="w-[100px] md:w-[280px] mix-blend-multiply">
                        <img
                            src="/logo/NSSFULL.png"
                            alt="NSS Logo"
                            className="w-full h-auto"
                        />
                    </div>
                </a>
                <a href="https://yas.gov.in/" target="_blank" rel="noreferrer">
                    <div className="w-[100px] md:w-[200px] mix-blend-multiply">
                        <img
                            src="/logo/Ministry.png"
                            alt="NSS Logo"
                            className="w-full h-auto"
                        />
                    </div>
                </a>
                <a
                    href="https://amity.edu/ranchi/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="w-[70px] md:w-[230px] mix-blend-multiply">
                        <img
                            src="/logo/Amity.png"
                            alt="Amity Logo"
                            className="w-full h-auto"
                        />
                    </div>
                </a>
            </div>
            {windowWidth < 768 ? renderMobileMenu() : renderDesktopMenu()}
            {isScrolled && <div className="h-[60px]"></div>}
        </header>
    );
};

export default Header;
