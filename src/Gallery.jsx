import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Gallery = () => {
    const img_arr = [
        [
            "/nukkad_natak/1.jpg",
            "membership_drive",
            "left",
            "ANNUAL NSS MEMBERSHIP DRIVE OF NSS AUJ",
            "",
            "24 SEPT 2024",
        ],
        [
            "/nukkad_natak/2.jpg",
            "membership_drive",
            "right",
            "ANNUAL NSS MEMBERSHIP DRIVE OF NSS AUJ",
            "",
            "24 SEPT 2024",
        ],
        [
            "/nukkad_natak/3.jpg",
            "membership_drive",
            "left",
            "ANNUAL NSS MEMBERSHIP DRIVE OF NSS AUJ",
            "",
            "24 SEPT 2024",
        ],
        [
            "/nukkad_natak/4.jpg",
            "nukkad_natak",
            "right",
            "NUKKAD NATAK",
            "",
            "24 SEPT 2024",
        ],
        [
            "/nukkad_natak/5.jpg",
            "nukkad_natak",
            "left",
            "NUKKAD NATAK",
            "",
            "24 SEPT 2024",
        ],
        [
            "/nukkad_natak/6.jpg",
            "nukkad_natak",
            "right",
            "NUKKAD NATAK",
            "",
            "24 SEPT 2024",
        ],
        [
            "/webinar/1.jpg",
            "webinar",
            "left",
            "WEBINAR ON AWARENESS ABOUT SICKLE CELL ANAEMIA AND THALASSEMIA",
            "",
            "24 OCT 2024",
        ],
        [
            "/webinar/2.jpg",
            "webinar",
            "right",
            "WEBINAR ON AWARENESS ABOUT SICKLE CELL ANAEMIA AND THALASSEMIA",
            "",
            "24 OCT 2024",
        ],
        [
            "/hospital/1.jpg",
            "hospital",
            "left",
            "DIWALI WITH MY BHARAT FIRST ANNIVERSARY CELEBRATION: HOSPITAL VOLUNTEERING PROGRAM AT SADAR HOSPITAL",
            "",
            "27-30 OCT 2024",
        ],
        [
            "/hospital/2.jpg",
            "hospital",
            "right",
            "DIWALI WITH MY BHARAT FIRST ANNIVERSARY CELEBRATION: HOSPITAL VOLUNTEERING PROGRAM AT SADAR HOSPITAL",
            "",
            "27-30 OCT 2024",
        ],
        [
            "/hospital/3.jpg",
            "hospital",
            "left",
            "DIWALI WITH MY BHARAT FIRST ANNIVERSARY CELEBRATION: HOSPITAL VOLUNTEERING PROGRAM AT SADAR HOSPITAL",
            "",
            "27-30 OCT 2024",
        ],
        [
            "/hospital/4.jpg",
            "hospital",
            "right",
            "DIWALI WITH MY BHARAT FIRST ANNIVERSARY CELEBRATION: HOSPITAL VOLUNTEERING PROGRAM AT SADAR HOSPITAL",
            "",
            "27-30 OCT 2024",
        ],
        [
            "/hospital/5.jpg",
            "hospital",
            "left",
            "DIWALI WITH MY BHARAT FIRST ANNIVERSARY CELEBRATION: HOSPITAL VOLUNTEERING PROGRAM AT SADAR HOSPITAL",
            "",
            "27-30 OCT 2024",
        ],
        [
            "/hospital/6.jpg",
            "hospital",
            "right",
            "DIWALI WITH MY BHARAT FIRST ANNIVERSARY CELEBRATION: HOSPITAL VOLUNTEERING PROGRAM AT SADAR HOSPITAL",
            "",
            "27-30 OCT 2024",
        ],
        [
            "/blood_donation/1.jpg",
            "blood_donation",
            "left",
            "SENSITIZATION SESSION ON NSS BLOOD DONATION CAMP",
            "",
            "11 NOV 2024",
        ],
        [
            "/blood_donation/2.jpg",
            "blood_donation",
            "right",
            "NSS BLOOD DONATION CAMP",
            "",
            "19 NOV 2024",
        ],
        [
            "/blood_donation/3.jpg",
            "blood_donation",
            "left",
            "NSS BLOOD DONATION CAMP",
            "",
            "19 NOV 2024",
        ],
        [
            "/blood_donation/4.jpg",
            "blood_donation",
            "right",
            "NSS BLOOD DONATION CAMP",
            "",
            "19 NOV 2024",
        ],
        [
            "/blood_donation/5.jpg",
            "blood_donation",
            "left",
            "NSS BLOOD DONATION CAMP",
            "",
            "19 NOV 2024",
        ],
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const gallery = gsap.utils.toArray(".gallery-div");

        gallery.forEach((div) => {
            gsap.fromTo(
                div,
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: div,
                        start: "top 90%",
                        end: "bottom 90%",
                        scrub: true,
                    },
                }
            );
        });
        ScrollTrigger.refresh();
    }, []);
    return (
        <div className="top-[3500px] absolute h-auto w-full gallery-main border-0">
            <p className="text-4xl font-bold mb-6 md:mb-12 text-center">
                <span className="hover-text text-[#152C49]">GALLERY </span>
            </p>
            {img_arr.map((img, index) => {
                return (
                    <div
                        key={index}
                        className={`gallery-div relative rounded-3xl w-[100vw] mt-6 mb-3 p-6 flex flex-col md:flex-row ${
                            img[2] === "left"
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                        }`}
                    >
                        <div className="w-[100%] h-[100%] aspect-[16/9]">
                            <LazyLoadImage
                                src={img[0]}
                                alt={img[1]}
                                className={`w-full h-full object-contain 
                                    ${
                                        img[2] === "left"
                                            ? "md:object-left"
                                            : "md:object-right"
                                    }
                                `}
                            />
                        </div>

                        <div
                            className={`w-full justify-between flex flex-col text-center ${
                                img[2] === "left"
                                    ? "md:text-end"
                                    : "md:text-start"
                            }`}
                        >
                            <div className="pt-6 md:pt-0 pb-6 font-bold text-xl">
                                {img[3].split(" ").map((word, index) => (
                                    <span className="hover-text" key={index}>
                                        {word}{" "}
                                    </span>
                                ))}
                            </div>
                            <div className="text-lg text-gray-600">
                                {img[4].split(" ").map((word, index) => (
                                    <span className="hover-text" key={index}>
                                        {word}{" "}
                                    </span>
                                ))}
                            </div>
                            <div className="pt-6 text-sm text-gray-500">
                                {img[5].split(" ").map((word, index) => (
                                    <span className="hover-text" key={index}>
                                        {word}{" "}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#152C49] "></span>
                    </div>
                );
            })}
        </div>
    );
};

export default Gallery;
