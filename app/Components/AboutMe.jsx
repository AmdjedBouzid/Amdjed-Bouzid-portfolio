import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
function AboutMe() {
  return (
    <div className="h-screen w-full flex flex-col items-center pt-36 ">
      <div className="h-[150px] w-[260px] flex flex-col items-center">
        <p className="font-Ovo text-[24px] leading-[27px]">introduction</p>
        <h1 className="font-Ovo text-[60px]">About me </h1>
      </div>
      <div className="h-[530px]  w-full px-48 max-sm:px-2 flex gap-20 items-start">
        <Image
          src={assets.profile_img}
          alt=""
          className="h-full w-[400px] rounded-lg max-sm:hidden"
        />
        <div className="h-full w-full  flex flex-col max-sm:items-center items-start ">
          <p className="font-Ovo text-[20px] w-[80%] max-sm:w-full ">
            I am a seasoned Full Stack Web Developer specializing in the MERN
            stack, with over a decade of experience building scalable,
            high-performance web applications. Passionate about delivering
            seamless, secure, and innovative solutions, I excel at transforming
            complex ideas into impactful digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
