import React from "react";

const About = () => {
    return (
        <div className="flex-1 min-h-[calc(100vh-210px)] md:min-h-[calc(100vh-240px)] p-[20px] md:p-[30px] lg:p-[60px]">
            <p className="text-[48px]">About NSS</p>
            <p className=" w-[120px] border border-[#FFCC00] relative mb-[30px]"></p>
            <p className="text-justify text-[20px] text-[#222222] font-light">
                The National Service Scheme (NSS) is a government-sponsored
                public service program conducted by the Department of Youth
                affairs and Sports of Govt. of India. It provides opportunity to
                the student youth of 11th & 12th Class of schools at +2 Board
                level and student youth of Technical Institution, Graduate &
                Postgraduate at colleges and University level of India to take
                part in various government led community service activities &
                programmes.
            </p>
            <p className="text-[28px] pt-[30px] pb-[10px]">
                NSS in Amity University Jharkhand
            </p>
            <p className="text-justify text-[20px] text-[#222222] font-light">
                On May 1, 2024, Amity University Jharkhand established a
                self-financed unit. Since then, more than 450 students have
                enrolled as National Service Scheme (NSS) volunteers. The NSS
                Unit at AUJ actively engages in various initiatives aimed at
                benefiting both the student community and the broader society in
                which they operate.
            </p>
        </div>
    );
};

export default About;
