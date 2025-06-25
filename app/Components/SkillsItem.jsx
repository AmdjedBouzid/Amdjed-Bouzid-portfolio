"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

function skillsItem({ iconDark, iconLight, title, description }) {
  const { darkMode } = useTheme();

  return (
    <div className="w-[180px] h-[180px] p-4 flex flex-col gap-3 border-[1px] rounded-[8px] max-sm:w-full mb-2 hover:bg-slate-100 dark:hover:bg-gray-800 cursor-pointer">
      <div>
        <Image
          src={darkMode ? iconDark : iconLight}
          alt=""
          className="w-[22px] h-[21px]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-Outfit text-[20px] dark:text-white">{title}</div>
        <div dir="center" className="font-Outfit text-[13px] text-gray-400">
          {description}
        </div>
      </div>
    </div>
  );
}

export default skillsItem;
