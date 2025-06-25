"use client";
import React from "react";
import Image from "next/image";
import { assets } from "../../../public/assets/assets";
import { useTheme } from "../../context/ThemeContext";

function Header() {
  const { darkMode } = useTheme();

  return (
    <header
      className="w-full min-h-screen flex flex-col gap-3 pt-36 items-center mb-12 bg-transparent dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
      id="header"
    >
      {/* Background Image */}

      <div className="flex flex-col gap-4 items-center">
        <div className="relative">
          <Image
            src={assets.profile_img}
            alt=""
            className="w-48 h-48 rounded-full shadow-lg dark:shadow-gray-800/20 transition-all duration-300"
          />
        </div>
        <div className="flex gap-2">
          <h3 className="font-Ovo font-normal text-[20px] leading-[40px] text-center md:text-[25px] text-gray-900 dark:text-white transition-colors duration-300">
            Hi! I'm Amdjed Bouzid
          </h3>
          <div>
            <Image className="w-6 md:w-7" alt="" src={assets.hand_icon} />
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-4 md:gap-12 items-center">
        <h1 className="font-Ovo font-normal text-[50px] leading-[40px] text-center md:text-[80px] flex text-gray-900 dark:text-white transition-colors duration-300">
          full stack Web developer
        </h1>
        <h1 className="font-Ovo font-normal text-[50px] leading-[40px] text-center md:text-[80px] flex text-gray-900 dark:text-white transition-colors duration-300">
          Ai Student
        </h1>
      </div>

      <div className="flex flex-col h-[90px] w-full items-center mb-8">
        <p className="font-Ovo font-normal text-[15px] md:text-[25px] leading-[40px] text-gray-700 dark:text-gray-300 transition-colors duration-300">
          web developer and computer science student
        </p>
        <p className="font-Ovo font-normal text-[15px] md:text-[25px] leading-[40px] text-gray-700 dark:text-gray-300 transition-colors duration-300">
          specialist student in Ai
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 md:gap-4 flex-col md:flex-row w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px]">
        <a
          href="#contact"
          className="bg-[#202020] text-white w-[200px] sm:w-[210px] md:w-[220px] h-[60px] rounded-[50px] flex items-center justify-center font-Ovo gap-2 text-[16px] dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
        >
          Contact me{" "}
          <Image
            src={darkMode ? assets.right_arrow_bold_dark : assets.right_arrow}
            width={20}
            className="w-[20px]"
            alt="arrow"
          />
        </a>
        <a
          href="/Amdjed-Bouzid-full-stack-web-developer.pdf"
          download
          className="border border-black dark:border-white text-black dark:text-white w-[200px] sm:w-[210px] md:w-[220px] h-[60px] rounded-[50px] flex items-center justify-center font-Ovo text-[16px] hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
        >
          my resume
        </a>
      </div>
    </header>
  );
}

export default Header;
