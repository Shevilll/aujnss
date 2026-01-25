import React from "react";

const Join = () => {
    return (
        <div className="flex-1 min-h-[calc(100vh-210px)] md:min-h-[calc(100vh-240px)] p-[20px] md:p-[30px] lg:p-[60px]">
            <p className="text-[48px]">How to Join?</p>
            <p className=" w-[120px] border border-[#FFCC00] relative mb-[30px]"></p>
            <p className="text-justify text-[20px] text-[#222222] font-light">
                To be a volunteer of NSS, you need to register yourself by
                providing necessary information through the given google form.
            </p>
            <a href="/" target="_blank" rel="noreferrer">
                <div className="text-justify text-[20px] text-[#222222] font-light bg-gray-100 p-[20px] mt-[10px] rounded-lg">
                    <p className="font-semibold">
                        THE STUDENTS ARE REQUESTED TO CLICK ON THE GIVEN LINK TO
                        REGISTER FOR NSS
                    </p>
                    <div className="border border-black w-[40px] h-[40px] p-[6px] rounded-full flex items-center justify-center mt-[4px]">
                        →
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Join;
