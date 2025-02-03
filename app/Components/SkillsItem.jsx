"use client";
import React from "react";
import Image from "next/image";
function skillsItem({ id, icon, title, description }) {
  console.log(id);
  return (
    <div
      className={`${
        id === 0 ? "shadow-[6px_6px_10px_rgba(0,0,0,0.4)]" : ""
      } h-[195px] w-1/5 border max-sm:w-1/2 border-black rounded-lg flex flex-col items-start gap-6 p-4`}
    >
      <div>
        <Image src={icon} alt="" className="w-[22px] h-[21px]" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-Outfit text-[20px]">{title}</div>
        <div className="font-Outfit text-[13px] text-gray-400">
          {description}
        </div>
      </div>
    </div>
  );
}

export default skillsItem;
