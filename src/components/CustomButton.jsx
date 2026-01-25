import React from "react";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ title, link }) => {
    const navigate = useNavigate();
    return (
        <div
            className="w-fit bg-[#FECC00] hover:bg-transparent transition-all duration-500 ease-in-out border-2 border-[#FECC00] hover:cursor-pointer"
            onClick={() => navigate(link)}
        >
            <p className="py-[10px] px-[20px] text-black font-light hover:text-[#FECC00] transition-all duration-500 ease-in-out">
                {title}
            </p>
        </div>
    );
};

export default CustomButton;
