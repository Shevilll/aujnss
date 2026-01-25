import React from "react";

const Aims = () => {
    return (
        <div className="flex-1 min-h-[calc(100vh-210px)] md:min-h-[calc(100vh-240px)] p-[20px] md:p-[30px] lg:p-[60px]">
            <h1 className="text-[48px]">Aims and Objectives</h1>
            <div className="w-[120px] border-b-[2px] border-[#FFCC00] mb-[32px]"></div>

            <div className="flex flex-col md:flex-row gap-[32px]">
                <div className="flex-1 relative pl-[32px]">
                    <div className="absolute left-[16px] top-0 h-full w-[4px] bg-[#EDEFF2] -z-10"></div>

                    <ul className="space-y-4 text-lg list-disc list-outside">
                        {[
                            "To recognize the communities in which they operate.",
                            "To recognize how they relate to their community.",
                            "To determine the community's needs and issues, then include them in the process of finding solutions.",
                            "To cultivate a sense of civic and social duty among themselves.",
                            "To apply their expertise to identify workable solutions for personal and societal issues.",
                            "To develop the skills necessary for sharing duties and living in a community.",
                            "To develop your ability to encourage community involvement.",
                            "To develop a democratic mindset and leadership skills.",
                            "To increase your ability to handle crises and natural calamities.",
                            "To practice social harmony and national integration.",
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="pl-[16px] marker:text-[#FF0000] marker:text-[24px]"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="w-[256px] h-[256px] md:w-[320px] md:h-[320px] lg:w-[384px] lg:h-[384px] rounded-full overflow-hidden border-4 border-[#FFCC00]">
                        <img
                            src="/hospital/4.jpg"
                            alt="hospital visit"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aims;
