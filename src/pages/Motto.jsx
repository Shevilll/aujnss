import React from "react";

const Motto = () => {
    return (
        <div className="flex-1 min-h-[calc(100vh-210px)] md:min-h-[calc(100vh-240px)] p-[20px] md:p-[30px] lg:p-[60px]">
            <p className="text-[48px]">Motto</p>
            <p className=" w-[120px] border border-[#FFCC00] relative mb-[30px]"></p>
            <div className="w-full h-auto border border-black p-[30px] flex flex-col justify-center items-center">
                <p className="text-[22px] font-light text-center">
                    The motto of National Service Scheme is
                </p>
                <p className="text-[40px] text-center">NOT ME BUT YOU.</p>
            </div>
        </div>
    );
};

export default Motto;
