import React from "react";

const Footer = () => {
  return (
    <div className="h-[80px] w-full bg-[#1C2025] flex items-center justify-center z-10 flex-col">
      <p className="text-[#D4DAE3] text-center px-[10px]">
        Copyright © 2025 - Amity University Jharkhand - All Rights Reserved
      </p>
      <p className="text-[#D4DAE3] text-center px-[10px]">
        Website Designed & Developed by{" "}
        <a
          href="https://theahmadfaraz.com"
          className="underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Ahmad Faraz
        </a>
      </p>
    </div>
  );
};

export default Footer;
