import React, { useState } from "react";
import { Mail, Phone, User } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: <User className="w-8 h-8" />,
            title: "Name",
            value: "Mr Sumeer Ranjan",
            detail: "NSS Coordinator",
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Phone",
            value: "+91 83401 68700",
            detail: "",
        },
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Email",
            value: "sranjan@rnc.amity.edu",
            detail: "",
        },
    ];

    return (
        <div className="flex-1 min-h-[calc(100vh-210px)] md:min-h-[calc(100vh-240px)] p-[20px] md:p-[30px] lg:p-[60px]">
            <p className="text-[48px]">Contact Us</p>
            <p className=" w-[120px] border border-[#FFCC00] relative mb-[30px]"></p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                {contactInfo.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                        <div className="p-[24px]">
                            <div className="flex items-center justify-center w-[64px] h-[64px] bg-yellow-100 rounded-full mb-[24px] mx-auto">
                                {item.icon}
                            </div>
                            <div className="text-center">
                                <h3 className="text-[20px] font-semibold text-gray-900 mb-[8px]">
                                    {item.title}
                                </h3>
                                <p className="text-[18px] text-gray-700 mb-[8px]">
                                    {item.value}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {item.detail}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
