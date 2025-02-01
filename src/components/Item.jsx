import React from "react";

const Item = ({ title }) => {
    return (
        <div className="border border-[#FECC00] h-auto flex items-center justify-center hover:bg-[#FECC00] transition-all duration-500 ease-in-out transform hover:-translate-y-[10px]">
            <p className="text-center p-[10px] text-[22px] text-[#222222] font-light">
                {title}
            </p>
        </div>
    );
};

export default Item;
