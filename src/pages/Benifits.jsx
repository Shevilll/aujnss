import React from "react";

const Benefits = () => {
    return (
        <div className="flex-1 min-h-[calc(100vh-210px)] md:min-h-[calc(100vh-240px)] p-[20px] md:p-[30px] lg:p-[60px]">
            <h1 className="text-[48px]">Benefits of joining NSS</h1>
            <div className="w-32 border-b-[2px] border-[#FFCC00] mb-[32px]"></div>
            <div className="flex flex-col md:flex-row gap-[32px]">
                <div className="flex-1 relative pl-[32px]">
                    <div className="absolute left-[16px] top-0 h-full w-[4px] bg-[#EDEFF2] -z-10"></div>
                    <ul className="space-y-4 text-lg list-disc list-outside">
                        {[
                            "An NSS volunteer who participates in the community service program would be a senior secondary student or a college student.",
                            "The NSS provides a great opportunity to devote a portion of one's free time to understanding and assisting the impoverished and disadvantaged citizens who reside in villages and slums.",
                            "It enables the volunteers to prepare for their roles as the nation's future leaders and decision-makers.",
                            "It provides training to provide volunteers the bare minimum of skills they need to run activities.",
                            "It provides chances to participate in intercollegiate, interuniversity, and interstate camps and share opinions with students from different states, institutions, and universities.",
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
                            src="/nukkad_natak/5.jpg"
                            alt="nukkad natak"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
