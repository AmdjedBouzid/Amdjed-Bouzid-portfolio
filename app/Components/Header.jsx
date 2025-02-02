"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";

function Header() {
  return (
    <div className="w-full h-scree flex flex-col gap-3 pt-36 items-center">
      <div className="flex flex-col gap-4 items-center">
        {" "}
        <Image
          src={assets.profile_img}
          alt=""
          className="w-48 h-48 rounded-full"
        />
        <div className="flex gap-2">
          <h3 className="font-Ovo font-normal text-[20px] leading-[40px] text-center md:text-[25px]">
            Hi! I'm Amdjed Bouzid
          </h3>{" "}
          <h3>
            <Image className="w-6 md:w-7" alt="" src={assets.hand_icon} />
          </h3>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:gap-12 items-center h-[170px] ">
        <h1 className="font-Ovo font-normal text-[50px] leading-[40px] text-center md:text-[80px] flex ">
          full stack Web developer
        </h1>
        <h1 className="font-Ovo font-normal text-[50px] leading-[40px] text-center md:text-[80px] flex ">
          Ai Student
        </h1>
      </div>
      <div className="flex flex-col bg-red h-[90px] w-full items-center ">
        <p className="font-Ovo font-normal text-[15px] md:text-[25px] leading-[40px]">
          web developer and computer science student
        </p>
        <p className="font-Ovo font-normal text-[15px] md:text-[25px] leading-[40px]">
          specialist student in Ai
        </p>
      </div>
      <div className="md:h-[64px] h-32 w-[448px]  flex items-center gap-3 flex-col md:flex-row">
        <a
          href="#contact"
          className="bg-[#202020] text-white w-[226px] h-full rounded-[50px] flex items-center justify-center font-Ovo gap-2 text-[24px]"
        >
          Contact me <Image src={assets.right_arrow} width={30} />
        </a>
        <a
          href="/footer-bg-color.png"
          download
          className=" border border-black text-black w-[226px] h-full rounded-[50px] flex items-center justify-center font-Ovo text-[24px]"
        >
          my resume
        </a>
      </div>
    </div>
  );
}

export default Header;
