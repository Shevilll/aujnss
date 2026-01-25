import React, { useState } from "react";

const Others = () => {
    const img_arr = [
        {
            src: "/nukkad_natak/1.jpg",
            alt: "membership_drive",
            title: "ANNUAL NSS MEMBERSHIP DRIVE OF NSS AUJ",
            date: "24 SEPT 2024",
        },
        {
            src: "/nukkad_natak/2.jpg",
            alt: "membership_drive",
            title: "ANNUAL NSS MEMBERSHIP DRIVE OF NSS AUJ",
            date: "24 SEPT 2024",
        },
        {
            src: "/nukkad_natak/3.jpg",
            alt: "membership_drive",
            title: "ANNUAL NSS MEMBERSHIP DRIVE OF NSS AUJ",
            date: "24 SEPT 2024",
        },
        {
            src: "/nukkad_natak/4.jpg",
            alt: "nukkad_natak",
            title: "NUKKAD NATAK",
            date: "24 SEPT 2024",
        },
        {
            src: "/nukkad_natak/5.jpg",
            alt: "nukkad_natak",
            title: "NUKKAD NATAK",
            date: "24 SEPT 2024",
        },
        {
            src: "/nukkad_natak/6.jpg",
            alt: "nukkad_natak",
            title: "NUKKAD NATAK",
            date: "24 SEPT 2024",
        },
        {
            src: "/webinar/1.jpg",
            alt: "webinar",
            title: "WEBINAR ON AWARENESS ABOUT SICKLE CELL ANAEMIA AND THALASSEMIA",
            date: "24 OCT 2024",
        },
        {
            src: "/webinar/2.jpg",
            alt: "webinar",
            title: "WEBINAR ON AWARENESS ABOUT SICKLE CELL ANAEMIA AND THALASSEMIA",
            date: "24 OCT 2024",
        },
        {
            src: "/hospital/1.jpg",
            alt: "hospital",
            title: "DIWALI WITH MY BHARAT FIRST ANNIVERSARY CELEBRATION: HOSPITAL VOLUNTEERING PROGRAM AT SADAR HOSPITAL",
            date: "27-30 OCT 2024",
        },
        {
            src: "/hospital/2.jpg",
            alt: "hospital",
            title: "DIWALI WITH MY BHARAT FIRST ANNIVERSARY CELEBRATION: HOSPITAL VOLUNTEERING PROGRAM AT SADAR HOSPITAL",
            date: "27-30 OCT 2024",
        },
        {
            src: "/hospital/3.jpg",
            alt: "hospital",
            title: "DIWALI WITH MY BHARAT FIRST ANNIVERSARY CELEBRATION: HOSPITAL VOLUNTEERING PROGRAM AT SADAR HOSPITAL",
            date: "27-30 OCT 2024",
        },
        {
            src: "/hospital/4.jpg",
            alt: "hospital",
            title: "DIWALI WITH MY BHARAT FIRST ANNIVERSARY CELEBRATION: HOSPITAL VOLUNTEERING PROGRAM AT SADAR HOSPITAL",
            date: "27-30 OCT 2024",
        },
        {
            src: "/hospital/5.jpg",
            alt: "hospital",
            title: "DIWALI WITH MY BHARAT FIRST ANNIVERSARY CELEBRATION: HOSPITAL VOLUNTEERING PROGRAM AT SADAR HOSPITAL",
            date: "27-30 OCT 2024",
        },
        {
            src: "/hospital/6.jpg",
            alt: "hospital",
            title: "DIWALI WITH MY BHARAT FIRST ANNIVERSARY CELEBRATION: HOSPITAL VOLUNTEERING PROGRAM AT SADAR HOSPITAL",
            date: "27-30 OCT 2024",
        },
        {
            src: "/blood_donation/1.jpg",
            alt: "blood_donation",
            title: "SENSITIZATION SESSION ON NSS BLOOD DONATION CAMP",
            date: "11 NOV 2024",
        },
        {
            src: "/blood_donation/2.jpg",
            alt: "blood_donation",
            title: "NSS BLOOD DONATION CAMP",
            date: "19 NOV 2024",
        },
        {
            src: "/blood_donation/3.jpg",
            alt: "blood_donation",
            title: "NSS BLOOD DONATION CAMP",
            date: "19 NOV 2024",
        },
        {
            src: "/blood_donation/4.jpg",
            alt: "blood_donation",
            title: "NSS BLOOD DONATION CAMP",
            date: "19 NOV 2024",
        },
        {
            src: "/blood_donation/5.jpg",
            alt: "blood_donation",
            title: "NSS BLOOD DONATION CAMP",
            date: "19 NOV 2024",
        },
    ];

    const groupedImages = img_arr.reduce((acc, image) => {
        if (!acc[image.title]) {
            acc[image.title] = [];
        }
        acc[image.title].push(image);
        return acc;
    }, {});

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedImageGroup, setSelectedImageGroup] = useState([]);

    const openModal = (image, index, group) => {
        setSelectedImage(image);
        setSelectedImageIndex(index);
        setSelectedImageGroup(group);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
        setSelectedImageIndex(0);
        setSelectedImageGroup([]);
    };

    const goToPrevious = () => {
        const newIndex =
            (selectedImageIndex - 1 + selectedImageGroup.length) %
            selectedImageGroup.length;
        setSelectedImage(selectedImageGroup[newIndex]);
        setSelectedImageIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = (selectedImageIndex + 1) % selectedImageGroup.length;
        setSelectedImage(selectedImageGroup[newIndex]);
        setSelectedImageIndex(newIndex);
    };

    return (
        <div className="p-8">
            {Object.entries(groupedImages).map(([title, images]) => (
                <div key={title} className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                        {title}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                onClick={() => openModal(image, index, images)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-48 object-contain"
                                />
                                <div className="p-4">
                                    <p className="text-sm text-gray-600">
                                        {image.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {isModalOpen && selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <button
                        onClick={closeModal}
                        className="fixed top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75"
                    >
                        ✕
                    </button>

                    <button
                        onClick={goToPrevious}
                        className="fixed left-4 top-1/2 -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75"
                    >
                        ←
                    </button>

                    <button
                        onClick={goToNext}
                        className="fixed right-4 top-1/2 -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75"
                    >
                        →
                    </button>

                    <div className="px-20">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-[80vw] max-h-[90vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Others;
