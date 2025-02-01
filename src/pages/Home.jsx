import React, { useState, useRef, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import Item from "../components/Item";

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    const images = [
        "/blood_donation/4.jpg",
        "/hospital/1.jpg",
        "/blood_donation/5.jpg",
        "/nukkad_natak/4.jpg",
    ];

    const SLIDE_INTERVAL = 5000;

    const resetInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, SLIDE_INTERVAL);
    };

    useEffect(() => {
        resetInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [images.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
        resetInterval();
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
        resetInterval();
    };

    return (
        <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        currentSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-lg scale-110"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>

                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="absolute top-0 left-0 w-full h-full object-contain"
                    />
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 
                           bg-black/50 text-white p-2 rounded-full z-10 
                           hover:bg-black/75 transition-all duration-300"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 
                           bg-black/50 text-white p-2 rounded-full z-10
                           hover:bg-black/75 transition-all duration-300"
            >
                &#10095;
            </button>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <HeroCarousel />
            <div className="py-[70px]">
                <p className="text-[36px] font-medium text-center pb-[34px] text-[#222222]">
                    ABOUT NSS
                </p>
                <p className="text-center font-light text-[#848484] text-[18px] px-[20px] md:px-[40px] lg:px-[60px]">
                    The National Service Scheme (NSS) is a government-sponsored
                    public service program conducted by the Department of Youth
                    affairs and Sports of Govt. of India. It provides
                    opportunity to the student youth of 11th & 12th Class of
                    schools at +2 Board level and student youth of Technical
                    Institution, Graduate & Postgraduate at colleges and
                    University level of India to take part in various government
                    led community service activities & programmes.
                </p>
                <div className="flex justify-center pt-[34px]">
                    <CustomButton title="READ MORE" link="/about" />
                </div>
            </div>
            <div className="py-[70px] bg-[#F7F5F5]">
                <p className="text-[36px] font-medium text-center pb-[34px] text-[#222222]">
                    AIMS AND OBJECTIVES
                </p>
                <div className="grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 px-[20px] md:px-[40px] lg:px-[60px] gap-x-[30px] gap-y-[30px]">
                    <Item
                        title={
                            "To recognize the communities in which they operate"
                        }
                    />
                    <Item
                        title={
                            "To recognize how they relate to their community"
                        }
                    />
                    <Item
                        title={
                            "To determine the community's needs and issues, then include them in the process of finding solutions"
                        }
                    />
                    <Item
                        title={
                            "To cultivate a sense of civic and social duty among themselves"
                        }
                    />
                </div>
                <div className="flex justify-center pt-[34px]">
                    <CustomButton title="VIEW ALL" link="/aims-objectives" />
                </div>
            </div>
        </div>
    );
};

export default Home;
